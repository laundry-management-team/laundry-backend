import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { Messaging } from 'firebase-admin/messaging';
import { PrismaService } from '../prisma/prisma.service';
import { FirebaseService } from '../firebase/firebase.service';
import { Role } from '../../generated/prisma/client';
import {
  BroadcastNotificationJob,
  CustomNotificationJob,
  NewOrderNotificationJob,
  OrderStatusNotificationJob,
} from './notifications.service';

@Processor('notifications')
export class NotificationsProcessor extends WorkerHost {
  private readonly logger = new Logger(NotificationsProcessor.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly firebase: FirebaseService,
  ) {
    super();
  }

  async process(job: Job): Promise<void> {
    switch (job.name) {
      case 'order-status-changed':
        return this.processOrderStatusChanged(
          job.data as OrderStatusNotificationJob,
        );
      case 'new-order':
        return this.processNewOrder(job.data as NewOrderNotificationJob);
      case 'custom-notification':
        return this.processCustomNotification(
          job.data as CustomNotificationJob,
        );
      case 'broadcast-notification':
        return this.processBroadcast(job.data as BroadcastNotificationJob);
      default:
        this.logger.warn(`Unknown notification job type: ${job.name}`);
    }
  }

  private async processOrderStatusChanged(job: OrderStatusNotificationJob) {
    const tokens = await this.prisma.deviceToken.findMany({
      where: { userId: job.customerId },
    });

    await this.sendToTokens(
      tokens.map((t) => t.token),
      {
        title: 'Order update',
        body: `Your order status changed to ${job.status}`,
      },
      { orderId: job.orderId, status: job.status },
    );
  }

  private async processNewOrder(job: NewOrderNotificationJob) {
    const tokens = await this.prisma.deviceToken.findMany({
      where: { user: { role: Role.STAFF, branchId: job.branchId } },
    });

    await this.sendToTokens(
      tokens.map((t) => t.token),
      {
        title: 'New order',
        body: `Order ${job.orderNumber} is waiting for staff`,
      },
      { orderId: job.orderId },
    );
  }

  private async processCustomNotification(job: CustomNotificationJob) {
    const tokens = job.token
      ? [job.token]
      : job.userId
        ? (
            await this.prisma.deviceToken.findMany({
              where: { userId: job.userId },
            })
          ).map((t) => t.token)
        : [];

    if (tokens.length === 0) {
      this.logger.debug('No device tokens matched custom notification job');
      return;
    }

    await this.sendToTokens(
      tokens,
      { title: job.title, body: job.body },
      job.data,
    );
  }

  private async processBroadcast(job: BroadcastNotificationJob) {
    const tokens = await this.prisma.deviceToken.findMany();

    await this.sendToTokens(
      tokens.map((t) => t.token),
      { title: job.title, body: job.body },
      job.data,
    );
  }

  private async sendToTokens(
    tokens: string[],
    notification: { title: string; body: string },
    data?: Record<string, string>,
  ) {
    if (tokens.length === 0) {
      this.logger.debug('No device tokens to send to, skipping push');
      return;
    }

    const messaging: Messaging | undefined = this.firebase.messaging;
    if (!messaging) {
      this.logger.warn(
        `Firebase not configured - push for ${tokens.length} token(s): "${notification.title}: ${notification.body}" [DEV ONLY]`,
      );
      return;
    }

    const staleTokens: string[] = [];
    const failures: unknown[] = [];

    const results = await Promise.allSettled(
      tokens.map((token) => messaging.send({ token, notification, data })),
    );

    results.forEach((result, i) => {
      if (result.status === 'fulfilled') return;

      const token = tokens[i];
      const code = (result.reason as { code?: string })?.code;
      if (
        code === 'messaging/registration-token-not-registered' ||
        code === 'messaging/invalid-registration-token'
      ) {
        staleTokens.push(token);
        return;
      }

      this.logger.error(
        `Push failed for token ${token}: ${
          (result.reason as Error)?.message ?? result.reason
        }`,
      );
      failures.push(result.reason);
    });

    if (staleTokens.length > 0) {
      await this.prisma.deviceToken.deleteMany({
        where: { token: { in: staleTokens } },
      });
    }

    if (failures.length > 0) {
      throw failures[0];
    }
  }
}

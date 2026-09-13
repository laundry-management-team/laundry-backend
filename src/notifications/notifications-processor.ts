import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Job } from 'bullmq';
import { OrderStatusNotificationJob } from './notifications.service';
import { FirebaseService } from '../firebase/firebase.service';

@Processor('notifications')
export class NotificationsProcessor extends WorkerHost {
  private readonly logger = new Logger(NotificationsProcessor.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly firebase: FirebaseService,
  ) {
    super();
  }

  async process(job: Job<OrderStatusNotificationJob>): Promise<void> {
    const tokens = await this.prisma.deviceToken.findMany({
      where: { userId: job.data.customerId },
    });

    if (tokens.length === 0) {
      this.logger.debug(
        `No device tokens for user ${job.data.customerId}, skipping push`,
      );
      return;
    }

    const messaging = this.firebase.messaging;
    const body = `Your order status changed to ${job.data.status}`;

    if (!messaging) {
      this.logger.warn(
        `Firebase not configured - push for ${tokens.length} token(s): "${body}" [DEV ONLY]`,
      );
      return;
    }

    const staleTokens: string[] = [];
    const failures: unknown[] = [];

    const results = await Promise.allSettled(
      tokens.map(({ token }) =>
        messaging.send({
          token,
          notification: { title: 'Order update', body },
          data: { orderId: job.data.orderId, status: job.data.status },
        }),
      ),
    );

    results.forEach((result, i) => {
      if (result.status === 'fulfilled') return;

      const token = tokens[i].token;
      const code = (result.reason as { code?: string })?.code;
      if (
        code === 'messaging/registration-token-not-registered' ||
        code === 'messaging/invalid-registration-token'
      ) {
        staleTokens.push(token);
        return;
      }

      this.logger.error(
        `Push failed for token ${token} (order ${job.data.orderId}): ${
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

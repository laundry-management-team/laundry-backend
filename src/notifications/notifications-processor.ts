import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Job } from 'bullmq';
import { OrderStatusNotificationJob } from './notifications.service';

@Processor('notifications')
export class NotificationsProcessor extends WorkerHost {
  private readonly logger = new Logger(NotificationsProcessor.name);

  constructor(private readonly prisma: PrismaService) {
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

    const providerUrl = process.env.PUSH_PROVIDER_URL;
    const message = `Your order status changed to ${job.data.status}`;

    for (const token of tokens) {
      if (!providerUrl) {
        this.logger.warn(
          `PUSH_PROVIDER_URL not set - push for token ${token.token}: "${message}"  [DEV ONLY]`,
        );
        continue;
      }

      const response = await fetch(providerUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: token.token,
          message,
          orderId: job.data.orderId,
        }),
      });
      if (!response.ok) {
        throw new Error(
          `Push provider responded ${response.status} for token ${token.token}`,
        );
      }
    }
  }
}

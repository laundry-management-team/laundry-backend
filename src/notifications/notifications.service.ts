import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { PrismaService } from '../prisma/prisma.service';
import { DevicePlatform } from '../../generated/prisma/enums';

export interface OrderStatusNotificationJob {
  orderId: string;
  status: string;
  customerId: string;
}

export interface NewOrderNotificationJob {
  orderId: string;
  orderNumber: string;
  branchId: string;
}

export interface CustomNotificationJob {
  title: string;
  body: string;
  userId?: string;
  token?: string;
  data?: Record<string, string>;
}

export interface BroadcastNotificationJob {
  title: string;
  body: string;
  data?: Record<string, string>;
}

@Injectable()
export class NotificationsService {
  constructor(
    @InjectQueue('notifications') private readonly queue: Queue,
    private readonly prisma: PrismaService,
  ) {}

  async notifyOrderStatusChanged(job: OrderStatusNotificationJob) {
    await this.queue.add('order-status-changed', job);
  }

  async notifyNewOrder(job: NewOrderNotificationJob) {
    await this.queue.add('new-order', job);
  }

  async sendToUser(job: CustomNotificationJob) {
    await this.queue.add('custom-notification', job);
  }

  async broadcast(job: BroadcastNotificationJob) {
    await this.queue.add('broadcast-notification', job);
  }

  async registerDeviceToken(
    userId: string,
    token: string,
    platform: DevicePlatform,
  ) {
    return this.prisma.deviceToken.upsert({
      where: { token },
      create: { userId, token, platform },
      update: { userId, platform },
    });
  }

  async unregisterDeviceToken(userId: string, token: string) {
    await this.prisma.deviceToken.deleteMany({ where: { token, userId } });
  }
}

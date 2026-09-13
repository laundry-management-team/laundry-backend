import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

export interface OrderStatusNotificationJob {
  orderId: string;
  status: string;
  customerId: string;
}

@Injectable()
export class NotificationsService {
  constructor(@InjectQueue('notifications') private readonly queue: Queue) {}

  async notifyOrderStatusChanged(job: OrderStatusNotificationJob) {
    await this.queue.add('order-status-changed', job);
  }
}

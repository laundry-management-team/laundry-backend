import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { OrderNumberService } from './order-number.service';
import { NotificationsModule } from '../notifications/notifications.module';
import { IdempotencyInterceptor } from '../common/idempotency.interceptor';

@Module({
  imports: [NotificationsModule],
  controllers: [OrdersController],
  providers: [OrdersService, OrderNumberService, IdempotencyInterceptor],
})
export class OrdersModule {}

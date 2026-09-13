import { BadRequestException } from '@nestjs/common';
import { OrderStatus } from '../../generated/prisma/client';

const TRANSITIONS: Record<OrderStatus, OrderStatus[]> = {
  WAITING_FOR_STAFF: [OrderStatus.ORDER_ACCEPTED, OrderStatus.CANCELLED],
  ORDER_ACCEPTED: [OrderStatus.PROCESSING, OrderStatus.CANCELLED],
  PROCESSING: [OrderStatus.READY],
  READY: [OrderStatus.COMPLETED],
  COMPLETED: [],
  CANCELLED: [],
};

export function assertValidTransition(
  from: OrderStatus,
  to: OrderStatus,
): void {
  if (!TRANSITIONS[from].includes(to)) {
    throw new BadRequestException(`Cannot move an order from ${from} to ${to}`);
  }
}

import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { PrismaService } from '../prisma/prisma.service';
import { OrderNumberService } from './order-number.service';
import { AuthenticatedUser } from '../auth/authenticated-user.interface';
import {
  OrderStatus,
  PaymentStatus,
  Role,
} from '../../generated/prisma/client';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
import { assertValidTransition } from './order-state-machine';
import { RedisService } from '../redis/redis.service';
import { ORDER_STATUS_CHANGED_CHANNEL } from './order-events';
import { NotificationsService } from '../notifications/notifications.service';

@Injectable()
export class OrdersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly orderNumbers: OrderNumberService,
    private readonly redis: RedisService,
    private readonly notifications: NotificationsService,
  ) {}

  async create(dto: CreateOrderDto, actingUser: AuthenticatedUser) {
    const customerId =
      actingUser.role === Role.CUSTOMER ? actingUser.userId : dto.customerId;
    if (!customerId) {
      throw new BadRequestException(
        'customerId is required when staff create an order',
      );
    }

    const services = await this.prisma.service.findMany({
      where: {
        id: { in: dto.items.map((item) => item.serviceId) },
        branchId: dto.branchId,
      },
    });
    if (services.length !== dto.items.length) {
      throw new BadRequestException(
        'One or more services do not belong to this branch',
      );
    }
    const priceByServiceId = new Map(services.map((s) => [s.id, s.price]));

    const items = dto.items.map((item) => {
      const price = priceByServiceId.get(item.serviceId);
      return {
        serviceId: item.serviceId,
        quantityOrWeight: item.quantityOrWeight,
        subtotal: Number(price) * item.quantityOrWeight,
      };
    });
    const totalAmount = items.reduce((sum, item) => sum + item.subtotal, 0);

    const orderNumber = await this.orderNumbers.next();

    return this.prisma.$transaction(async (tx) => {
      const order = await tx.order.create({
        data: {
          orderNumber,
          customerId,
          branchId: dto.branchId,
          note: dto.note,
          itemCount: items.length,
          totalAmount,
          items: { create: items },
        },
        include: { items: true },
      });

      await tx.orderStatusEvent.create({
        data: {
          orderId: order.id,
          status: OrderStatus.WAITING_FOR_STAFF,
          changedById: actingUser.userId,
        },
      });

      return order;
    });
  }

  async findAll(actingUser: AuthenticatedUser) {
    if (actingUser.role === Role.CUSTOMER) {
      return this.prisma.order.findMany({
        where: { customerId: actingUser.userId },
        orderBy: { createdAt: 'desc' },
      });
    }
    if (actingUser.role === Role.STAFF) {
      return this.prisma.order.findMany({
        where: { branchId: actingUser.branchId ?? undefined },
        orderBy: { createdAt: 'desc' },
      });
    }
    return this.prisma.order.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async findOne(id: string, actingUser: AuthenticatedUser) {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: { items: true },
    });
    if (!order) throw new NotFoundException('Order not found');
    this.assertCanView(order, actingUser);
    return order;
  }

  async findHistory(id: string, actingUser: AuthenticatedUser) {
    const order = await this.prisma.order.findUnique({ where: { id } });
    if (!order) throw new NotFoundException('Order not found');
    this.assertCanView(order, actingUser);

    return this.prisma.orderStatusEvent.findMany({
      where: { orderId: id },
      orderBy: { createdAt: 'asc' },
    });
  }

  async updateStatus(
    id: string,
    dto: UpdateOrderStatusDto,
    actingUser: AuthenticatedUser,
  ) {
    const order = await this.prisma.order.findUnique({ where: { id } });
    if (!order) throw new NotFoundException('Order not found');
    if (
      actingUser.role === Role.STAFF &&
      order.branchId !== actingUser.branchId
    ) {
      throw new ForbiddenException('Order belongs to a different branch');
    }

    assertValidTransition(order.status, dto.status);

    const assignStaff =
      dto.status === OrderStatus.ORDER_ACCEPTED && !order.assignedStaffId
        ? actingUser.userId
        : undefined;

    const updated = await this.prisma.$transaction(async (tx) => {
      const updatedOrder = await tx.order.update({
        where: { id },
        data: { status: dto.status, assignedStaffId: assignStaff },
      });

      await tx.orderStatusEvent.create({
        data: {
          orderId: id,
          status: dto.status,
          changedById: actingUser.userId,
          note: dto.note,
        },
      });

      return updatedOrder;
    });

    await this.redis.publish(
      ORDER_STATUS_CHANGED_CHANNEL,
      JSON.stringify({
        orderId: updated.id,
        status: updated.status,
        paymentStatus: updated.paymentStatus,
        customerId: updated.customerId,
        branchId: updated.branchId,
      }),
    );

    await this.notifications.notifyOrderStatusChanged({
      orderId: updated.id,
      status: updated.status,
      customerId: updated.customerId,
    });

    return updated;
  }

  async markAsPaid(id: string, actingUser: AuthenticatedUser) {
    const order = await this.prisma.order.findUnique({ where: { id } });
    if (!order) throw new NotFoundException('Order not found');
    if (
      actingUser.role === Role.STAFF &&
      order.branchId !== actingUser.branchId
    ) {
      throw new ForbiddenException('Order belongs to a different branch');
    }
    if (order.paymentStatus === PaymentStatus.PAID) {
      throw new BadRequestException('Order is already marked as paid');
    }

    const updated = await this.prisma.order.update({
      where: { id },
      data: {
        paymentStatus: PaymentStatus.PAID,
        markedPaidById: actingUser.userId,
        paidAt: new Date(),
      },
    });

    await this.redis.publish(
      ORDER_STATUS_CHANGED_CHANNEL,
      JSON.stringify({
        orderId: updated.id,
        status: updated.status,
        paymentStatus: updated.paymentStatus,
        customerId: updated.customerId,
        branchId: updated.branchId,
      }),
    );

    return updated;
  }

  async cancel(id: string, actingUser: AuthenticatedUser) {
    const order = await this.prisma.order.findUnique({ where: { id } });
    if (!order) throw new NotFoundException('Order not found');
    if (
      actingUser.role === Role.CUSTOMER &&
      order.customerId !== actingUser.userId
    ) {
      throw new ForbiddenException('Not your order');
    }
    return this.updateStatus(id, { status: OrderStatus.CANCELLED }, actingUser);
  }

  private assertCanView(
    order: { customerId: string; branchId: string },
    actingUser: AuthenticatedUser,
  ) {
    if (
      actingUser.role === Role.CUSTOMER &&
      order.customerId !== actingUser.userId
    ) {
      throw new ForbiddenException('Not your order');
    }
    if (
      actingUser.role === Role.STAFF &&
      order.branchId !== actingUser.branchId
    ) {
      throw new ForbiddenException('Order belongs to a different branch');
    }
  }
}

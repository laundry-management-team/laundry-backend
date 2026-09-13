import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import { Role } from '../../generated/prisma/client';
import { ApiTags } from '@nestjs/swagger';
import type { AuthenticatedUser } from '../auth/authenticated-user.interface';
import { seconds, Throttle } from '@nestjs/throttler';
import { IdempotencyInterceptor } from '../common/idempotency.interceptor';

@ApiTags('Orders')
@Controller('orders')
@UseGuards(JwtAuthGuard, RolesGuard)
export class OrdersController {
  constructor(private readonly orders: OrdersService) {}

  @UseInterceptors(IdempotencyInterceptor)
  @Throttle({ default: { limit: 20, ttl: seconds(60) } })
  @Post()
  create(@Body() dto: CreateOrderDto, @CurrentUser() user: AuthenticatedUser) {
    return this.orders.create(dto, user);
  }

  @Get()
  findAll(@CurrentUser() user: AuthenticatedUser) {
    return this.orders.findAll(user);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.orders.findOne(id, user);
  }

  @Get(':id/history')
  findHistory(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.orders.findHistory(id, user);
  }

  @Patch(':id/status')
  @Roles(Role.STAFF, Role.ADMIN)
  updateStatus(
    @Param('id') id: string,
    @Body() dto: UpdateOrderStatusDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.orders.updateStatus(id, dto, user);
  }

  @Patch(':id/payment')
  @Roles(Role.STAFF, Role.ADMIN)
  markAsPaid(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.orders.markAsPaid(id, user);
  }

  @Post(':id/cancel')
  cancel(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.orders.cancel(id, user);
  }
}

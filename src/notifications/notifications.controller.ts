import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { NotificationsService } from './notifications.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/authenticated-user.interface';
import { Role } from '../../generated/prisma/client';
import { RegisterDeviceTokenDto } from './dto/register-device-token.dto';
import { SendNotificationDto } from './dto/send-notification.dto';
import { BroadcastNotificationDto } from './dto/broadcast-notification.dto';

@ApiTags('Notifications')
@ApiBearerAuth()
@Controller('notifications')
@UseGuards(JwtAuthGuard, RolesGuard)
export class NotificationsController {
  constructor(private readonly notifications: NotificationsService) {}

  @Post('device-tokens')
  registerDeviceToken(
    @Body() dto: RegisterDeviceTokenDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.notifications.registerDeviceToken(
      user.userId,
      dto.token,
      dto.platform,
    );
  }

  @Delete('device-tokens/:token')
  unregisterDeviceToken(
    @Param('token') token: string,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.notifications.unregisterDeviceToken(user.userId, token);
  }

  @Post('send')
  @Roles(Role.ADMIN)
  send(@Body() dto: SendNotificationDto) {
    return this.notifications.sendToUser(dto);
  }

  @Post('broadcast')
  @Roles(Role.ADMIN)
  broadcast(@Body() dto: BroadcastNotificationDto) {
    return this.notifications.broadcast(dto);
  }
}

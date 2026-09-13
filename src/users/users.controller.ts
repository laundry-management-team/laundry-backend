import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import { ApiTags } from '@nestjs/swagger';
import { Role } from '../../generated/prisma/client';

@ApiTags('Users')
@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {
  @Get('me')
  me(@CurrentUser() user: { userId: string; role: Role }) {
    return user;
  }

  @Get('staff-only')
  @Roles(Role.STAFF, Role.ADMIN)
  staffOnly(@CurrentUser() user: { userId: string; role: Role }) {
    return { message: 'visible to staff+', user };
  }
}

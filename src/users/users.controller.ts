import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Role } from '../../generated/prisma/client';
import type { AuthenticatedUser } from '../auth/authenticated-user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ListUsersQueryDto } from './dto/list-users-query.dto';
import { ResponseMessage } from '../common/decorators/response-message.decorator';
import { RequestResetPasswordDto } from '../auth/dto/request-reset-password.dto';
import { VerifyForgotPasswordOtpDto } from '../auth/dto/verify-forgot-password-otp.dto';
import { ResetPasswordDto } from '../auth/dto/reset-password.dto';
import { Public } from '../auth/public.decorator';
import { DeleteAccountDto } from './dto/delete-account.dto';
import { ApiSuccessResponseExample } from '../common/decorators/api-success-response.decorator';

const USER_EXAMPLE = {
  id: 'b3f1c2a0-1234-4a5b-9c6d-abcdef123456',
  phone: '+85620XXXXXXX',
  countryCode: '+856',
  email: 'staff@laundry.com',
  name: 'Somchai P.',
  avatarUrl: 'https://cdn.example.com/avatars/u1.png',
  role: 'STAFF',
  branchId: 'b3f1c2a0-1234-4a5b-9c6d-abcdef654321',
  isActive: true,
  createdAt: '2026-09-14T10:00:00+07:00',
  updatedAt: '2026-09-14T10:00:00+07:00',
};

@ApiTags('Users')
@ApiBearerAuth()
@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {
  constructor(private readonly users: UsersService) {}

  @ApiOperation({ summary: 'Get the current authenticated user' })
  @ApiSuccessResponseExample({ example: USER_EXAMPLE })
  @Get('me')
  me(@CurrentUser() user: AuthenticatedUser) {
    return this.users.getProfile(user.userId);
  }

  @ApiOperation({ summary: 'Create a staff/admin user (admin only)' })
  @ApiSuccessResponseExample({ status: 201, example: USER_EXAMPLE })
  @Post()
  @Roles(Role.ADMIN)
  create(@Body() dto: CreateUserDto) {
    return this.users.create(dto);
  }

  @ApiOperation({
    summary: 'List users, optionally filtered by role/branch (admin only)',
  })
  @ApiSuccessResponseExample({
    example: [USER_EXAMPLE],
    meta: { total: 1, page: 1, limit: 20, totalPages: 1 },
  })
  @Get()
  @Roles(Role.ADMIN)
  findAll(@Query() query: ListUsersQueryDto) {
    return this.users.findAll(query);
  }

  @ApiOperation({ summary: 'Get a user by id (admin only)' })
  @ApiSuccessResponseExample({ example: USER_EXAMPLE })
  @Get(':id')
  @Roles(Role.ADMIN)
  findOne(@Param('id') id: string) {
    return this.users.findOne(id);
  }

  @ApiOperation({ summary: 'Update a user (admin only)' })
  @ApiSuccessResponseExample({ example: USER_EXAMPLE })
  @Patch(':id')
  @Roles(Role.ADMIN)
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.users.update(id, dto);
  }

  @ApiOperation({ summary: 'Request a password-reset code by phone' })
  @ApiSuccessResponseExample({
    description: 'Always returns this, whether or not the phone is registered',
  })
  @Public()
  @Post('password/forgot')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('auth.OTP_SENT')
  requestResetPassword(@Body() dto: RequestResetPasswordDto) {
    return this.users.requestResetPassword(dto);
  }

  @ApiOperation({
    summary: 'Verify the password-reset code and get a reset token',
  })
  @ApiSuccessResponseExample({
    example: { resetToken: 'a3f8e9c2-1234-4a5b-9c6d-abcdef123456' },
  })
  @Public()
  @Post('password/forgot/verify')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('auth.RESET_OTP_VERIFIED')
  verifyForgotPasswordOtp(@Body() dto: VerifyForgotPasswordOtpDto) {
    return this.users.verifyForgotPasswordOtp(dto);
  }

  @ApiOperation({ summary: 'Reset password using a reset token' })
  @ApiSuccessResponseExample({})
  @Public()
  @Post('password/reset')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('auth.PASSWORD_RESET_SUCCESS')
  resetPassword(@Body() dto: ResetPasswordDto) {
    return this.users.resetPassword(dto);
  }

  @ApiOperation({ summary: "Delete the current user's own account" })
  @ApiSuccessResponseExample({})
  @Delete('me')
  deleteOwnAccount(
    @Body() dto: DeleteAccountDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.users.deleteOwnAccount(user.userId, dto);
  }

  @ApiOperation({ summary: 'Delete a user by id (admin only)' })
  @ApiSuccessResponseExample({})
  @Delete(':id')
  @Roles(Role.ADMIN)
  remove(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.users.remove(id, user.userId);
  }
}

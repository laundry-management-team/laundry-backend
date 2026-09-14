import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { PhoneNumberValidator } from '../common/helper/phone-validator.helper';
import * as argon2 from 'argon2';
import { ListUsersQueryDto } from './dto/list-users-query.dto';
import { Prisma, User } from '../../generated/prisma/client';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  buildPaginatedResult,
  getSkipTake,
} from '../common/helper/pagination.helper';
import { RedisService } from '../redis/redis.service';
import { OtpService } from '../auth/otp.service';
import { RequestResetPasswordDto } from '../auth/dto/request-reset-password.dto';
import { VerifyForgotPasswordOtpDto } from '../auth/dto/verify-forgot-password-otp.dto';
import { randomUUID } from 'crypto';
import { ResetPasswordDto } from '../auth/dto/reset-password.dto';
import { DeleteAccountDto } from './dto/delete-account.dto';

const RESET_TOKEN_PREFIX = 'reset_token:';
const RESET_TOKEN_TTL_SECONDS = 15 * 60;

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
    private readonly otp: OtpService,
  ) {}

  async create(dto: CreateUserDto) {
    const phone = PhoneNumberValidator.toInternational(dto.phone);
    const { countryCode } = PhoneNumberValidator.split(phone);

    const existing = await this.prisma.user.findUnique({ where: { phone } });
    if (existing)
      throw new ConflictException('Phone number already registered');

    const passwordHash = await argon2.hash(dto.password);
    const user = await this.prisma.user.create({
      data: {
        phone,
        countryCode,
        email: dto.email,
        name: dto.name,
        avatarUrl: dto.avatarUrl,
        passwordHash,
        role: dto.role,
        branchId: dto.branchId,
      },
    });

    return this.sanitize(user);
  }

  async findAll(query: ListUsersQueryDto) {
    const where: Prisma.UserWhereInput = {
      role: query.role,
      branchId: query.branchId,
    };

    const [items, total] = await Promise.all([
      this.prisma.user.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        ...getSkipTake(query),
      }),
      this.prisma.user.count({ where }),
    ]);

    return buildPaginatedResult(
      items.map((u) => this.sanitize(u)),
      total,
      query,
    );
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    return this.sanitize(user);
  }

  async getProfile(userId: string) {
    return this.findOne(userId);
  }

  async update(id: string, dto: UpdateUserDto) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('User not found');

    if (dto.email && dto.email !== user.email) {
      const emailTaken = await this.prisma.user.findUnique({
        where: { email: dto.email },
      });
      if (emailTaken) throw new ConflictException('Email already in use');
    }

    const updated = await this.prisma.user.update({
      where: { id },
      data: {
        name: dto.name,
        email: dto.email,
        avatarUrl: dto.avatarUrl,
        role: dto.role,
        branchId: dto.branchId,
        isActive: dto.isActive,
      },
    });

    return this.sanitize(updated);
  }

  async requestResetPassword(dto: RequestResetPasswordDto) {
    const phone = PhoneNumberValidator.toInternational(dto.phone);
    const user = await this.prisma.user.findUnique({ where: { phone } });
    if (user) {
      await this.otp.generateAndSend(phone);
    }
  }

  async verifyForgotPasswordOtp(dto: VerifyForgotPasswordOtpDto) {
    const phone = PhoneNumberValidator.toInternational(dto.phone);
    const user = await this.prisma.user.findUnique({ where: { phone } });
    if (!user) throw new UnauthorizedException('auth.INVALID_OTP');

    const valid = await this.otp.verify(phone, dto.otp);
    if (!valid) throw new UnauthorizedException('auth.INVALID_OR_EXPIRED_OTP');

    const resetToken = randomUUID();
    await this.redis.set(
      RESET_TOKEN_PREFIX + resetToken,
      user.id,
      'EX',
      RESET_TOKEN_TTL_SECONDS,
    );
    return { resetToken };
  }

  async resetPassword(dto: ResetPasswordDto) {
    const userId = await this.redis.get(RESET_TOKEN_PREFIX + dto.resetToken);
    if (!userId) throw new BadRequestException('auth.RESET_TOKEN_INVALID');

    const passwordHash = await argon2.hash(dto.newPassword);
    await this.prisma.user.update({
      where: { id: userId },
      data: { passwordHash },
    });
    await this.redis.del(RESET_TOKEN_PREFIX + dto.resetToken);
  }

  async remove(id: string, actingUserId: string) {
    if (id === actingUserId) {
      throw new ForbiddenException('You cannot delete your own account');
    }
    await this.deleteUserRecord(id);
  }

  async deleteOwnAccount(userId: string, dto: DeleteAccountDto) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');

    const valid = await argon2.verify(user.passwordHash, dto.password);
    if (!valid) throw new BadRequestException('Password is incorrect');

    await this.deleteUserRecord(userId);
  }

  private async deleteUserRecord(id: string) {
    try {
      await this.prisma.user.delete({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025')
          throw new NotFoundException('User not found');
        if (error.code === 'P2003') {
          throw new ConflictException(
            'Cannot delete a user with existing orders or records',
          );
        }
      }
      throw error;
    }
  }

  private sanitize(user: User) {
    const { passwordHash, ...rest } = user;
    return rest;
  }
}

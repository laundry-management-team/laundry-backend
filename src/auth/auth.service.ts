import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import * as argon2 from 'argon2';
import { randomUUID } from 'crypto';
import type { StringValue } from 'ms';
import { LoginDto } from './dto/login.dto';
import { PrismaService } from '../prisma/prisma.service';
import { RedisService } from '../redis/redis.service';
import { OtpService } from './otp.service';
import { RequestOtpDto } from './dto/request-otp.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { PhoneNumberValidator } from '../common/helper/phone-validator.helper';

const REFRESH_PREFIX = 'session:refresh:';
const REFRESH_TTL_SECONDS = 7 * 24 * 60 * 60; // matches JWT_REFRESH_TTL=7d

interface RefreshTokenPayload {
  sub: string;
  jti: string;
}

interface StoredRefreshSession {
  userId: string;
  tokenHash: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly redis: RedisService,
    private readonly otp: OtpService,
  ) {}

  async register(dto: RegisterDto) {
    const phone = PhoneNumberValidator.toInternational(dto.phone);
    const { countryCode } = PhoneNumberValidator.split(phone);

    const existing = await this.prisma.user.findUnique({
      where: { phone },
    });
    if (existing) throw new ForbiddenException('auth.PHONE_ALREADY_REGISTERED');

    const passwordHash = await argon2.hash(dto.password);
    const user = await this.prisma.user.create({
      data: { phone, countryCode, email: dto.email, passwordHash },
    });

    return this.issueTokens(user.id, user.role, user.branchId);
  }

  async requestOtp(dto: RequestOtpDto) {
    const phone = PhoneNumberValidator.toInternational(dto.phone);
    const user = await this.prisma.user.findUnique({
      where: { phone },
    });
    if (user) {
      await this.otp.generateAndSend(phone);
    }
  }

  async verifyOtp(dto: VerifyOtpDto) {
    const phone = PhoneNumberValidator.toInternational(dto.phone);
    const user = await this.prisma.user.findUnique({
      where: { phone },
    });
    if (!user) throw new UnauthorizedException('auth.INVALID_OTP');

    const valid = await this.otp.verify(phone, dto.otp);
    if (!valid) throw new UnauthorizedException('auth.INVALID_OR_EXPIRED_OTP');

    return this.issueTokens(user.id, user.role, user.branchId);
  }

  async login(dto: LoginDto) {
    const phone = PhoneNumberValidator.toInternational(dto.phone);
    const user = await this.prisma.user.findUnique({
      where: { phone },
    });
    if (!user || !(await argon2.verify(user.passwordHash, dto.password))) {
      throw new UnauthorizedException('auth.INVALID_CREDENTIALS');
    }
    return this.issueTokens(user.id, user.role, user.branchId);
  }

  async refresh(refreshToken: string) {
    const payload = await this.verifyRefreshToken(refreshToken);
    const stored = await this.redis.get(REFRESH_PREFIX + payload.jti);
    if (!stored) throw new UnauthorizedException('auth.REFRESH_TOKEN_EXPIRED');

    const { userId, tokenHash } = JSON.parse(stored) as StoredRefreshSession;
    const valid = await argon2.verify(tokenHash, refreshToken);
    if (!valid || userId !== payload.sub) {
      await this.redis.del(REFRESH_PREFIX + payload.jti);
      throw new UnauthorizedException('auth.REFRESH_TOKEN_INVALID');
    }

    await this.redis.del(REFRESH_PREFIX + payload.jti);

    const user = await this.prisma.user.findUniqueOrThrow({
      where: { id: userId },
    });
    return this.issueTokens(user.id, user.role, user.branchId);
  }

  async logout(refreshToken: string) {
    let payload: RefreshTokenPayload | null;
    try {
      payload = await this.verifyRefreshToken(refreshToken);
    } catch {
      payload = null;
    }
    if (payload) {
      await this.redis.del(REFRESH_PREFIX + payload.jti);
    }
  }

  private async issueTokens(
    userId: string,
    role: string,
    branchId: string | null,
  ) {
    const accessToken = await this.jwt.signAsync(
      { sub: userId, role, branchId },
      {
        secret: process.env.JWT_ACCESS_SECRET,
        expiresIn: process.env.JWT_ACCESS_TTL as StringValue,
      },
    );

    const jti = randomUUID();
    const refreshToken = await this.jwt.signAsync(
      { sub: userId, jti },
      {
        secret: process.env.JWT_REFRESH_SECRET,
        expiresIn: process.env.JWT_REFRESH_TTL as StringValue,
      },
    );

    const tokenHash = await argon2.hash(refreshToken);
    await this.redis.set(
      REFRESH_PREFIX + jti,
      JSON.stringify({ userId, tokenHash }),
      'EX',
      REFRESH_TTL_SECONDS,
    );

    return { accessToken, refreshToken };
  }

  async verifyRefreshToken(token: string): Promise<RefreshTokenPayload> {
    return this.jwt
      .verifyAsync<RefreshTokenPayload>(token, {
        secret: process.env.JWT_REFRESH_SECRET,
      })
      .catch(() => {
        throw new UnauthorizedException('auth.REFRESH_TOKEN_INVALID');
      });
  }
}

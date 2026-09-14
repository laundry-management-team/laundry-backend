import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { RedisService } from '../redis/redis.service';
import { PrismaService } from '../prisma/prisma.service';
import { PhoneNumberValidator } from '../common/helper/phone-validator.helper';
import { SmsStatus } from '../../generated/prisma/enums';
import { TelbizService } from '../sms/telbiz.service';

const OTP_TTL_SECONDS = 5 * 60;
const OTP_COOLDOWN_SECONDS = 60;
const OTP_RATE_LIMIT_WINDOW_SECONDS = 10 * 60;
const OTP_MAX_REQUESTS = 5;
const OTP_FAIL_MAX = 3;
const OTP_FAIL_LOCK_SECONDS = 15 * 60;

@Injectable()
export class OtpService {
  private readonly logger = new Logger(OtpService.name);

  constructor(
    private readonly redis: RedisService,
    private readonly prisma: PrismaService,
    private readonly telbiz: TelbizService,
  ) {}

  async generateAndSend(
    phone: string,
  ): Promise<{ expiresInSeconds: number; cooldownSeconds: number }> {
    await this.assertNotOnCooldown(phone);
    await this.assertUnderRateLimit(phone);

    const otp = this.generateCode();
    await this.redis.set(this.otpKey(phone), otp, 'EX', OTP_TTL_SECONDS);
    await this.redis.set(
      this.cooldownKey(phone),
      '1',
      'EX',
      OTP_COOLDOWN_SECONDS,
    );

    await this.dispatch(phone, otp);

    return {
      expiresInSeconds: OTP_TTL_SECONDS,
      cooldownSeconds: OTP_COOLDOWN_SECONDS,
    };
  }

  async verify(phone: string, otp: string): Promise<boolean> {
    await this.assertNotLocked(phone);

    const stored = await this.redis.get(this.otpKey(phone));
    if (!stored || stored !== otp) {
      await this.registerFailure(phone);
      return false;
    }

    await this.redis.del(this.otpKey(phone));
    await this.redis.del(this.failCountKey(phone));
    await this.redis.del(this.rateLimitKey(phone));
    return true;
  }

  private generateCode(): string {
    return String(Math.floor(100000 + Math.random() * 900000));
  }

  private otpKey(phone: string) {
    return `otp:${phone}`;
  }
  private cooldownKey(phone: string) {
    return `otp:cooldown:${phone}`;
  }
  private rateLimitKey(phone: string) {
    return `otp:rate:${phone}`;
  }
  private failCountKey(phone: string) {
    return `otp:fail:${phone}`;
  }
  private failLockKey(phone: string) {
    return `otp:locked:${phone}`;
  }

  private async assertNotOnCooldown(phone: string) {
    const ttl = await this.redis.ttl(this.cooldownKey(phone));
    if (ttl > 0) {
      throw new HttpException(
        'Please wait before requesting another code',
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }
  }
  private async assertUnderRateLimit(phone: string) {
    const key = this.rateLimitKey(phone);
    const count = await this.redis.incr(key);
    if (count === 1)
      await this.redis.expire(key, OTP_RATE_LIMIT_WINDOW_SECONDS);
    if (count > OTP_MAX_REQUESTS) {
      throw new HttpException(
        'Too many OTP requests, try again later',
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }
  }

  private async assertNotLocked(phone: string) {
    const locked = await this.redis.get(this.failLockKey(phone));
    if (locked) {
      throw new HttpException(
        'Too many failed attempts, try again later',
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }
  }

  private async registerFailure(phone: string) {
    const key = this.failCountKey(phone);
    const count = await this.redis.incr(key);
    if (count === 1) await this.redis.expire(key, OTP_FAIL_LOCK_SECONDS);
    if (count >= OTP_FAIL_MAX) {
      await this.redis.set(
        this.failLockKey(phone),
        '1',
        'EX',
        OTP_FAIL_LOCK_SECONDS,
      );
    }
  }

  private async dispatch(phone: string, otp: string): Promise<void> {
    const message = `Your verification code is ${otp}. It expires in 5 minutes.`;
    const { countryCode, localNumber } = PhoneNumberValidator.split(phone);

    if (!process.env.TELBIZ_CLIENT_ID) {
      this.logger.warn(
        `TELBIZ_CLIENT_ID not set — OTP for ${phone}: ${otp} [DEV ONLY]`,
      );
      return;
    }

    try {
      await this.telbiz.sendSms(localNumber, message, 'OTP');
      this.logger.log(`OTP SMS sent to ${phone}`);

      await this.prisma.smsLog.create({
        data: {
          countryCode,
          phone,
          message,
          status: SmsStatus.SENT,
          provider: 'telbiz',
        },
      });
    } catch (err) {
      this.logger.error(`Failed to send OTP SMS to ${phone}`, err as Error);

      await this.prisma.smsLog.create({
        data: {
          countryCode,
          phone,
          message,
          status: SmsStatus.FAILED,
          provider: 'telbiz',
          errorReason: (err as Error).message,
        },
      });
    }
  }
}

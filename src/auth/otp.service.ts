import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { RedisService } from '../redis/redis.service';

const OTP_TTL_SECONDS = 5 * 60;
const OTP_COOLDOWN_SECONDS = 60;
const OTP_RATE_LIMIT_WINDOW_SECONDS = 10 * 60;
const OTP_MAX_REQUESTS = 5;
const OTP_FAIL_MAX = 3;
const OTP_FAIL_LOCK_SECONDS = 15 * 60;

@Injectable()
export class OtpService {
  private readonly logger = new Logger(OtpService.name);

  constructor(private readonly redis: RedisService) {}

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
    const gatewayUrl = process.env.SMS_GATEWAY_URL;
    const message = `Your verification code is ${otp}. It expires in 5 minutes.`;

    if (!gatewayUrl) {
      this.logger.warn(
        `SMS_GATEWAY_URL not set — OTP for ${phone}: ${otp} [DEV ONLY]`,
      );
      return;
    }

    try {
      const response = await fetch(gatewayUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber: phone, message }),
      });
      if (!response.ok) {
        throw new Error(`SMS gateway responded with ${response.status}`);
      }
      this.logger.log(`OTP SMS sent to ${phone}`);
    } catch (err) {
      this.logger.error(`Failed to send OTP SMS to ${phone}`, err as Error);
    }
  }
}

import { Injectable } from '@nestjs/common';
import { ThrottlerStorage } from '@nestjs/throttler';
import { RedisService } from '../redis/redis.service';
import { ThrottlerStorageRecord } from '@nestjs/throttler/dist/throttler-storage-record.interface';

@Injectable()
export class RedisThrottlerStorage implements ThrottlerStorage {
  constructor(private readonly redis: RedisService) {}

  async increment(
    key: string,
    ttl: number,
    limit: number,
    blockDuration: number,
    throttlerName: string,
  ): Promise<ThrottlerStorageRecord> {
    const storageKey = `throttle:${throttlerName}:${key}`;
    const blockKey = `throttle:${throttlerName}:${key}:blocked`;

    const blockedPttl = await this.redis.pttl(blockKey);
    if (blockedPttl > 0) {
      return {
        totalHits: limit + 1,
        timeToExpire: 0,
        isBlocked: true,
        timeToBlockExpire: Math.ceil(blockedPttl / 1000),
      };
    }

    const totalHits = await this.redis.incr(storageKey);
    if (totalHits === 1) {
      await this.redis.pexpire(storageKey, ttl);
    }
    const pttl = await this.redis.pttl(storageKey);

    const isBlocked = totalHits > limit;
    if (isBlocked && blockDuration > 0) {
      await this.redis.set(blockKey, '1', 'PX', blockDuration);
    }

    return {
      totalHits,
      timeToExpire: Math.ceil(pttl / 1000),
      isBlocked,
      timeToBlockExpire:
        isBlocked && blockDuration > 0 ? Math.ceil(blockDuration / 1000) : 0,
    };
  }
}

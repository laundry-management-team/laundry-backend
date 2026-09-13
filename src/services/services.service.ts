import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RedisService } from '../redis/redis.service';
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import { Counter } from 'prom-client';

const CACHE_TTL_SECONDS = 600;

@Injectable()
export class ServicesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
    @InjectMetric('cache_hits_total')
    private readonly cacheHits: Counter<string>,
    @InjectMetric('cache_misses_total')
    private readonly cacheMisses: Counter<string>,
  ) {}

  async findByBranch(branchId: string) {
    const cacheKey = `branch:${branchId}:services`;
    const cached = await this.redis.get(cacheKey);
    if (cached) {
      this.cacheHits.inc({ branch_id: branchId });
      return JSON.parse(cached) as unknown[];
    }
    this.cacheMisses.inc({ branch_id: branchId });
    return this.refreshCache(branchId);
  }

  async findById(id: string) {
    return this.prisma.service.findUniqueOrThrow({ where: { id } });
  }

  async refreshCache(branchId: string) {
    const services = await this.prisma.service.findMany({
      where: { branchId },
      orderBy: { name: 'asc' },
    });
    await this.redis.set(
      `branch:${branchId}:services`,
      JSON.stringify(services),
      'EX',
      CACHE_TTL_SECONDS,
    );
    return services;
  }

  async invalidateBranchCache(branchId: string) {
    await this.redis.del(`branch:${branchId}:services`);
  }
}

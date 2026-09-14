import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RedisService } from '../redis/redis.service';
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import { Counter } from 'prom-client';
import { CreateServiceDto } from './dto/create-service.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { buildPaginatedResult } from '../common/helper/pagination.helper';

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

  async findByBranch(branchId: string, query: PaginationQueryDto) {
    const cacheKey = `branch:${branchId}:services`;
    const cached = await this.redis.get(cacheKey);
    let services: unknown[];
    if (cached) {
      this.cacheHits.inc({ branch_id: branchId });
      services = JSON.parse(cached) as unknown[];
    } else {
      this.cacheMisses.inc({ branch_id: branchId });
      services = await this.refreshCache(branchId);
    }

    const { page, limit } = query;
    const start = (page - 1) * limit;
    return buildPaginatedResult(
      services.slice(start, start + limit),
      services.length,
      query,
    );
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

  async create(branchId: string, dto: CreateServiceDto) {
    const service = await this.prisma.service.create({
      data: { ...dto, branchId },
    });
    await this.invalidateBranchCache(branchId);
    return service;
  }
}

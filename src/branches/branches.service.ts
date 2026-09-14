import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import {
  buildPaginatedResult,
  getSkipTake,
} from '../common/helper/pagination.helper';

@Injectable()
export class BranchesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(query: PaginationQueryDto) {
    const [items, total] = await Promise.all([
      this.prisma.branch.findMany({
        orderBy: { name: 'asc' },
        ...getSkipTake(query),
      }),
      this.prisma.branch.count(),
    ]);
    return buildPaginatedResult(items, total, query);
  }

  findById(id: string) {
    return this.prisma.branch.findUniqueOrThrow({ where: { id } });
  }

  create(dto: CreateBranchDto) {
    return this.prisma.branch.create({ data: dto });
  }
}

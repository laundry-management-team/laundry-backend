import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBranchDto } from './dto/create-branch.dto';

@Injectable()
export class BranchesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.branch.findMany({ orderBy: { name: 'asc' } });
  }

  findById(id: string) {
    return this.prisma.branch.findUniqueOrThrow({ where: { id } });
  }

  create(dto: CreateBranchDto) {
    return this.prisma.branch.create({ data: dto });
  }
}

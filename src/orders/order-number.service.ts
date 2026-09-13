import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

const COUNTER_ROW_ID = 1;

@Injectable()
export class OrderNumberService {
  constructor(private readonly prisma: PrismaService) {}

  async next(): Promise<string> {
    const counter = await this.prisma.orderNumberCounter.upsert({
      where: { id: COUNTER_ROW_ID },
      create: { id: COUNTER_ROW_ID, current: 1 },
      update: { current: { increment: 1 } },
    });
    return `LDY-${counter.current.toString().padStart(6, '0')}`;
  }
}

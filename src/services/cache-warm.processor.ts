import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ServicesService } from './services.service';

@Processor('cache-warm')
export class CacheWarmProcessor extends WorkerHost {
  private readonly logger = new Logger(CacheWarmProcessor.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly services: ServicesService,
  ) {
    super();
  }

  async process(): Promise<void> {
    const branches = await this.prisma.branch.findMany({
      select: { id: true },
    });
    for (const branch of branches) {
      await this.services.refreshCache(branch.id);
    }
    this.logger.debug(
      `Warmed services cache for ${branches.length} branch(es)`,
    );
  }
}

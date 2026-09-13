import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { ServicesService } from './services.service';
import { BullModule, InjectQueue } from '@nestjs/bullmq';
import { BullBoardModule } from '@bull-board/nestjs';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import { CacheWarmProcessor } from './cache-warm.processor';
import { Queue } from 'bullmq';
import { MetricsModule } from '../metrics/metrics.module';

@Module({
  imports: [
    BullModule.registerQueue({ name: 'cache-warm' }),
    BullBoardModule.forFeature({ name: 'cache-warm', adapter: BullMQAdapter }),
    MetricsModule,
  ],
  providers: [ServicesService, CacheWarmProcessor],
  exports: [ServicesService],
})
export class ServicesModule implements OnModuleInit {
  private readonly logger = new Logger(ServicesModule.name);

  constructor(@InjectQueue('cache-warm') private readonly queue: Queue) {}

  onModuleInit() {
    // Deliberately not awaited: BullMQ queues its commands and retries
    // indefinitely while Redis is unreachable (required for normal operation —
    // see maxRetriesPerRequest: null in redis-connection.ts). Awaiting this in
    // onModuleInit would block Nest's entire bootstrap — and therefore
    // app.listen() and /health — until Redis comes back.
    this.queue
      .upsertJobScheduler(
        'warm-branch-cache-repeat',
        { every: 5 * 60 * 1000 },
        { name: 'warm-branch-cache', data: {} },
      )
      .catch((err: Error) => {
        this.logger.error('Failed to schedule cache-warm repeat job', err);
      });
  }
}

import { Injectable, Module, OnModuleInit } from '@nestjs/common';
import { BullModule, InjectQueue } from '@nestjs/bullmq';
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import { Queue } from 'bullmq';
import { Gauge } from 'prom-client';
import { MetricsModule } from './metrics.module';

@Injectable()
class QueueDepthSampler implements OnModuleInit {
  constructor(
    @InjectMetric('bullmq_queue_depth') private readonly gauge: Gauge<string>,
    @InjectQueue('notifications') private readonly notifications: Queue,
    @InjectQueue('cache-warm') private readonly cacheWarm: Queue,
  ) {}

  onModuleInit() {
    setInterval(() => void this.sample(), 10_000);
    void this.sample();
  }

  private async sample() {
    for (const [name, queue] of [
      ['notifications', this.notifications],
      ['cache-warm', this.cacheWarm],
    ] as const) {
      const counts = await queue.getJobCounts(
        'waiting',
        'active',
        'delayed',
        'failed',
      );
      for (const [state, count] of Object.entries(counts)) {
        this.gauge.set({ queue: name, state }, count);
      }
    }
  }
}

@Module({
  imports: [
    MetricsModule,
    BullModule.registerQueue({ name: 'notifications' }, { name: 'cache-warm' }),
  ],
  providers: [QueueDepthSampler],
})
export class QueueDepthModule {}

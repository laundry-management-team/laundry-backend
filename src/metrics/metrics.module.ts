import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import {
  getToken,
  makeCounterProvider,
  makeGaugeProvider,
  makeHistogramProvider,
} from '@willsoto/nestjs-prometheus';
import { HttpMetricsInterceptor } from './http-metrics.interceptor';

@Module({
  providers: [
    makeHistogramProvider({
      name: 'http_request_duration_seconds',
      help: 'HTTP request duration in seconds',
      labelNames: ['method', 'route', 'status_code'],
      buckets: [0.05, 0.1, 0.25, 0.5, 1, 2.5, 5],
    }),
    makeGaugeProvider({
      name: 'bullmq_queue_depth',
      help: 'Number of jobs in a BullMQ queue by state',
      labelNames: ['queue', 'state'],
    }),
    makeCounterProvider({
      name: 'cache_hits_total',
      help: 'Branch-services cache hits',
      labelNames: ['branch_id'],
    }),
    makeCounterProvider({
      name: 'cache_misses_total',
      help: 'Branch-services cache misses',
      labelNames: ['branch_id'],
    }),
    makeGaugeProvider({
      name: 'realtime_socket_connections',
      help: 'Current number of connected realtime sockets',
    }),
    HttpMetricsInterceptor,
    { provide: APP_INTERCEPTOR, useClass: HttpMetricsInterceptor },
  ],
  exports: [
    getToken('bullmq_queue_depth'),
    getToken('cache_hits_total'),
    getToken('cache_misses_total'),
    getToken('realtime_socket_connections'),
  ],
})
export class MetricsModule {}

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { RealtimeGateway } from './realtime.gateway';
import { MetricsModule } from '../metrics/metrics.module';

@Module({
  imports: [JwtModule.register({}), MetricsModule],
  providers: [RealtimeGateway],
})
export class RealtimeModule {}

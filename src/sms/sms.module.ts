import { Module } from '@nestjs/common';
import { TelbizService } from './telbiz.service';

@Module({
  providers: [TelbizService],
  exports: [TelbizService],
})
export class SmsModule {}

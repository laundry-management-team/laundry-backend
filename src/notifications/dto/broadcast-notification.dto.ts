import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';

export class BroadcastNotificationDto {
  @ApiProperty({})
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({})
  @IsString()
  @IsNotEmpty()
  body: string;

  @ApiPropertyOptional({})
  @IsObject()
  @IsOptional()
  data?: Record<string, string>;
}

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';

export class SendNotificationDto {
  @ApiProperty({})
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({})
  @IsString()
  @IsNotEmpty()
  body: string;

  @ApiProperty({})
  @IsString()
  @IsOptional()
  userId?: string;

  @ApiPropertyOptional({})
  @IsString()
  @IsOptional()
  token?: string;

  @ApiPropertyOptional({})
  @IsObject()
  @IsOptional()
  data?: Record<string, string>;
}

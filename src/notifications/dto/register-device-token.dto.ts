import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { DevicePlatform } from '../../../generated/prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDeviceTokenDto {
  @ApiProperty({})
  @IsString()
  @IsNotEmpty()
  token: string;

  @ApiProperty({})
  @IsEnum(DevicePlatform)
  platform: DevicePlatform;
}

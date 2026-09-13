import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsNumber, IsPositive, IsString, MinLength } from 'class-validator';
import { ServiceUnit } from '../../../generated/prisma/client';

export class CreateServiceDto {
  @ApiProperty({})
  @IsString()
  @MinLength(1)
  name: string;

  @ApiProperty({ enum: ServiceUnit })
  @IsEnum(ServiceUnit)
  unit: ServiceUnit;

  @ApiProperty({})
  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({})
  @IsInt()
  @IsPositive()
  estMinutes: number;
}

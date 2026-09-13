import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';

class CreateOrderItemDto {
  @ApiProperty({})
  @IsUUID()
  serviceId: string;

  @ApiProperty({})
  @IsNumber()
  @IsPositive()
  quantityOrWeight: number;
}

export class CreateOrderDto {
  @ApiProperty({})
  @IsUUID()
  branchId: string;

  // Staff creating an order on behalf of an existing customer; ignored/overridden
  // for a customer creating their own order (see OrdersService.create).
  @ApiPropertyOptional({})
  @IsUUID()
  @IsOptional()
  customerId?: string;

  @ApiProperty({})
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemDto)
  @ArrayMinSize(1)
  items: CreateOrderItemDto[];

  @ApiPropertyOptional({})
  @IsString()
  @IsOptional()
  note?: string;
}

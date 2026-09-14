import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsUrl,
  IsUUID,
  MinLength,
} from 'class-validator';
import { IsLaoPhoneNumber } from '../../common/validators/is-lao-phone-number.validator';
import { Role } from '../../../generated/prisma/client';

export class CreateUserDto {
  @ApiProperty({ example: '02012345678' })
  @IsLaoPhoneNumber()
  phone: string;

  @ApiPropertyOptional({ example: 'staff@laundry.com' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ example: 'Somchai P.' })
  @IsOptional()
  @IsString()
  @MinLength(1)
  name?: string;

  @ApiPropertyOptional({ example: 'https://cdn.example.com/avatars/u1.png' })
  @IsOptional()
  @IsUrl()
  avatarUrl?: string;

  @ApiProperty({ example: 'StrongP@ssw0rd' })
  @IsString()
  @MinLength(8)
  password: string;

  @ApiProperty({ enum: Role, example: Role.STAFF })
  @IsEnum(Role)
  role: Role;

  @ApiPropertyOptional({ example: 'b3f1c2a0-1234-4a5b-9c6d-abcdef123456' })
  @IsOptional()
  @IsUUID()
  branchId?: string;
}

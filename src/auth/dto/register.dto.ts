import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';
import { IsLaoPhoneNumber } from '../../common/validators/is-lao-phone-number.validator';

export class RegisterDto {
  @ApiProperty({})
  @IsLaoPhoneNumber()
  phone: string;

  @ApiPropertyOptional({})
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({})
  @IsString()
  @MinLength(8)
  password: string;
}

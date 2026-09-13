import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { IsLaoPhoneNumber } from '../../common/validators/is-lao-phone-number.validator';

export class LoginDto {
  @ApiProperty({})
  @IsLaoPhoneNumber()
  phone: string;

  @ApiProperty({})
  @IsString()
  password: string;
}

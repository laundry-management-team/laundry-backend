import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';
import { IsLaoPhoneNumber } from '../../common/validators/is-lao-phone-number.validator';

export class VerifyOtpDto {
  @ApiProperty({})
  @IsLaoPhoneNumber()
  phone: string;

  @ApiProperty({})
  @IsString()
  @Length(6, 6)
  otp: string;
}

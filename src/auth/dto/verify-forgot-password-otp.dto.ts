import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';
import { IsLaoPhoneNumber } from '../../common/validators/is-lao-phone-number.validator';

export class VerifyForgotPasswordOtpDto {
  @ApiProperty({ example: '02012345678' })
  @IsLaoPhoneNumber()
  phone: string;

  @ApiProperty({ example: '123456' })
  @IsString()
  @Length(6, 6)
  otp: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsLaoPhoneNumber } from '../../common/validators/is-lao-phone-number.validator';

export class RequestOtpDto {
  @ApiProperty({})
  @IsLaoPhoneNumber()
  phone: string;
}

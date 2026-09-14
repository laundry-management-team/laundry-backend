import { ApiProperty } from '@nestjs/swagger';
import { IsLaoPhoneNumber } from '../../common/validators/is-lao-phone-number.validator';

export class RequestResetPasswordDto {
  @ApiProperty({ example: '02012345678' })
  @IsLaoPhoneNumber()
  phone: string;
}

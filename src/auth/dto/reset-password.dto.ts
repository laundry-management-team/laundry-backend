import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class ResetPasswordDto {
  @ApiProperty({ example: 'a3f8e9c2-1234-4a5b-9c6d-abcdef123456' })
  @IsString()
  resetToken: string;

  @ApiProperty({ example: 'NewStrongP@ssw0rd' })
  @IsString()
  @MinLength(8)
  newPassword: string;
}

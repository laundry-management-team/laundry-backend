import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class DeleteAccountDto {
  @ApiProperty({ example: 'CurrentP@ssw0rd' })
  @IsString()
  password: string;
}

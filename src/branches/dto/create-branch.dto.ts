import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class CreateBranchDto {
  @ApiProperty({})
  @IsString()
  @MinLength(1)
  name: string;
}

import { IsNotEmpty, IsString } from 'class-validator';
import { Type } from 'class-transformer'

export class AttachTagDto {
  @IsString()
  @IsNotEmpty()
  resource: string;

  @IsString()
  @IsNotEmpty()
  resource_id: string;

  @IsString()
  @IsNotEmpty()
  key: string;

  @IsString()
  @IsNotEmpty()
  @Type(() => String)
  value: string;
}

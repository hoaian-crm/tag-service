import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer'

export class AttachTagDto {
  @IsString()
  @IsNotEmpty()
  resource: string;

  @IsArray()
  resource_ids: Array<number>;

  @IsString()
  @IsNotEmpty()
  key: string;

  @IsString()
  @IsNotEmpty()
  @Type(() => String)
  value: string;
}

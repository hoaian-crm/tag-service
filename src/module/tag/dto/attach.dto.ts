import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
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
  @IsOptional()
  @Type(() => String)
  value: string;
}

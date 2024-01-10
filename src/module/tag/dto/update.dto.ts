import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateTagParam {
  @IsString()
  key: string
}

export class UpdateTagBody {

  @IsString()
  @IsOptional()
  key: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  color: string;
}

import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTagDto {
  @IsString()
  @IsNotEmpty()
  key: string;

  @IsString()
  color: string = '#3F3F3F';

  @IsString()
  description: string = 'New tag';
}

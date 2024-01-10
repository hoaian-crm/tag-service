import { IsString } from "class-validator";

export class DeleteTagParam {
  @IsString()
  key: string;
}

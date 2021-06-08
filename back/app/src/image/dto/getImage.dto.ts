import { IsOptional, IsString } from "class-validator";

export class GetImageFilterDto {
  @IsOptional()
  @IsString()
  image: string

  @IsOptional()
  @IsString()
  search: string
}

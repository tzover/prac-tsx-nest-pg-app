import { IsOptional, IsString } from 'class-validator'

export class GetTextsFilterDto {
  @IsOptional()
  @IsString()
  text: string

  @IsOptional()
  @IsString()
  search: string
}

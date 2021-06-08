import {IsNotEmpty, IsString, MinLength} from 'class-validator'

export class AddTextDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  text: string
}
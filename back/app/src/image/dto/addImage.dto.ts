import { IsNotEmpty } from 'class-validator'

export class AddImageDto {
  @IsNotEmpty()
  filename: string

  @IsNotEmpty()
  originalname: string

  @IsNotEmpty()
  mimetype: string
}

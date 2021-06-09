import { IsNotEmpty } from 'class-validator'

export class AddImageDto {
  @IsNotEmpty()
  fieldname: string

  @IsNotEmpty()
  filename: string

  @IsNotEmpty()
  originalname: string

  @IsNotEmpty()
  mimetype: string

  @IsNotEmpty()
  path: string
}

import { AddImageDto } from '../image/dto/addImage.dto'
import { EntityRepository, Repository } from 'typeorm'
import { Image } from '../entities/image.entity'

@EntityRepository(Image)
export class ImageRepository extends Repository<Image> {
  async getImages(): Promise<Image[]> {
    return await this.find()
  }

  async addImage(addImageDto: AddImageDto): Promise<Image> {
    const { filename, originalname, mimetype } = addImageDto
    const Image = this.create({
      filename,
      originalname,
      mimetype,
    })
    await this.save(Image)
    return Image
  }
}

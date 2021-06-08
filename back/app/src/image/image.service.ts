import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ImageRepository } from '../repo/image.repository'
import { AddImageDto } from './dto/addImage.dto'
import { Image } from '../entities/image.entity'
import * as fs from 'fs'

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(ImageRepository)
    private imageRepository: ImageRepository,
  ) {}

  getImages(): Promise<Image[]> {
    return this.imageRepository.getImages()
  }

  addImage(addImageDto: AddImageDto): Promise<Image> {
    if (addImageDto.originalname === '') {
      throw new BadRequestException('filename is null')
    } else if (typeof addImageDto.originalname !== 'string') {
      throw new BadRequestException('filename is not string')
    }
    return this.imageRepository.addImage(addImageDto)
  }

  async getImageById(name: string): Promise<Image> {
    const found = await this.imageRepository.findOne(name)
    if (!found) {
      throw new NotFoundException(`Image name "${name}" not found`)
    }
    console.log('found:', found)
    return found
  }

  async deleteImageDb(id: string): Promise<void> {
    const result = await this.imageRepository.delete(id)
    if (result.affected === 0) {
      throw new NotFoundException(`Image : "${id}" not found`)
    }
  }
  async deleteImageFile(name: string): Promise<void> {
    // const deleteName = JSON.stringify(name)
    // this.getImageById(name)
    const newName = name.replace(/\s+/g, '')
    try {
      fs.unlinkSync(`./public/pic/${newName}`)
    } catch (err) {
      console.log(err)
    }
  }
}

import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Text } from '../entities/text.entity'
import { TextRepository } from '../repo/text.repository'
import { AddTextDto } from './dto/addText.dto'

@Injectable()
export class TextService {
  constructor(
    @InjectRepository(TextRepository)
    private textRepository: TextRepository,
  ) {}

  getTexts(): Promise<Text[]> {
    return this.textRepository.getTexts()
  }

  addText(addTextDto: AddTextDto): Promise<Text> {
    if (addTextDto.text === '') {
      throw new BadRequestException('text is null')
    } else if (typeof addTextDto.text !== 'string') {
      throw new BadRequestException('text is not string')
    }
    return this.textRepository.addText(addTextDto)
  }

  async deleteText(id: string): Promise<void> {
    const result = await this.textRepository.delete(id)
    if (result.affected === 0) {
      throw new NotFoundException(`Text with ID "${id}" not found`)
    }
  }
}

import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { Text } from '../entities/text.entity'
import { AddTextDto } from './dto/addText.dto'
import { TextService } from './text.service'

@Controller('v1/text')
export class TextController {
  constructor(private textService: TextService) {}

  @Get()
  async getTexts(): Promise<Text[]> {
    return await this.textService.getTexts()
  }

  @Post()
  addText(@Body() addTextDto: AddTextDto): Promise<Text> {
    console.log(addTextDto)
    return this.textService.addText(addTextDto)
  }

  @Delete('/:id')
  deleteText(@Param('id') id: string): Promise<void> {
    return this.textService.deleteText(id)
  }
}

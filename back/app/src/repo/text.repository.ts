import { Text } from '../entities/text.entity'
import { AddTextDto } from '../text/dto/addText.dto'
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(Text)
export class TextRepository extends Repository<Text> {
  async getTexts(): Promise<Text[]> {
    return await this.find()
  }

  async addText(addTextDto: AddTextDto): Promise<Text> {
    const { text } = addTextDto

    const Text = this.create({
      text,
    })
    await this.save(Text)
    return Text
  }
}

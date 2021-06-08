import { Module } from '@nestjs/common'
import { ImageService } from './image.service'
import { ImageController } from './image.controller'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ImageRepository } from '../repo/image.repository'

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([ImageRepository])],
  providers: [ImageService],
  controllers: [ImageController],
})
export class ImageModule {}

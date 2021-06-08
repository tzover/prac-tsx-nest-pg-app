import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TextRepository } from '../repo/text.repository'
import { TextController } from './text.controller'
import { ServeStaticModule } from '@nestjs/serve-static'
import { TextService } from './text.service'
import { join } from 'path'

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([TextRepository])],
  controllers: [TextController],
  providers: [TextService],
})
export class TextModule {}

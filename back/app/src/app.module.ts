import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { configValidationSchema } from './config.schema'
import { TextModule } from './text/text.module'
import { ImageModule } from './image/image.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`./config/.env.stage.${process.env.STAGE}`],
      validationSchema: configValidationSchema,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: join(__dirname, 'pic'),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mongodb',
        host: 'mongo',
        port: 27017,
        database: 'test',
        entities: ['./src/entities/*.ts'],
        useNewUrlParser: true,
        autoLoadEntities: true,
        synchronize: true,
        useUnifiedTopology: true,
      }),
    }),
    TextModule,
    ImageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

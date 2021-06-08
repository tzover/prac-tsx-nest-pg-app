import { Controller, Get, Res } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getApp(): string {
    return this.appService.getApp()
  }

  @Get('/v1/image/pic')
  getImages(@Res() res) {
    res.sendFile('')
  }
}

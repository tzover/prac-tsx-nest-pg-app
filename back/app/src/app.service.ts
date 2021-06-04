import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getApp(): string {
    return `Welcome to Application. Running on ${process.env.PORT}, Stage: ${process.env.STAGE} `
  }
}

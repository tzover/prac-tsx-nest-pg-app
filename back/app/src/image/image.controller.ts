import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
// import { Observable, of } from 'rxjs'
import { diskStorage } from 'multer'
import { v4 as uuidV4 } from 'uuid'
import path = require('path')
import { AddImageDto } from './dto/addImage.dto'
import { Image } from '../entities/image.entity'
import { ImageService } from './image.service'

@Controller('v1/image')
export class ImageController {
  constructor(private imageService: ImageService) {}

  @Get()
  async getImages(): Promise<Image[]> {
    return await this.imageService.getImages()
  }
  @Get(':imgname')
  seeUploadedFile(@Param('imgname') image, @Res() res): Promise<Image> {
    return res.sendFile(image, { root: './public/pic/' })
  }

  @Delete('/:id')
  deleteDbImage(@Param('id') id: string): Promise<void> {
    return this.imageService.deleteImageDb(id)
  }
  @Delete('/file/:name')
  deleteImageFile(@Param('name') name: string): Promise<void> {
    console.log(name)
    return this.imageService.deleteImageDb(name)
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('files', {
      storage: diskStorage({
        destination: './public/pic',
        filename: (req, file, callback) => {
          console.log(file)

          const filename: string = path.parse(file.originalname).name
          // .replace(/\s/g, '') + uuidV4() // 名前が被っていても uuid が割り当てられる
          const extention: string = path.parse(file.originalname).ext

          callback(null, `${filename}${extention}`)
        },
      }),
    }),
  )
  uploadFile(
    @UploadedFile() addImageDto: AddImageDto,
    @Req() req,
  ): Promise<Image> {
    console.log(req.file)
    if (!req.file) {
      return
    }
    return this.imageService.addImage(addImageDto)
  }
  // こっちでもOK
  // uploadFile(@UploadedFile() file, @Request() req): Observable<Image> {
  //   console.log(req.file)
  //   if (!req.file) {
  //     return
  //   }
  //   return of(file)
  // }
}

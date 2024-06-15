import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { extname } from 'path'

@Controller('upload')
export class UploadController {
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads', // 文件保存路径
        filename: (req, file, cb) => {
          // 自定义文件名
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9)
          const ext = extname(file.originalname)
          const filename = `${uniqueSuffix}${ext}`
          cb(null, filename)
        }
      })
    })
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    // 文件信息会自动注入到 file 参数中
    console.log(file)
    return {
      message: 'File uploaded successfully!',
      filename: file.filename
    }
  }
}

import { extname } from 'node:path'
import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Result } from '@/common/result'
import { UploadService } from './upload.service'
import { FileUploadDto, FilesResDto, UploadResDto } from './dto/files-res.dto'

@Controller('upload')
@ApiTags('upload')
export class UploadController {
  constructor(private readonly fileService: UploadService) {}

  @ApiOperation({
    summary: 'Upload file',
    description: 'Upload file'
  })
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: UploadResDto
  })
  @ApiBody({
    description: 'File to upload',
    type: FileUploadDto
  })
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (_, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9)
          const originalNameBuffer = Buffer.from(file.originalname, 'latin1')
          file.originalname = originalNameBuffer.toString('utf8')

          const ext = extname(file.originalname)
          const filename = `${uniqueSuffix}${ext}`
          cb(null, filename)
        }
      })
    })
  )
  async uploadFile(
    @UploadedFile()
    file: Express.Multer.File
  ) {
    const savedFile = await this.fileService.saveFile(
      file.filename,
      file.originalname
    )
    return Result.success(savedFile.filename)
  }

  // get all files
  @Get()
  @ApiOperation({
    summary: 'Get all files',
    description: 'Get all files'
  })
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: FilesResDto
  })
  async getFiles() {
    return Result.success(await this.fileService.getAllFiles())
  }
}

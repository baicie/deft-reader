import * as path from 'node:path'
import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Result } from '@/common/result'
import { UploadService } from './upload.service'
import { FileUploadDto, FilesResDto, UploadResDto } from './dto/files-res.dto'
import { createHash } from 'node:crypto'
import { FileEntity } from './entities/upload.entity'
import { uploadPath } from '@/path'
import { createReadStream } from 'node:fs'

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
        destination: uploadPath,
        filename: (_, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9)
          const originalNameBuffer = Buffer.from(file.originalname, 'latin1')
          file.originalname = originalNameBuffer.toString('utf8')
          const ext = path.extname(file.originalname)
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
    const md5 = await this.calculateFileHash(file.filename)
    const repeat = await this.fileService.getFileByMd5(md5)
    let savedFile: FileEntity
    if (repeat) {
      savedFile = await this.fileService.updateFile(
        repeat,
        file.filename,
        path.basename(file.originalname),
        file.size,
        md5
      )
    } else {
      savedFile = await this.fileService.saveFile(
        file.filename,
        path.basename(file.originalname),
        file.size,
        md5
      )
    }
    return Result.success(savedFile.filename)
  }

  async calculateFileHash(filename: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const hash = createHash('sha256')
      const stream = createReadStream(path.resolve(uploadPath, filename))
      stream.on('data', (data) => hash.update(data))
      stream.on('end', () => resolve(hash.digest('hex')))
      stream.on('error', reject)
    })
  }
  @Get('/md5')
  async validateFile(@Query('md5') md5: string) {
    const file = await this.fileService.getFileByMd5(md5)

    return Result.success(!file)
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

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete file',
    description: 'Delete file'
  })
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: UploadResDto
  })
  async deleteFile(@Param('id') id: number) {
    const file = await this.fileService.getFileById(id)
    if (file) {
      await this.fileService.deleteFile(file.id)
      return Result.success(file.filename)
    }
    return Result.error('File not found')
  }
}

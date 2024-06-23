import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { beforeEach, describe, expect } from 'vitest'
import { UploadService } from '../upload.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FileEntity } from '../entities/upload.entity'
import { UploadController } from '../upload.controller'

describe('UploadService', () => {
  let service: UploadService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'sqljs',
          entities: [FileEntity],
          synchronize: true
        }),
        TypeOrmModule.forFeature([FileEntity])
      ],
      controllers: [UploadController],
      providers: [UploadService]
    }).compile()

    service = module.get<UploadService>(UploadService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should upload a file', async () => {
    const mockFile: Express.Multer.File = {
      fieldname: 'file',
      originalname: 'test.txt',
      encoding: '7bit',
      mimetype: 'text/plain',
      destination: './uploads',
      filename: '1234567890-test.txt',
      size: 0,
      stream: undefined,
      path: '',
      buffer: Buffer.from('test content')
    }

    const result = await service.saveFile(mockFile.fieldname)
    expect(result).toBeInstanceOf(FileEntity)
  })

  it('should get all files', async () => {
    const result = await service.getAllFiles()
    expect(result).toBeInstanceOf(Array)
  })
})

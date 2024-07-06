import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { beforeEach, describe, expect } from 'vitest'
import { UploadController } from '../upload.controller'
import { UploadService } from '../upload.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FileEntity } from '../entities/upload.entity'

describe('UploadController', () => {
  let controller: UploadController

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

    controller = module.get<UploadController>(UploadController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  it('should upload a file', async () => {
    const mockFile: Express.Multer.File = {
      fieldname: 'file',
      originalname: 'test.txt',
      encoding: '7bit',
      mimetype: 'text/plain',
      destination: './uploads',
      filename: '1234567890-test.txt',
      path: 'uploads/1234567890-test.txt',
      size: 1024,
      buffer: Buffer.from('test content'),
      stream: undefined // Optional, depending on your setup
    }
    const result = await controller.uploadFile(mockFile)

    expect(result.code).toBe(0)
    expect(result.message).toBe('Success')
    expect(result.data).toBe('1234567890-test.txt')
  })

  it('should get all files', async () => {
    const result = await controller.getFiles()

    expect(result.code).toBe(0)
    expect(result.message).toBe('Success')
    expect(result.data).toBeInstanceOf(Array)
  })

  it('should validate file by md5', async () => {
    const md5 = '1234567890'

    const result = await controller.validateFile(md5)

    expect(result.code).toBe(0)
    expect(result.message).toBe('Success')
    expect(result.data).toBe(true)
  })
})

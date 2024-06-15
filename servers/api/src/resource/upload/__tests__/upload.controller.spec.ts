import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { beforeEach, describe, expect } from 'vitest'
import { UploadController } from '../upload.controller'
import { UploadService } from '../upload.service'

describe('UploadController', () => {
  let controller: UploadController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadController],
      providers: [UploadService]
    }).compile()

    controller = module.get<UploadController>(UploadController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})

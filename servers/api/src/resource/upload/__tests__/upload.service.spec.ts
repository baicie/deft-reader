import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing'
import { beforeEach, describe, expect } from 'vitest'
import { UploadService } from '../upload.service'

describe('UploadService', () => {
  let service: UploadService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UploadService]
    }).compile()

    service = module.get<UploadService>(UploadService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})

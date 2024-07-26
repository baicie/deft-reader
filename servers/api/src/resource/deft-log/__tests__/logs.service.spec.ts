import { Test, TestingModule } from '@nestjs/testing'
import { LogsService } from '../logs.service'
import { expect } from 'vitest'

describe('LogsService', () => {
  let service: LogsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogsService]
    }).compile()

    service = module.get<LogsService>(LogsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})

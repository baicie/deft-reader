import { Test, TestingModule } from '@nestjs/testing'
import { LogsController } from '../logs.controller'
import { LogsService } from '../logs.service'
import { expect } from 'vitest'

describe('LogsController', () => {
  let controller: LogsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogsController],
      providers: [LogsService]
    }).compile()

    controller = module.get<LogsController>(LogsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})

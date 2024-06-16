import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { beforeEach, describe, expect } from 'vitest'
import { ConfigModule } from '@nestjs/config'
import { ConfigController } from '../config.controller'
import { ConfigService } from '../config.service'

describe('ConfigController', () => {
  let controller: ConfigController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      controllers: [ConfigController],
      providers: [ConfigService]
    }).compile()

    controller = module.get<ConfigController>(ConfigController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  it('should return configs', () => {
    process.env.ENABLE_LOG = 'true'
    expect(controller.getConfig().ENABLE_LOG).toBeTypeOf('boolean')
    expect(controller.getConfig().ENABLE_LOG).toBe(true)
  })
})

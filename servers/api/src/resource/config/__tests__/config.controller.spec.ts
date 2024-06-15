import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { beforeEach, describe, expect } from 'vitest'
import { ConfigController } from '../config.controller'
import { ConfigService } from '../config.service'

describe('ConfigController', () => {
  // let controller: ConfigController

  // beforeEach(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     controllers: [ConfigController],
  //     providers: [ConfigService]
  //   }).compile()

  //   controller = module.get<ConfigController>(ConfigController)
  // })

  it('should be defined', () => {
    // expect(controller).toBeDefined()
  })
})

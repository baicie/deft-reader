import { Test, TestingModule } from '@nestjs/testing'
import { beforeEach, describe, expect } from 'vitest'
import { ConfigModule } from '@nestjs/config'
import { ConfigService } from '../config.service'

describe('ConfigService', () => {
  let service: ConfigService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      providers: [ConfigService]
    }).compile()

    service = module.get<ConfigService>(ConfigService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})

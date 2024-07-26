import { ExecutionContext } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { ConfigService } from '@nestjs/config'
import { vi, describe, it, expect, beforeEach } from 'vitest'
import { JwtAuthGuard } from '../jwt-auth.guard'

// 模拟 AuthGuard 工厂函数
vi.mock('@nestjs/passport', () => {
  return {
    AuthGuard: (_strategy: string) => {
      return vi.fn().mockImplementation(() => ({
        canActivate: vi.fn()
      }))
    }
  }
})

describe('JwtAuthGuard', () => {
  let jwtAuthGuard: JwtAuthGuard
  let configService: ConfigService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        JwtAuthGuard,
        {
          provide: ConfigService,
          useValue: {
            get: vi.fn()
          }
        }
      ]
    }).compile()

    jwtAuthGuard = module.get<JwtAuthGuard>(JwtAuthGuard)
    configService = module.get<ConfigService>(ConfigService)
  })

  it('should return true if auth is disabled', async () => {
    vi.spyOn(configService, 'get').mockReturnValue('false')

    const context = {} as ExecutionContext

    const result = await jwtAuthGuard.canActivate(context)

    expect(result).toBe(true)
    expect(configService.get).toHaveBeenCalledWith('ENABLE_AUTH')
  })
})

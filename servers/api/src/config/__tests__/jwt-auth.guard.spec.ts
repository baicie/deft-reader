import { ExecutionContext } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { ConfigService } from '@nestjs/config'
import { AuthGuard } from '@nestjs/passport'
import { vi, describe, it, expect, beforeEach } from 'vitest'
import { JwtAuthGuard } from '../jwt-auth.guard'

// Mock the AuthGuard factory function
vi.mock('@nestjs/passport', () => {
  return {
    AuthGuard: (_strategy: string) => {
      class MockAuthGuard {
        canActivate = vi.fn()
      }
      return MockAuthGuard
    }
  }
})

describe('JwtAuthGuard', () => {
  let jwtAuthGuard: JwtAuthGuard
  let configService: ConfigService
  let mockAuthGuardInstance: any

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
    mockAuthGuardInstance = new (AuthGuard('jwt'))()
  })

  it('should return true if auth is disabled', async () => {
    vi.spyOn(configService, 'get').mockReturnValue('false')

    const context = {} as ExecutionContext

    const result = await jwtAuthGuard.canActivate(context)

    expect(result).toBe(true)
    expect(configService.get).toHaveBeenCalledWith('ENABLE_AUTH')
  })

  it('should call AuthGuard canActivate if auth is enabled', async () => {
    vi.spyOn(configService, 'get').mockReturnValue('true')

    const canActivateSpy = vi.fn().mockResolvedValue(true)
    mockAuthGuardInstance.canActivate.mockImplementation(canActivateSpy)

    const context = {} as ExecutionContext

    const result = await jwtAuthGuard.canActivate(context)

    expect(result).toBe(true)
    expect(configService.get).toHaveBeenCalledWith('ENABLE_AUTH')
    expect(canActivateSpy).toHaveBeenCalledWith(context)
  })

  it('should return false if AuthGuard returns false', async () => {
    vi.spyOn(configService, 'get').mockReturnValue('true')

    const canActivateSpy = vi.fn().mockResolvedValue(false)
    mockAuthGuardInstance.canActivate.mockImplementation(canActivateSpy)

    const context = {} as ExecutionContext

    const result = await jwtAuthGuard.canActivate(context)
    console.log('result', result)

    expect(result).toBe(false)
    expect(configService.get).toHaveBeenCalledWith('ENABLE_AUTH')
    expect(canActivateSpy).toHaveBeenCalledWith(context)
  })
})

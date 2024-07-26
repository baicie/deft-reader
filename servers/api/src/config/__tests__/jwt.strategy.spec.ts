import { Test, TestingModule } from '@nestjs/testing'
import { JwtStrategy } from '../jwt.strategy'
import { Strategy } from 'passport-jwt'
import { vi, describe, it, expect, beforeEach } from 'vitest'

// Mock passport-jwt Strategy and ExtractJwt
vi.mock('passport-jwt', () => ({
  Strategy: vi.fn(),
  ExtractJwt: {
    fromAuthHeaderAsBearerToken: vi
      .fn()
      .mockReturnValue('mockedExtractJwtFunction')
  }
}))

describe('JwtStrategy', () => {
  let jwtStrategy: JwtStrategy

  beforeEach(async () => {
    // Reset the mock before each test
    ;(Strategy as any).mockClear()

    const module: TestingModule = await Test.createTestingModule({
      providers: [JwtStrategy]
    }).compile()

    jwtStrategy = module.get<JwtStrategy>(JwtStrategy)
  })

  it('should be defined', () => {
    expect(jwtStrategy).toBeDefined()
  })

  it('should validate the payload correctly', () => {
    const payload = { sub: 'user-id', username: 'test-user' }
    const result = jwtStrategy.validate(payload)
    expect(result).toEqual({ userId: 'user-id', username: 'test-user' })
  })
})

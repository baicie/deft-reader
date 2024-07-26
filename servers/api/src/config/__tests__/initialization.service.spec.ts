import { Test, TestingModule } from '@nestjs/testing'
import { UserRepository } from '@/resource/users/user.repository'
import { vi, describe, it, expect, beforeEach } from 'vitest'
import { InitializationService } from '../initialization.service'
import { CustomLoggerService } from '../logger.service'

describe('InitializationService', () => {
  let initializationService: InitializationService
  let customLoggerService: CustomLoggerService
  let userRepository: UserRepository

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InitializationService,
        {
          provide: CustomLoggerService,
          useValue: {
            log: vi.fn(),
            warn: vi.fn()
          }
        },
        {
          provide: UserRepository,
          useValue: {
            findByUsername: vi.fn(),
            createUser: vi.fn()
          }
        }
      ]
    }).compile()

    initializationService = module.get<InitializationService>(
      InitializationService
    )
    customLoggerService = module.get<CustomLoggerService>(CustomLoggerService)
    userRepository = module.get<UserRepository>(UserRepository)
  })

  it('should create default user if not exists', async () => {
    vi.spyOn(userRepository, 'findByUsername').mockResolvedValue(null)

    await initializationService.onModuleInit()

    expect(userRepository.findByUsername).toHaveBeenCalledWith('admin')
    expect(userRepository.createUser).toHaveBeenCalledWith('admin', 'admin')
    expect(customLoggerService.log).toHaveBeenCalledWith(
      'Default user created successfully.'
    )
  })

  it('should not create default user if already exists', async () => {
    vi.spyOn(userRepository, 'findByUsername').mockResolvedValue({
      username: 'admin',
      id: 0,
      email: '',
      password: ''
    })

    await initializationService.onModuleInit()

    expect(userRepository.findByUsername).toHaveBeenCalledWith('admin')
    expect(userRepository.createUser).not.toHaveBeenCalled()
    expect(customLoggerService.warn).toHaveBeenCalledWith(
      'Default user already exists.'
    )
  })
})

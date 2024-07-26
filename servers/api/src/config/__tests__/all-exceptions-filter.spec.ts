import { ArgumentsHost, HttpException } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { CustomLoggerService } from '../logger.service'
import { Response, Request } from 'express'
import { vi, describe, it, expect, beforeEach } from 'vitest'
import { AllExceptionsFilter } from '../all-exceptions.filter'

describe('AllExceptionsFilter', () => {
  let allExceptionsFilter: AllExceptionsFilter
  let customLoggerService: CustomLoggerService
  let mockResponse: Partial<Response>
  let mockRequest: Partial<Request>
  let mockArgumentsHost: Partial<ArgumentsHost>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AllExceptionsFilter,
        {
          provide: CustomLoggerService,
          useValue: {
            error: vi.fn()
          }
        }
      ]
    }).compile()

    allExceptionsFilter = module.get<AllExceptionsFilter>(AllExceptionsFilter)
    customLoggerService = module.get<CustomLoggerService>(CustomLoggerService)

    mockResponse = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn()
    }

    mockRequest = {
      method: 'GET',
      url: '/test'
    }

    mockArgumentsHost = {
      switchToHttp: vi.fn().mockReturnValue({
        getResponse: () => mockResponse,
        getRequest: () => mockRequest
      })
    }
  })

  it('should handle HttpException', () => {
    const exception = new HttpException('Forbidden', 403)

    allExceptionsFilter.catch(exception, mockArgumentsHost as ArgumentsHost)

    expect(customLoggerService.error).toHaveBeenCalledWith(
      'GET /test',
      exception.stack
    )

    expect(mockResponse.status).toHaveBeenCalledWith(403)
    expect(mockResponse.json).toHaveBeenCalledWith({
      code: 403,
      timestamp: expect.any(String),
      path: '/test',
      message: exception.stack
    })
  })

  it('should handle unknown exception', () => {
    const exception = new Error('Unknown error')

    allExceptionsFilter.catch(exception, mockArgumentsHost as ArgumentsHost)

    expect(customLoggerService.error).toHaveBeenCalledWith(
      'GET /test',
      exception.stack
    )

    expect(mockResponse.status).toHaveBeenCalledWith(500)
    expect(mockResponse.json).toHaveBeenCalledWith({
      code: 500,
      timestamp: expect.any(String),
      path: '/test',
      message: exception.stack
    })
  })
})

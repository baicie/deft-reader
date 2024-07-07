import { describe, it, expect } from 'vitest'
import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator'
import { Result, ResultDto } from '../result' // 调整路径以匹配您的文件结构

describe('Result', () => {
  it('should create a success result', () => {
    const data = { id: 1, name: 'Test' }
    const result = Result.success(data)

    expect(result.code).toBe(0)
    expect(result.message).toBe('Success')
    expect(result.data).toEqual(data)
  })

  it('should create an error result', () => {
    const result = Result.error('An error occurred', 2)

    expect(result.code).toBe(2)
    expect(result.message).toBe('An error occurred')
    expect(result.data).toBeNull()
  })
})

describe('ResultDto', () => {
  it('should validate the ResultDto properties', async () => {
    const data = { id: 1, name: 'Test' }
    const dto = plainToClass(ResultDto, {
      code: 0,
      message: 'Success',
      data: data
    })

    const errors = await validate(dto)
    expect(errors.length).toBe(0)

    expect(dto.code).toBe(0)
    expect(dto.message).toBe('Success')
    expect(dto.data).toEqual(data)
  })

  it('should fail validation with incorrect data', async () => {
    const dto = plainToClass(ResultDto, {
      code: 'not a number',
      message: 12345,
      data: 'invalid data'
    })

    const errors = await validate(dto)
    expect(errors.length).toBeGreaterThan(0)
  })
})

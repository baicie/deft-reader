import { ApiProperty } from '@nestjs/swagger'

export class Result<T> {
  public code = 0
  public message = ''
  public data: T

  constructor(code: number, message: string, data: T) {
    this.code = code
    this.message = message
    this.data = data
  }

  public static success<T>(data: T): Result<T> {
    return new Result(0, 'Success', data)
  }

  public static error<T>(message: string, code = 1): Result<T> {
    return new Result(code, message, null)
  }
}

export class ResultDto<T> {
  @ApiProperty({ description: 'Status code' })
  code: number

  @ApiProperty({ description: 'Response message' })
  message: string

  @ApiProperty({ description: 'Response data', required: false })
  data: T
}

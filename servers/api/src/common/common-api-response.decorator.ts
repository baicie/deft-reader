import { HttpStatus, applyDecorators } from '@nestjs/common'
import { ApiResponse } from '@nestjs/swagger'

export function ApiResponseSuccess<T>(
  description: string,
  type: any
): MethodDecorator & ClassDecorator {
  return applyDecorators(
    ApiResponse({
      status: HttpStatus.OK,
      description,
      type
    })
  )
}

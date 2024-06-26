import { ApiProperty } from '@nestjs/swagger'
export interface DeftResponseType<Data = unknown> {
  statusCode: number
  message: string
  data: Data
}

export class ApiResponseDto {
  @ApiProperty({
    example: 200,
    description: 'HTTP status code'
  })
  statusCode: number

  @ApiProperty({
    example: 'User retrieved successfully',
    description: 'Response message'
  })
  message: string
}

export enum DeftResponseStatus {
  SUCCESS = 0
}

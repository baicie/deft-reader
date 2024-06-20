import { ApiProperty } from '@nestjs/swagger'
import { ApiResponseDto } from '@/common/response.type'

export interface ConfigData {
  DATABASE_PATH: string
  SERVER_PORT: number
  ENABLE_WEB: boolean
  ENABLE_SWAGGER: boolean
  ENABLE_LOG: boolean
  LOG_PATH: string
  ENABLE_AUTH: boolean
}

export class ConfigDto extends ApiResponseDto {
  @ApiProperty({
    example: 'Hello, World!',
    description: 'Hello message'
  })
  data: ConfigData
}

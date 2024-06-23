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
    example: {
      DATABASE_PATH: 'database.test.sqljs',
      ENABLE_AUTH: true,
      ENABLE_LOG: true,
      ENABLE_SWAGGER: true,
      ENABLE_WEB: true,
      LOG_PATH: 'logs',
      SERVER_PORT: '3000'
    },
    description: 'Hello message'
  })
  data: ConfigData
}

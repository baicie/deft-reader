import { ApiProperty } from '@nestjs/swagger'
import { ApiResponseDto } from '../../../common/response.type'

export class HelloWorldDto extends ApiResponseDto {
  @ApiProperty({
    example: 'Hello, World!',
    description: 'Hello message'
  })
  data: string
}

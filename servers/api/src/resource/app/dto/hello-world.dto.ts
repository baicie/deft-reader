import { ApiProperty } from '@nestjs/swagger'
import { ResultDto } from '@/common/result'

export class HelloResultDto extends ResultDto<string> {
  @ApiProperty({ description: 'Response data', example: 'Hello, world!' })
  data: string
}

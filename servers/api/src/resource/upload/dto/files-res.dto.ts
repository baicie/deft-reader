import { ResultDto } from '@/common/result'
import { ApiProperty } from '@nestjs/swagger'

export class FileResDto {
  @ApiProperty({ description: 'File id', example: 1 })
  id: number

  @ApiProperty({ description: 'File name', example: 'file.txt' })
  filename: string

  @ApiProperty({
    description: 'Uploaded time',
    example: '2021-01-01T00:00:00.000Z'
  })
  uploadedAt: Date
}

export class FilesResDto extends ResultDto<FileResDto[]> {
  @ApiProperty({ description: 'Response data', type: [FileResDto] })
  data: FileResDto[]
}

export class UploadResDto extends ResultDto<string> {
  @ApiProperty({ description: 'filename', example: 'file.txt' })
  data: string
}

export class FileUploadDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: Express.Multer.File
}

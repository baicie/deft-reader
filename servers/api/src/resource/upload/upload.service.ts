import { Injectable } from '@nestjs/common'
import type { CreateUploadDto } from './dto/create-upload.dto'
import type { UpdateUploadDto } from './dto/update-upload.dto'

@Injectable()
export class UploadService {
  create(createUploadDto: CreateUploadDto): string {
    return 'This action adds a new upload'
  }

  findAll(): string {
    return `This action returns all upload`
  }

  findOne(id: number): string {
    return `This action returns a #${id} upload`
  }

  update(id: number, updateUploadDto: UpdateUploadDto): string {
    return `This action updates a #${id} upload`
  }

  remove(id: number): string {
    return `This action removes a #${id} upload`
  }
}

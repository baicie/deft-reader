import { Injectable } from '@nestjs/common'

@Injectable()
export class UploadService {
  findAll(): string {
    return `This action returns all upload`
  }

  findOne(id: number): string {
    return `This action returns a #${id} upload`
  }

  remove(id: number): string {
    return `This action removes a #${id} upload`
  }
}

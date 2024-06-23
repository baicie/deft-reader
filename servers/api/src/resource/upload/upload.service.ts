import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { FileEntity } from './entities/upload.entity'

@Injectable()
export class UploadService {
  constructor(
    @InjectRepository(FileEntity)
    private readonly fileRepository: Repository<FileEntity>
  ) {}

  async saveFile(filename: string): Promise<FileEntity> {
    const file = new FileEntity()
    file.filename = filename
    return this.fileRepository.save(file)
  }

  async getAllFiles(): Promise<FileEntity[]> {
    return this.fileRepository.find()
  }
}

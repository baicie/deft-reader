import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { FileEntity } from './entities/upload.entity'
import { createHash } from 'node:crypto'

@Injectable()
export class UploadService {
  constructor(
    @InjectRepository(FileEntity)
    private readonly fileRepository: Repository<FileEntity>
  ) {}

  async saveFile(
    filename: string,
    bookName: string,
    size: number,
    md5: string
  ): Promise<FileEntity> {
    const file = new FileEntity()
    file.filename = filename
    file.bookName = bookName
    file.md5 = md5
    file.size = size
    return this.fileRepository.save(file)
  }

  async calculateFileHash(file: Express.Multer.File): Promise<string> {
    return new Promise((resolve, reject) => {
      const hash = createHash('sha256')
      const stream = file.stream

      stream.on('data', (data) => hash.update(data))
      stream.on('end', () => resolve(hash.digest('hex')))
      stream.on('error', reject)
    })
  }

  async updateFile(
    file: FileEntity,
    filename?: string,
    bookName?: string,
    size?: number,
    md5?: string
  ): Promise<FileEntity> {
    if (filename) {
      file.filename = filename
    }
    if (bookName) {
      file.bookName = bookName
    }
    if (size) {
      file.size = size
    }
    if (md5) {
      file.md5 = md5
    }

    return this.fileRepository.save(file)
  }
  async getAllFiles(): Promise<FileEntity[]> {
    return this.fileRepository.find()
  }

  getFileByMd5(md5: string) {
    return this.fileRepository.findOne({ where: { md5 } })
  }
}

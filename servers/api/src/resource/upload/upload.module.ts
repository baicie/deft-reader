import { Module } from '@nestjs/common'
import { UploadService } from './upload.service'
import { UploadController } from './upload.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FileEntity } from './entities/upload.entity'

@Module({
  imports: [TypeOrmModule.forFeature([FileEntity])],
  controllers: [UploadController],
  providers: [UploadService]
})
export class UploadModule {}

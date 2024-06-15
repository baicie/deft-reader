import { Injectable } from '@nestjs/common'
import type { CreateConfigDto } from './dto/create-config.dto'
import type { UpdateConfigDto } from './dto/update-config.dto'

@Injectable()
export class ConfigService {
  create(createConfigDto: CreateConfigDto): string {
    return 'This action adds a new config'
  }

  findAll(): string {
    return `This action returns all config`
  }

  findOne(id: number): string {
    return `This action returns a #${id} config`
  }

  update(id: number, updateConfigDto: UpdateConfigDto): string {
    return `This action updates a #${id} config`
  }

  remove(id: number): string {
    return `This action removes a #${id} config`
  }
}

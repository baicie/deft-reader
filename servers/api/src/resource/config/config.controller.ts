import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common'
import type { ConfigService } from './config.service'
import type { CreateConfigDto } from './dto/create-config.dto'
import type { UpdateConfigDto } from './dto/update-config.dto'

@Controller('config')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Post()
  create(@Body() createConfigDto: CreateConfigDto) {
    return this.configService.create(createConfigDto)
  }

  @Get()
  findAll() {
    return this.configService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.configService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConfigDto: UpdateConfigDto) {
    return this.configService.update(+id, updateConfigDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.configService.remove(+id)
  }
}

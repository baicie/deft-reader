import { Result } from '@/common/result'
import { Body, Controller, Get, Put } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { ConfigService } from './config.service'
import { ConfigData, ConfigDto } from './dto/config.dto'

@ApiTags('config')
@Controller('config')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  @ApiOperation({ summary: 'Get config' })
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: ConfigDto
  })
  async getConfig() {
    return Result.success<ConfigData>(this.configService.getAllEnvVars())
  }

  @Put()
  @ApiOperation({ summary: 'Update config' })
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: ConfigDto
  })
  async updateConfig(@Body() data: ConfigData) {
    await this.configService.updateEnvVars(data)
    return Result.success<ConfigData>(this.configService.getAllEnvVars())
  }
}

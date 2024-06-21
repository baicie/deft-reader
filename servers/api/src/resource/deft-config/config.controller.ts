import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { ConfigService } from './config.service'
import { ConfigData, ConfigDto } from './dto/config.dto'
import { DeftResponseStatus, DeftResponseType } from '@/common/response.type'

@ApiTags('config')
@Controller('config')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  @ApiOperation({ summary: 'Get config' })
  @ApiResponse({
    status: DeftResponseStatus.SUCCESS,
    description: 'Success',
    type: ConfigDto
  })
  getConfig(): DeftResponseType<ConfigData> {
    return {
      data: this.configService.getAllEnvVars(),
      message: 'Config retrieved successfully',
      statusCode: DeftResponseStatus.SUCCESS
    }
  }
}

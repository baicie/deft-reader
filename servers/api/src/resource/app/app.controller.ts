import { Result } from '@/common/result'
import { JwtAuthGuard } from '@/config/jwt-auth.guard'
import { Controller, Get, UseGuards } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { AppService } from './app.service'
import { HelloResultDto } from './dto/hello-world.dto'

@Controller('')
@ApiTags('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Get hello message' })
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: HelloResultDto
  })
  getHello() {
    return Result.success<string>(this.appService.getHello())
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiOperation({ summary: 'Get user profile' })
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: HelloResultDto
  })
  getProfile() {
    return Result.success<string>(this.appService.getProfile())
  }
}

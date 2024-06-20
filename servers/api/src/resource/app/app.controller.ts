import { Controller, Get, HttpStatus, UseGuards } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { AppService } from './app.service'
import { HelloWorldDto } from './dto/hello-world.dto'
import { DeftResponseStatus, DeftResponseType } from '@/common/response.type'
import { JwtAuthGuard } from '@/config/jwt-auth.guard'

@Controller('')
@ApiTags('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Get hello message' })
  @ApiResponse({
    status: DeftResponseStatus.SUCCESS,
    description: 'Success',
    type: HelloWorldDto
  })
  getHello(): DeftResponseType<string> {
    return {
      data: this.appService.getHello(),
      message: 'User retrieved successfully',
      statusCode: DeftResponseStatus.SUCCESS
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiOperation({ summary: 'Get user profile' })
  @ApiResponse({
    status: DeftResponseStatus.SUCCESS,
    description: 'Success',
    type: HelloWorldDto
  })
  getProfile(): DeftResponseType<string> {
    return {
      data: this.appService.getProfile(),
      message: 'User retrieved successfully',
      statusCode: DeftResponseStatus.SUCCESS
    }
  }
}

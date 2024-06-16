import { Controller, Get, HttpStatus, UseGuards } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { AppService } from './app.service'
import { HelloWorldDto } from './dto/hello-world.dto'
import { DeftResponseType } from '@/common/response.type'
import { JwtAuthGuard } from '@/config/jwt-auth.guard'

@Controller('')
@ApiTags('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Get hello message' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: HelloWorldDto
  })
  getHello(): DeftResponseType<string> {
    return {
      data: this.appService.getHello(),
      message: 'User retrieved successfully',
      statusCode: HttpStatus.OK
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiOperation({ summary: 'Get user profile' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: HelloWorldDto
  })
  getProfile(): DeftResponseType<string> {
    return {
      data: this.appService.getProfile(),
      message: 'User retrieved successfully',
      statusCode: HttpStatus.OK
    }
  }
}

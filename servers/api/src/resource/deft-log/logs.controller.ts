import { Controller, Get, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { LogsService } from './logs.service'

@Controller('logs')
@ApiTags('logs')
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  @Get()
  async getLogs(
    @Query('date') date: string,
    @Query('start') start: string,
    @Query('end') end: string,
    @Query('level') level: string
  ) {
    const startNum = parseInt(start, 10) || 0
    const endNum = parseInt(end, 10) || 100

    return this.logsService.getLogs(date, startNum, endNum, level)
  }
}

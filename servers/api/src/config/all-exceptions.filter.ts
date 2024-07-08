import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException
} from '@nestjs/common'
import { Request, Response } from 'express'
import { CustomLoggerService } from './logger.service'

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly logger: CustomLoggerService) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()
    const status =
      exception instanceof HttpException ? exception.getStatus() : 500

    const errorResponse = {
      code: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message:
        exception instanceof Error ? exception.stack : JSON.stringify(exception)
    }

    this.logger.error(
      `${request.method} ${request.url}`,
      exception instanceof Error ? exception.stack : JSON.stringify(exception)
    )

    response.status(status).json(errorResponse)
  }
}

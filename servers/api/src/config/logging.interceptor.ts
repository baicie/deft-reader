import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { CustomLoggerService } from './logger.service'

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly logger: CustomLoggerService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const request = context.switchToHttp().getRequest()
    const { method, url } = request
    const now = Date.now()

    this.logger.requestLog(`${method} ${url}`)

    return next.handle().pipe(
      tap(() => {
        const response = context.switchToHttp().getResponse()
        const { statusCode } = response
        const time = Date.now() - now
        this.logger.responseLog(`${method} ${url} ${statusCode} - ${time}ms`)
      })
    )
  }
}

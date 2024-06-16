import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  NestInterceptor
} from '@nestjs/common'
import { catchError, map } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs'

interface Response<T> {
  data: T
  message: string
  statusCode: number
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => ({
        data,
        message: data.message || 'Request successful',
        statusCode: data.statusCode || HttpStatus.OK
      })),
      catchError((error) => {
        const statusCode =
          error instanceof HttpException
            ? error.getStatus()
            : HttpStatus.INTERNAL_SERVER_ERROR
        const message = error.message || 'Internal server error'
        return throwError(
          () => new HttpException({ statusCode, message }, statusCode)
        )
      })
    )
  }
}

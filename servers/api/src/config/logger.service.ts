import * as path from 'node:path'
import { Injectable, LoggerService } from '@nestjs/common'
import { Logger, createLogger, format, transports } from 'winston'
import 'winston-daily-rotate-file'
import { logPath } from '../path'

@Injectable()
export class CustomLoggerService implements LoggerService {
  private logger: Logger

  constructor() {
    const logDirectory = logPath

    this.logger = createLogger({
      level: 'info',
      format: format.combine(
        format.timestamp(),
        format.errors({ stack: true }),
        format.splat(),
        format.json()
      ),
      transports: [
        new transports.Console(),
        new transports.DailyRotateFile({
          filename: path.join(logDirectory, 'combined-%DATE%.log'),
          datePattern: 'YYYY-MM-DD',
          maxSize: '20m',
          maxFiles: '14d'
        }),
        new transports.DailyRotateFile({
          filename: path.join(logDirectory, 'error-%DATE%.log'),
          level: 'error',
          datePattern: 'YYYY-MM-DD',
          maxSize: '20m',
          maxFiles: '14d'
        })
      ]
    })
  }

  log(message: string) {
    this.logger.info(message)
  }

  error(message: string, trace: string) {
    this.logger.error(message, { trace })
  }

  warn(message: string) {
    this.logger.warn(message)
  }

  debug(message: string) {
    this.logger.debug(message)
  }

  verbose(message: string) {
    this.logger.verbose(message)
  }
}

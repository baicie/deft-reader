import { Injectable, LoggerService } from '@nestjs/common'
import { createLogger, format, transports, Logger } from 'winston'
import 'winston-daily-rotate-file'
import * as path from 'path'
import { logPath } from '@/path'

@Injectable()
export class CustomLoggerService implements LoggerService {
  private logger: Logger

  constructor() {
    const logDirectory = logPath

    this.logger = createLogger({
      level: 'info',
      format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.errors({ stack: true }),
        format.splat(),
        format.printf(({ timestamp, level, message, ...meta }) => {
          let logMessage = `${timestamp} [${level}] ${message}`
          if (meta.trace) {
            logMessage += `\nStack Trace: ${meta.trace}`
          }
          return logMessage
        })
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

  requestLog(message: string) {
    this.logger.info(`Request: ${message}`)
  }

  responseLog(message: string) {
    this.logger.info(`Response: ${message}`)
  }
}

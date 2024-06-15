import { LogLevel } from './log-level'
import { LogTransport } from './transport'

/**
 * Log Service
 */
export class Logger {
  constructor(private transports: LogTransport[]) {}

  public addTransport(transport: LogTransport) {
    this.transports.push(transport)
  }

  public error(msg: string) {
    this.log(LogLevel.Error, msg)
  }

  public warn(msg: string) {
    this.log(LogLevel.Warn, msg)
  }

  public info(msg: string) {
    this.log(LogLevel.Info, msg)
  }

  public debug(msg: string) {
    this.log(LogLevel.Debug, msg)
  }

  public log(level: LogLevel, msg: string) {
    this.transports.forEach((transport) => {
      transport.log(level, 'app', msg)
    })
  }
}

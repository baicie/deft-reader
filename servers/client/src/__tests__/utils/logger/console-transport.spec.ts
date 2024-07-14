import { describe, it, expect, beforeEach, vi } from 'vitest'
import dayjs from 'dayjs'
import { ConsoleLogTransport } from '@/utils/logger/console-transport'
import { LogLevel } from '@/utils/logger/log-level'

describe('ConsoleLogTransport', () => {
  let consoleSpy: any

  beforeEach(() => {
    consoleSpy = {
      error: vi.spyOn(console, 'error').mockImplementation(() => {}),
      warn: vi.spyOn(console, 'warn').mockImplementation(() => {}),
      info: vi.spyOn(console, 'info').mockImplementation(() => {}),
      debug: vi.spyOn(console, 'debug').mockImplementation(() => {}),
    }
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should not log if level is higher than maxLevel', () => {
    const transport = new ConsoleLogTransport(LogLevel.Warn)
    transport.log(LogLevel.Error, 'test-module', 'This is an error message')
    transport.log(LogLevel.Debug, 'test-module', 'This is a debug message')

    expect(consoleSpy.error).toHaveBeenCalled()
    expect(consoleSpy.debug).not.toHaveBeenCalled()
  })

  it('should log messages correctly', () => {
    const transport = new ConsoleLogTransport(LogLevel.Debug)

    transport.log(LogLevel.Debug, 'test-module', 'This is a debug message')
    expect(consoleSpy.debug).toHaveBeenCalledWith(
      expect.stringContaining('%cDBG%c ['),
      expect.any(String),
      '',
    )

    transport.log(LogLevel.Info, 'test-module', 'This is an info message')
    expect(consoleSpy.info).toHaveBeenCalledWith(
      expect.stringContaining('%cINF%c ['),
      expect.any(String),
      '',
    )

    transport.log(LogLevel.Warn, 'test-module', 'This is a warn message')
    expect(consoleSpy.warn).toHaveBeenCalledWith(
      expect.stringContaining('%cWRN%c ['),
      expect.any(String),
      '',
    )

    transport.log(LogLevel.Error, 'test-module', 'This is an error message')
    expect(consoleSpy.error).toHaveBeenCalledWith(
      expect.stringContaining('%cERR%c ['),
      expect.any(String),
      '',
    )
  })

  it('should log with the correct format', () => {
    const transport = new ConsoleLogTransport(LogLevel.Debug)
    const timestamp = dayjs().format('HH:mm:ss.SSS')

    transport.log(LogLevel.Info, 'test-module', 'Formatted message')
    expect(consoleSpy.info).toHaveBeenCalledWith(
      expect.stringContaining(`[${timestamp}] [test-module] Formatted message`),
      expect.any(String),
      '',
    )
  })
})

import { describe, it, expect, vi } from 'vitest'
import { renderHook } from '@testing-library/react'
import { container } from 'tsyringe'
import { useLogger } from '../../../hooks/use-logger'
import { LogLevel } from '@/utils/logger/log-level'
import { Logger } from '@/utils/logger/logger'
import { LogTransport } from '@/utils/logger/transport'

class MockTransport implements LogTransport {
  maxLevel = LogLevel.Info
  log = vi.fn()
}

// 注册 MockLogger 到 tsyringe 容器
container.registerInstance('LogTransport', new MockTransport())
container.register(Logger, {
  useFactory: (c) => new Logger([c.resolve('LogTransport')]),
})

describe('useLogger', () => {
  it('should resolve and return the injected Logger instance', () => {
    const { result } = renderHook(() => useLogger())

    expect(result.current).toBeInstanceOf(Logger)
  })

  it('should log messages at different levels', () => {
    const { result } = renderHook(() => useLogger())
    const logger = result.current
    const transport = container.resolve<LogTransport>('LogTransport')

    logger.error('Error message')
    logger.warn('Warning message')
    logger.info('Info message')
    logger.debug('Debug message')

    expect(transport.log).toHaveBeenCalledWith(
      LogLevel.Error,
      'app',
      'Error message',
    )
    expect(transport.log).toHaveBeenCalledWith(
      LogLevel.Warn,
      'app',
      'Warning message',
    )
    expect(transport.log).toHaveBeenCalledWith(
      LogLevel.Info,
      'app',
      'Info message',
    )
    expect(transport.log).toHaveBeenCalledWith(
      LogLevel.Debug,
      'app',
      'Debug message',
    )
  })

  it('should add a new transport', () => {
    const { result } = renderHook(() => useLogger())
    const logger = result.current
    const newTransport = new MockTransport()

    logger.addTransport(newTransport)
    logger.info('Test message')

    expect(newTransport.log).toHaveBeenCalledWith(
      LogLevel.Info,
      'app',
      'Test message',
    )
  })
})

import { describe, it, expect, vi } from 'vitest'
import { renderHook } from '@testing-library/react'
import { container, injectable } from 'tsyringe'
import { Logger } from '../../utils/logger/logger'
import { useInjectable } from '../use-di'
import { LogLevel } from '../../utils/logger/log-level'

@injectable()
class MockLogger extends Logger {
  log(level: LogLevel, msg: string): void {
    console.log(`Mock log: ${level} - ${msg}`)
  }
}

describe('useInjectable', () => {
  beforeEach(() => {
    container.clearInstances()
    container.register(Logger, { useClass: MockLogger })
  })

  it('should resolve and return the injected instance', () => {
    const { result } = renderHook(() => useInjectable<Logger>(Logger))

    expect(result.current).toBeInstanceOf(Logger)

    const spy = vi.spyOn(console, 'log')
    result.current.log(LogLevel.Info, 'Test message')
    expect(spy).toHaveBeenCalledWith('Mock log: 6 - Test message')
    spy.mockRestore()
  })
})

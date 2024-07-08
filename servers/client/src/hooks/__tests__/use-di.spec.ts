import { describe, it, expect } from 'vitest'
import { renderHook } from '@testing-library/react'
import { container, injectable } from 'tsyringe'
import { useInjectable } from '../use-di'
// 创建一个可注入的服务类
@injectable()
class MyService {
  doSomething() {
    return 'Hello, World!'
  }
}

// 将服务类绑定到容器中
container.register('MyService', MyService)

describe('useInjectable', () => {
  it('should resolve and return the injected service', () => {
    const { result } = renderHook(() => useInjectable(MyService))

    expect(result.current).toBeInstanceOf(MyService)
    expect(result.current.doSomething()).toBe('Hello, World!')
  })
})

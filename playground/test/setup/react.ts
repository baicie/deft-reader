import 'reflect-metadata'
import { afterAll, beforeAll, vi } from 'vitest'
import { server } from './server'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

// 模拟 window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // 旧的 API
    removeListener: vi.fn(), // 旧的 API
    addEventListener: vi.fn(), // 新的 API
    removeEventListener: vi.fn(), // 新的 API
    dispatchEvent: vi.fn(),
  }),
})

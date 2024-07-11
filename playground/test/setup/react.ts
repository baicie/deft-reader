import 'reflect-metadata'
import { afterAll, beforeAll, vi } from 'vitest'
import { serve } from './server'
import type { DeftApp } from '@deft-reader/api'

let app: DeftApp | undefined
const port = 4001

beforeAll(() => {
  serve().then((_app) => {
    app = _app
    app?.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`)
    })
  })
})

afterAll(() => app?.close())

// mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }),
})

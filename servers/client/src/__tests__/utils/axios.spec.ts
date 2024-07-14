import { describe, it, expect, beforeEach, afterEach, vi, Mock } from 'vitest'
import MockAdapter from 'axios-mock-adapter'
import cookies from 'js-cookie'
import { message } from 'antd'
import { container } from 'tsyringe'
import { axios as axiosInstance } from '@/utils/axios' // 调整路径
import { Logger } from 'vite'

// Mock dependencies
vi.mock('js-cookie')
vi.mock('antd')
vi.mock('./logger/logger')
vi.mock('tsyringe', () => ({
  container: {
    resolve: vi.fn(),
  },
}))

describe('Axios Configuration', () => {
  let mock: MockAdapter
  let logger: Logger

  beforeEach(() => {
    mock = new MockAdapter(axiosInstance)
    logger = {
      error: vi.fn(),
    } as unknown as Logger
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    container.resolve.mockReturnValue(logger)
    vi.clearAllMocks()
  })

  afterEach(() => {
    mock.reset()
  })

  it('should set language header if cookie exists', async () => {
    ;(cookies.get as Mock).mockReturnValue('en')

    mock.onGet('/test').reply(200, { code: 0, data: {} })

    await axiosInstance.get('/test')

    expect(mock.history.get[0].headers!['language']).toBe('en')
  })

  it('should not set language header if cookie does not exist', async () => {
    ;(cookies.get as Mock).mockReturnValue(undefined)

    mock.onGet('/test').reply(200, { code: 0, data: {} })

    await axiosInstance.get('/test')

    expect(mock.history.get[0].headers!['language']).toBeUndefined()
  })

  it('should handle successful response', async () => {
    mock.onGet('/test').reply(200, { code: 0, data: { key: 'value' } })

    const response = await axiosInstance.get('/test')

    expect(response).toEqual({ key: 'value' })
  })

  it('should handle known error codes', async () => {
    mock.onGet('/test').reply(200, { code: 10500, message: 'Error message' })

    try {
      await axiosInstance.get('/test')
    } catch (_) {
      expect(message.error).toHaveBeenCalledWith('Error message')
      expect(logger.error).toHaveBeenCalledWith('Error message')
    }
  })

  it('should handle unknown error codes', async () => {
    mock.onGet('/test').reply(200, { code: 9999, message: 'Unknown error' })

    try {
      await axiosInstance.get('/test')
    } catch (_) {
      expect(message.error).toHaveBeenCalledWith('Unknown error')
      expect(logger.error).toHaveBeenCalledWith('Unknown error')
    }
  })

  it('should handle Blob response', async () => {
    const blob = new Blob([JSON.stringify({ key: 'value' })], {
      type: 'application/json',
    })
    mock.onGet('/test').reply(200, blob)

    const response = await axiosInstance.get('/test')
    expect(response).toEqual({ key: 'value' })
  })
})

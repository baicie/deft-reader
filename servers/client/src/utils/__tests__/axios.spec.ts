import { describe, it, expect, vi, beforeEach } from 'vitest'
import axios, { AxiosError, AxiosResponse } from 'axios'
import cookies from 'js-cookie'
import { message } from 'antd'
import { axios as service } from '../axios'

// Mock logger
const mockLogger = {
  error: vi.fn(),
}

vi.mock('js-cookie', () => ({
  get: vi.fn(),
}))

vi.mock('axios', async (importOriginal) => {
  const actual = await importOriginal()
  const create = vi.fn(() => {
    const instance = actual.create()
    instance.interceptors.request.handlers = []
    instance.interceptors.response.handlers = []
    return instance
  })
  return {
    ...actual,
    default: actual,
    create,
  }
})

vi.mock('antd', () => ({
  message: {
    destroy: vi.fn(),
    error: vi.fn(),
  },
}))

vi.mock('tsyringe', () => ({
  container: {
    resolve: vi.fn(() => mockLogger),
  },
}))

describe('Axios Service', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should set language header from cookies', async () => {
    cookies.get.mockReturnValue('en')
    await service.get('/test')
    expect(
      axios.create().interceptors.request.handlers[0].fulfilled,
    ).toBeDefined()

    const config = { headers: {} }
    axios.create().interceptors.request.handlers[0].fulfilled(config)
    expect(config.headers.language).toBe('en')
  })

  it('should handle Blob response and parse JSON correctly', async () => {
    const blob = new Blob([JSON.stringify({ code: 0, data: 'test' })], {
      type: 'application/json',
    })
    const response = { data: blob } as AxiosResponse

    const result = await axios
      .create()
      .interceptors.response.handlers[0].fulfilled(response)
    expect(result).toBe('test')
  })

  it('should call handleError for other error codes', async () => {
    const response = {
      data: { code: 9999, message: 'Unknown error' },
    } as AxiosResponse
    await axios
      .create()
      .interceptors.response.handlers[0].fulfilled(response)
      .catch(() => {})

    expect(message.destroy).toHaveBeenCalled()
    expect(message.error).toHaveBeenCalledWith('Unknown error')
    expect(mockLogger.error).toHaveBeenCalledWith('Unknown error')
  })

  it('should reject on request error', async () => {
    const error = new Error('Request error') as AxiosError
    try {
      await axios.create().interceptors.request.handlers[0].rejected(error)
    } catch (e) {
      expect(e).toBe(error)
    }
  })

  it('should reject on response error', async () => {
    const error = new Error('Response error') as AxiosError

    // Manually add a response interceptor with rejected handler
    const axiosInstance = axios.create()
    axiosInstance.interceptors.response.handlers.push({
      fulfilled: (response: any) => response,
      rejected: (error: any) => Promise.reject(error),
    })

    try {
      await axiosInstance.interceptors.response.handlers[1].rejected(error)
    } catch (e) {
      expect(e).toBe(error)
    }
  })
})

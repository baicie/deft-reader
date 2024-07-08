import { describe, it, expect, vi, beforeEach, afterEach, Mock } from 'vitest'
import axiosOriginal, { AxiosRequestConfig, AxiosResponse } from 'axios'
import cookies from 'js-cookie'
import { message } from 'antd'
import { container } from 'tsyringe'

vi.mock('js-cookie')
vi.mock('antd')
vi.mock('tsyringe')

// 创建 axios 实例
const instance = axiosOriginal.create()

instance.interceptors.request.use = vi.fn()

describe('Axios Service', () => {
  let logger: any

  beforeEach(() => {
    ;(axiosOriginal.create as Mock).mockReturnValue(instance)
    logger = { error: vi.fn() }
    container.resolve = vi.fn().mockReturnValue(logger)
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should set language header from cookies', async () => {
    ;(cookies.get as Mock).mockReturnValue('en')
    const config: AxiosRequestConfig = { headers: {} }
    console.log('instance', instance.interceptors.request.use)

    const requestInterceptor = (config: AxiosRequestConfig) => {
      const language = cookies.get('language')
      if (language) {
        config.headers!['language'] = language
      }
      return config
    }

    instance.interceptors.request.use.mockImplementationOnce(requestInterceptor)

    const interceptor = instance.interceptors.request.use.mock.calls[0][0]
    await interceptor(config)

    // 断言请求头中包含语言信息
    expect(config.headers['language']).toBe('en')
  })

  it('should handle Blob response and parse JSON correctly', async () => {
    const res: AxiosResponse = {
      data: new Blob([JSON.stringify({ code: 0, data: 'test' })], {
        type: 'application/json',
      }),
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    }

    const responseInterceptor =
      instance.interceptors.response.use.mock.calls[0][0]
    const result = await responseInterceptor(res)

    expect(result).toBe('test')
  })

  it('should call handleError for other error codes', async () => {
    const res: AxiosResponse = {
      data: { code: 10500, message: 'Error message', data: {} },
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    }

    const responseInterceptor =
      instance.interceptors.response.use.mock.calls[0][0]
    try {
      await responseInterceptor(res)
    } catch (_) {
      expect(message.error).toHaveBeenCalledWith('Error message')
      expect(logger.error).toHaveBeenCalledWith('Error message')
    }
  })

  it('should reject on request error', async () => {
    const error = new Error('Request error')
    const requestInterceptor =
      instance.interceptors.request.use.mock.calls[0][1]
    try {
      await requestInterceptor(error)
    } catch (e) {
      expect(e).toBe(error)
    }
  })

  it('should reject on response error', async () => {
    const error = new Error('Response error')
    const responseInterceptor =
      instance.interceptors.response.use.mock.calls[0][1]
    try {
      await responseInterceptor(error)
    } catch (e) {
      expect(e).toBe(error)
    }
  })
})

import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import cookies from 'js-cookie'
import { message } from 'antd'
import { Logger } from './logger/logger'
import { container } from 'tsyringe'

/**
 * @description Log and display errors
 * @param {Error} error Error object
 */
const handleError = <T = Record<string, string>>(
  res: AxiosResponse<{
    statusCode: number
    data: T
    message: string
  }>,
) => {
  // Print to console
  const logger = container.resolve(Logger)
  message.destroy()
  message.error(res.data.message)
  logger.error(res.data.message)
}

const baseRequestConfig: AxiosRequestConfig = {
  baseURL: '/api',
  timeout: 60000,
}

const service = axios.create(baseRequestConfig)

const err = (err: AxiosError): Promise<AxiosError | AxiosResponse> => {
  return Promise.reject(err)
}

service.interceptors.request.use((config) => {
  const language = cookies.get('language')
  config.headers = config.headers || {}
  if (language) config.headers.language = language

  return config
}, err)

// The response to intercept
service.interceptors.response.use(async (res: AxiosResponse) => {
  const logger = container.resolve(Logger)

  if (res.data instanceof Blob) {
    const blobText = await res.data.text()
    if (JSON.parse(blobText).code === void 0) return res.data
    res.data = JSON.parse(blobText)
  }

  switch (res.data.code) {
    case 0:
      return res.data.data
    case 10500:
    case 10501:
      message.destroy()
      message.error(res.data.message)
      logger.error(res.data.message)
      break
    default:
      handleError(res)
      throw new Error()
  }
}, err)

export { service as axios }

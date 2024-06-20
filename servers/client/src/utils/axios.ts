import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import cookies from 'js-cookie'
import { message } from 'antd'
import { useLogger } from '../hooks/use-logger'
// import router from '@/router'
// import utils from '@/utils'
// import isJson from '@/utils/json'
// import { useTokenStore } from '@/store/token'

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
  const logger = useLogger()
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
  //   const userStore = useUserStore()
  //   const tokenStore = useTokenStore()
  //   config.headers && (config.headers.sessionId = userStore.getSessionId)
  //   config.headers &&
  //     tokenStore.getToken &&
  //     (config.headers.token = tokenStore.getToken)
  const language = cookies.get('language')
  config.headers = config.headers || {}
  if (language) config.headers.language = language

  return config
}, err)

// The response to intercept
service.interceptors.response.use(async (res: AxiosResponse) => {
  if (res.data instanceof Blob) {
    const blobText = await res.data.text()
    if (JSON.parse(blobText).code === void 0) return res.data
    res.data = JSON.parse(blobText)
  }

  switch (res.data.statusCode) {
    case 0:
      return res.data.data
    default:
      handleError(res)
      throw new Error()
  }
}, err)

export { service as axios }

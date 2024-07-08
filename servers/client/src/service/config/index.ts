import { axios } from '@/utils/axios'
import { ConfigType } from './types'

export function getConfig(): Promise<ConfigType> {
  return axios.get('/config')
}

export function updateConfig(data: unknown) {
  return axios.put('/config', data)
}

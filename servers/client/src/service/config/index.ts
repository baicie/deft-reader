import { axios } from '@/utils/axios'

export function getConfig() {
  return axios.get('/config')
}

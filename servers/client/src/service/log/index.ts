import { axios } from '@/utils/axios'

export function getLogs(date: string): Promise<{
  logs: string[]
  hasNext: boolean
}> {
  return axios.get('/logs', {
    params: {
      date,
    },
  })
}

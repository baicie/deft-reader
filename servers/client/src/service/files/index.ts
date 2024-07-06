import { axios } from '@/utils/axios'
import { BookList } from './types'

export function getFiles(): Promise<BookList> {
  return axios.get('/upload')
}

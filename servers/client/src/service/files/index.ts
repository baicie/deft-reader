import { axios } from '@/utils/axios'
import { BookList } from './types'

export function getFiles(): Promise<BookList> {
  return axios.get('/upload')
}
export function validateFile(md5: string): Promise<boolean> {
  return axios.get(`/upload/md5`, { params: { md5 } })
}

export function deleteFile(id: number): Promise<void> {
  return axios.delete(`/upload/${id}`)
}

import { describe, it, expect, beforeAll, afterEach } from 'vitest'
import MockAdapter from 'axios-mock-adapter'
import { axios } from '@/utils/axios'
import { getFiles, validateFile, deleteFile } from '@/service/files'

// 初始化 axios-mock-adapter
const mock = new MockAdapter(axios)

// 在所有测试之前执行的操作
beforeAll(() => {
  // 可以在这里添加全局的 Mock 配置，比如响应的默认设置等
})

// 每个测试用例执行后重置 mock
afterEach(() => {
  mock.reset()
})

// 测试用例
describe('File Service Tests', () => {
  describe('getFiles', () => {
    it('should fetch files', async () => {
      const mockData = [
        { id: 1, name: 'File 1' },
        { id: 2, name: 'File 2' },
      ]

      // 模拟 axios get 请求
      mock.onGet('/upload').reply(200, {
        code: 0,
        data: mockData,
        message: 'success',
      })

      const result = await getFiles()
      expect(result).toEqual(mockData)
      expect(mock.history.get[0].url).toBe('/upload')
    })
  })

  describe('validateFile', () => {
    it('should validate file by md5', async () => {
      const md5 = 'sample-md5-hash'

      // 模拟 axios get 请求，带有参数
      mock.onGet(`/upload/md5`, { params: { md5 } }).reply(200, {
        code: 0,
        data: true,
        message: 'success',
      })

      const result = await validateFile(md5)
      expect(result).toBe(true)
      expect(mock.history.get.length).toBe(1)
      const actualUrl = mock.history.get[0].url
      const expectedUrl = `/upload/md5`

      expect(actualUrl).toEqual(expectedUrl)
      const params = new URLSearchParams(mock.history.get[0].params)
      expect(params.get('md5')).toBe(md5)
    })
  })

  describe('deleteFile', () => {
    it('should delete file by id', async () => {
      const fileId = 1

      // 模拟 axios delete 请求
      mock.onDelete(`/upload/${fileId}`).reply(204, {
        code: 0,
        data: true,
        message: 'success',
      })

      await deleteFile(fileId)
      expect(mock.history.delete[0].url).toBe(`/upload/${fileId}`)
    })
  })
})

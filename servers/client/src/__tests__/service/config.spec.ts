import { axios } from '@/utils/axios'
import MockAdapter from 'axios-mock-adapter'
import { afterEach, describe, expect, it } from 'vitest'
import { getConfig, updateConfig } from '@/service/config'

const mock = new MockAdapter(axios)

afterEach(() => {
  // 重置每个测试后的 mock
  mock.reset()
})

describe('API Tests', () => {
  describe('getConfig', () => {
    it('should fetch config data', async () => {
      const mockData = {
        key: 'value', // 替换为实际字段
      }

      // 模拟 axios get 请求
      mock.onGet('/config').reply(200, {
        code: 0,
        data: mockData,
        message: 'success',
      })

      const result = await getConfig()
      expect(result).toEqual(mockData)
      expect(mock.history.get[0].url).toBe('/config')
    })
  })

  describe('updateConfig', () => {
    it('should update config data', async () => {
      const mockData = { key: 'newValue' }

      // 模拟 axios put 请求
      mock.onPut('/config', mockData).reply(200, {
        code: 0,
        data: {},
        message: 'success',
      })

      await updateConfig(mockData)
      expect(mock.history.put[0].url).toBe('/config')
      expect(mock.history.put[0].data).toBe(JSON.stringify(mockData))
    })
  })
})

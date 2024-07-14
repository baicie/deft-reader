import MockAdapter from 'axios-mock-adapter'
import { axios } from '@/utils/axios'
import { getLogs } from '@/service/log'

const mock = new MockAdapter(axios)

// 模拟 GET 请求
mock.onGet('/logs').reply((config) => {
  const { date } = config.params
  if (date === '2024-07-15') {
    return [
      200,
      {
        code: 0,
        data: { logs: ['log1', 'log2'], hasNext: false },
        message: 'success',
      },
    ]
  } else {
    return [404, { message: 'Logs not found' }]
  }
})

// 测试 getLogs 函数
describe('getLogs function', () => {
  it('should fetch logs for a specific date', async () => {
    const date = '2024-07-15'
    const result = await getLogs(date)

    expect(result).toEqual({
      logs: ['log1', 'log2'],
      hasNext: false,
    })

    // 检查实际的请求历史记录
    expect(mock.history.get.length).toBe(1)
    const actualUrl = mock.history.get[0].url
    const params = new URLSearchParams(mock.history.get[0].params)
    expect(actualUrl).toBe('/logs')
    expect(params.get('date')).toBe(date)
  })

  it('should handle logs not found error', async () => {
    const date = '2024-07-16'
    try {
      await getLogs(date)
    } catch (error: any) {
      expect(error.message).toBe('Request failed with status code 404')
    }
  })
})

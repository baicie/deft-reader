import { getLogs } from '@/service/log'
import { TimelineProps } from 'antd'
import { LogStore } from '@/store/log'
import { Mock } from 'vitest'

vi.mock('@/service/log', () => ({
  getLogs: vi.fn(),
}))

describe('LogStore', () => {
  let logStore: LogStore

  beforeEach(() => {
    logStore = new LogStore()
    vi.spyOn(logStore, 'generateColor')
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should query logs and generate color', async () => {
    const mockLogs = ['[info] Log 1', '[warn] Log 2', '[error] Log 3']
    const mockResult: TimelineProps['items'] = [
      {
        color: 'green',
        children: '[info] Log 1',
      },
      {
        color: 'yellow',
        children: '[warn] Log 2',
      },
      {
        color: 'red',
        children: '[error] Log 3',
      },
    ]
    ;(getLogs as Mock).mockResolvedValue({ logs: mockLogs })

    await logStore.queryLogs()

    expect(getLogs).toHaveBeenCalledWith(logStore.date)
    expect(logStore.logs).toEqual(mockResult)
    expect(logStore.generateColor).toHaveBeenCalledWith(mockLogs)
  })

  it('should generate color for logs', () => {
    const logs = ['[info] Log 1', '[warn] Log 2', '[error] Log 3']
    const result: TimelineProps['items'] = [
      {
        color: 'green',
        children: '[info] Log 1',
      },
      {
        color: 'yellow',
        children: '[warn] Log 2',
      },
      {
        color: 'red',
        children: '[error] Log 3',
      },
    ]

    const generatedColor = logStore.generateColor(logs)

    expect(generatedColor).toEqual(result)
  })
})

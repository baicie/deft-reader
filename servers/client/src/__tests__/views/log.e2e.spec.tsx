import { describe, it, expect, beforeEach, vi, Mock } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { observer } from 'mobx-react-lite'
import { useCallback, useEffect } from 'react'
import LogView from '@/view/log-page/log-view'
import { useInjectable } from '@/hooks/use-di'
import { LogStore } from '@/store/log'
import dayjs from 'dayjs'
import { defaultDateFormat } from '@/utils/dayjs'

vi.mock('@/hooks/use-di')
vi.mock('@/store/log', () => ({
  LogStore: class {
    logs = []
    date = dayjs().format(defaultDateFormat)
    queryLogs = vi.fn()
  },
}))
vi.mock('@/utils/dayjs', () => ({
  defaultDateFormat: 'YYYY-MM-DD',
}))

const mockQueryLogs = vi.fn()

const MockLogStore = {
  logs: [],
  date: dayjs().format(defaultDateFormat),
  queryLogs: mockQueryLogs,
}

;(useInjectable as Mock).mockReturnValue(MockLogStore)

const MockLogViewComponent = observer(() => {
  const logs = useInjectable(LogStore)

  const handleClick = useCallback(
    async (date: dayjs.Dayjs) => {
      logs.date = date.format(defaultDateFormat)
      await logs.queryLogs()
    },
    [logs],
  )

  useEffect(() => {
    logs.queryLogs()
  }, [logs])

  return (
    <LogView
      items={logs.logs}
      onChange={handleClick}
      defaultValue={dayjs(logs.date, defaultDateFormat)}
    />
  )
})

describe('LogView Component', () => {
  beforeEach(() => {
    render(<MockLogViewComponent />)
  })

  it('should render the date picker', () => {
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should render empty when no logs', () => {
    expect(screen.getByText(/No Data/i)).toBeInTheDocument()
  })

  it('should update logs on date change', async () => {
    const newDate = dayjs('2023-07-14', defaultDateFormat)
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: newDate.format(defaultDateFormat) },
    })
    expect(MockLogStore.queryLogs).toHaveBeenCalled()
  })
})

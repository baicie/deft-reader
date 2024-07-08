import { observer } from 'mobx-react-lite'
import { useCallback, useEffect } from 'react'
import LogView from './log-view'
import { useInjectable } from '@/hooks/use-di'
import { LogStore } from '@/store/log'
import dayjs from 'dayjs'
import { defaultDateFormat } from '@/utils/dayjs'

export default observer(() => {
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

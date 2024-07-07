import { getLogs } from '@/service/log'
import { defaultDateFormat } from '@/utils/dayjs'
import { TimelineProps } from 'antd'
import dayjs from 'dayjs'
import { action, makeObservable, observable } from 'mobx'
import { singleton } from 'tsyringe'

@singleton()
export class LogStore {
  @observable
  public logs: TimelineProps['items'] = []

  @observable
  public date = dayjs().format(defaultDateFormat)

  @action
  public async queryLogs() {
    const res = await getLogs(this.date)
    this.logs = this.generateColor(res.logs)
  }

  generateColor(logs: string[]) {
    const result = []
    for (const line of logs) {
      if (line.includes('[info]')) {
        result.push({
          color: 'green',
          children: line,
        })
      } else if (line.includes('[warn]')) {
        result.push({
          color: 'yellow',
          children: line,
        })
      } else if (line.includes('[error]')) {
        result.push({
          color: 'red',
          children: line,
        })
      }
    }

    return result
  }

  constructor() {
    makeObservable(this)
  }
}

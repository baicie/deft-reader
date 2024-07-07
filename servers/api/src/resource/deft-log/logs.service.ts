import * as fs from 'node:fs'
import * as readline from 'node:readline'
import * as path from 'node:path'
import { Injectable } from '@nestjs/common'
import { logPath } from '../../path'

@Injectable()
export class LogsService {
  private logDirectory = logPath

  async getLogs(date: string, start: number, end: number, level = 'combined') {
    const logFilePath = path.resolve(this.logDirectory, `${level}-${date}.log`)

    if (!fs.existsSync(logFilePath)) {
      return {
        logs: [],
        hasNext: false
      }
    }

    const logs = []
    const fileStream = fs.createReadStream(logFilePath)
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    })
    const logPattern = /\[.*?\]/
    let currentLine = 0
    let currentLog = ''

    for await (const line of rl) {
      if (logPattern.test(line) && currentLog !== '') {
        logs.push(currentLog)
        currentLog = ''
        continue
      }

      currentLog += line + '\n'
      currentLine++

      if (logs.length >= end) {
        break
      }
    }

    // Push the last log if any
    if (currentLog !== '') {
      logs.push(currentLog.trim())
    }

    const hasNext = currentLine >= end

    return {
      logs: logs.slice(start, end),
      hasNext
    }
  }
}

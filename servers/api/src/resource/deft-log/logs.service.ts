import * as fs from 'node:fs'
import * as readline from 'node:readline'
import * as path from 'node:path'
import { Injectable } from '@nestjs/common'
import { logPath } from '../../path'

@Injectable()
export class LogsService {
  private logDirectory = logPath

  async getLogs(date: string, start: number, end: number, level = 'combined') {
    const logFilePath = path.join(this.logDirectory, `${level}-${date}.log`)

    if (!fs.existsSync(logFilePath)) {
      throw new Error('Log file not found')
    }

    const logs = []
    const fileStream = fs.createReadStream(logFilePath)
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    })

    let currentLine = 0
    for await (const line of rl) {
      if (currentLine >= start && currentLine < end) {
        logs.push(JSON.parse(line))
      }
      if (currentLine >= end) {
        break
      }
      currentLine++
    }

    const hasNext = currentLine >= end

    return {
      logs,
      hasNext
    }
  }
}

import { Injectable } from '@nestjs/common'
import { ConfigService as NestConfigService } from '@nestjs/config'
import { ConfigData } from './dto/config.dto'
import * as fs from 'node:fs'
@Injectable()
export class ConfigService {
  constructor(private readonly nestConfigService: NestConfigService) {}

  getAllEnvVars(): ConfigData {
    const envVars: ConfigData = {
      DATABASE_PATH: '',
      SERVER_PORT: 0,
      ENABLE_WEB: false,
      ENABLE_SWAGGER: false,
      ENABLE_LOG: false,
      LOG_PATH: '',
      ENABLE_AUTH: false
    }
    for (const key in envVars) {
      const val = this.nestConfigService.get(key)
      if (val === 'true') {
        envVars[key] = true
      } else if (val === 'false') {
        envVars[key] = false
      } else {
        envVars[key] = this.nestConfigService.get(key)
      }
    }
    return envVars
  }

  async updateEnvVars(data: ConfigData): Promise<void> {
    const envFilePath = this.nestConfigService.get<string>('ENV_FILE_PATH')

    // Load current env variables from file
    const envConfig = fs
      .readFileSync(envFilePath, 'utf8')
      .split('\n')
      .reduce(
        (acc, line) => {
          const [key, value] = line.split('=')
          if (key) {
            acc[key] = value
          }
          return acc
        },
        {} as Record<string, string>
      )

    // Update env variables with new data
    for (const key of Object.keys(data)) {
      envConfig[key] = data[key]
    }

    // Write updated env variables back to file
    const updatedEnvConfig = Object.entries(envConfig)
      .map(([key, value]) => `${key}=${value}`)
      .join('\n')
    fs.writeFileSync(envFilePath, updatedEnvConfig, 'utf8')
  }
}

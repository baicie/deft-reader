import { Injectable } from '@nestjs/common'
import { ConfigService as NestConfigService } from '@nestjs/config'
import { ConfigData } from './dto/config.dto'

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
}

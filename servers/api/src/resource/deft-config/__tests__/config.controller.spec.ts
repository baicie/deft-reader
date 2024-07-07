import { describe, it, expect, beforeEach, vi } from 'vitest'
import { ConfigController } from '../config.controller'
import { ConfigService } from '../config.service'
import { ConfigData } from '../dto/config.dto'
import { Result } from '@/common/result'
import { ConfigService as NestConfigService } from '@nestjs/config'

describe('ConfigController', () => {
  let controller: ConfigController
  let service: ConfigService

  beforeEach(() => {
    service = new ConfigService(new NestConfigService())
    controller = new ConfigController(service)
  })

  it('should return configs', async () => {
    const configData: ConfigData = {
      ENABLE_LOG: true,
      DATABASE_PATH: '',
      SERVER_PORT: 0,
      ENABLE_WEB: false,
      ENABLE_SWAGGER: false,
      LOG_PATH: '',
      ENABLE_AUTH: false
    }
    vi.spyOn(service, 'getAllEnvVars').mockReturnValue(configData)

    const result = await controller.getConfig()
    expect(result).toEqual(Result.success(configData))
  })

  it('should update configs', async () => {
    const configData: ConfigData = {
      ENABLE_LOG: true,
      DATABASE_PATH: '',
      SERVER_PORT: 0,
      ENABLE_WEB: false,
      ENABLE_SWAGGER: false,
      LOG_PATH: '',
      ENABLE_AUTH: false
    }
    vi.spyOn(service, 'updateEnvVars').mockImplementation(async () => {})
    vi.spyOn(service, 'getAllEnvVars').mockReturnValue(configData)

    const result = await controller.updateConfig(configData)
    expect(result).toEqual(Result.success(configData))
  })
})

import { ConfigService as NestConfigService } from '@nestjs/config'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import * as fs from 'fs'
import { ConfigData } from '../dto/config.dto'
import { ConfigService } from '../config.service'

vi.mock('fs', () => ({
  readFileSync: vi.fn(),
  writeFileSync: vi.fn()
}))

describe('ConfigService', () => {
  let configService: ConfigService
  let nestConfigService: NestConfigService

  beforeEach(() => {
    nestConfigService = {
      get: vi.fn()
    } as any
    configService = new ConfigService(nestConfigService)
  })

  describe('getAllEnvVars', () => {
    it('should return all environment variables with correct types', () => {
      vi.spyOn(nestConfigService, 'get').mockImplementation((key) => {
        const envVars = {
          DATABASE_PATH: '/path/to/db',
          SERVER_PORT: '3000',
          ENABLE_WEB: 'true',
          ENABLE_SWAGGER: 'false',
          ENABLE_LOG: 'true',
          LOG_PATH: '/path/to/log',
          ENABLE_AUTH: 'false'
        }
        return envVars[key]
      })

      const envVars = configService.getAllEnvVars()

      expect(envVars).toEqual({
        DATABASE_PATH: '/path/to/db',
        SERVER_PORT: '3000',
        ENABLE_WEB: true,
        ENABLE_SWAGGER: false,
        ENABLE_LOG: true,
        LOG_PATH: '/path/to/log',
        ENABLE_AUTH: false
      })
    })
  })

  describe('updateEnvVars', () => {
    it('should update environment variables in the env file', async () => {
      const envFilePath = '/path/to/.env'
      vi.spyOn(nestConfigService, 'get').mockImplementation((key) => {
        if (key === 'ENV_FILE_PATH') return envFilePath
        return null
      })

      const readFileSyncMock = vi
        .spyOn(fs, 'readFileSync')
        .mockImplementation(() => 'DATABASE_PATH=/old/pathSERVER_PORT=3000')
      const writeFileSyncMock = vi
        .spyOn(fs, 'writeFileSync')
        .mockImplementation(() => {})

      const newConfigData: ConfigData = {
        DATABASE_PATH: '/new/path',
        SERVER_PORT: 4000,
        ENABLE_WEB: true,
        ENABLE_SWAGGER: false,
        ENABLE_LOG: true,
        LOG_PATH: '/new/log/path',
        ENABLE_AUTH: false
      }

      await configService.updateEnvVars(newConfigData)

      expect(readFileSyncMock).toHaveBeenCalledWith(envFilePath, 'utf8')
      expect(writeFileSyncMock).toHaveBeenCalledWith(
        envFilePath,
        expect.stringContaining(
          'DATABASE_PATH=/new/path\nSERVER_PORT=4000\nENABLE_WEB=true\nENABLE_SWAGGER=false\nENABLE_LOG=true\nLOG_PATH=/new/log/path\nENABLE_AUTH=false'
        ),
        'utf8'
      )
    })
  })
})

import { rootPath } from '@/path'
import type { ConfigService } from '@nestjs/config'
import type { TypeOrmModuleOptions } from '@nestjs/typeorm'
import * as path from 'node:path'

export const typeOrmConfig = (
  configService: ConfigService
): TypeOrmModuleOptions => {
  return {
    type: 'sqljs',
    autoSave: true,
    location: path.resolve(rootPath, configService.get('DATABASE_PATH')),
    synchronize: true,
    autoLoadEntities: true
  }
}

import type { ConfigService } from '@nestjs/config'
import type { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const typeOrmConfig = (
  configService: ConfigService
): TypeOrmModuleOptions => {
  return {
    type: 'sqljs',
    autoSave: true,
    location: configService.get('DATABASE_PATH'),
    synchronize: true,
    autoLoadEntities: true
  }
}

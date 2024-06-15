import type { TypeOrmModuleOptions } from '@nestjs/typeorm'
import type { ConfigService } from '@nestjs/config'

export const typeOrmConfig = (
  configService: ConfigService
): TypeOrmModuleOptions => {
  return {
    type: 'sqljs',
    autoSave: true,
    location: configService.get('DATABASE_PATH'), // This is the filename in the browser's IndexedDB
    synchronize: true, // Automatically sync schema with the database
    entities: [__dirname + '/**/*.entity{.ts,.js}']
  }
}

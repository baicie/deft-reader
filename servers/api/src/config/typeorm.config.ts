import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { ConfigService } from '@nestjs/config'
import { join } from 'path'

export const typeOrmConfig = (
  configService: ConfigService
): TypeOrmModuleOptions => ({
  type: 'sqljs',
  autoSave: true,
  location: configService.get('DATABASE_PATH'), // This is the filename in the browser's IndexedDB
  synchronize: true, // Automatically sync schema with the database
  entities: [__dirname + '/**/*.entity{.ts,.js}']
})

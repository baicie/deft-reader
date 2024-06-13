import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';

export const typeOrmConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'sqlite',
  database: configService.get('DATABASE_PATH'),
  entities: [join(__dirname, '..', '**', '*.entity.{ts,js}')],
  synchronize: true, // 在生产环境中请不要使用
});

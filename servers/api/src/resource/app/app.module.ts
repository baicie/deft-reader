import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { ServeStaticModule } from '@nestjs/serve-static'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CustomLoggerService } from '../../config/logger.service'
import { typeOrmConfig } from '../../config/typeorm.config'
import { staticPath } from '../../path'
import { DeftConfigModule } from '../deft-config/config.module'
import { LogsModule } from '../deft-log/logs.module'
import { UploadModule } from '../upload/upload.module'
import { UsersModule } from '../users/users.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: staticPath, // 指定前端打包后的静态文件路径
      exclude: ['/api/(.*)']
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        typeOrmConfig(configService),
      inject: [ConfigService]
    }),
    UsersModule,
    UploadModule,
    DeftConfigModule,
    LogsModule
  ],
  controllers: [AppController], // 注册你的控制器
  providers: [AppService, CustomLoggerService], // 注册你的服务
  exports: [CustomLoggerService]
})
export class AppModule {}

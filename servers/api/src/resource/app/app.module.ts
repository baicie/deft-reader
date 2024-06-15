import { join } from 'node:path'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { ServeStaticModule } from '@nestjs/serve-static'
import { typeOrmConfig } from '../../config/typeorm.config'
import { UsersModule } from '../users/users.module'
import { UploadModule } from '../upload/upload.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../static'), // 指定前端打包后的静态文件路径
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
    UploadModule
  ],
  controllers: [AppController], // 注册你的控制器
  providers: [AppService] // 注册你的服务
})
export class AppModule {}

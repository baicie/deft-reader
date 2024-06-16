import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ConfigController } from './config.controller'
import { ConfigService } from './config.service'

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [ConfigController],
  providers: [ConfigService]
})
export class DeftConfigModule {}

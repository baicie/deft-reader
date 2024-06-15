import { join, resolve } from 'node:path'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import type { NestExpressApplication } from '@nestjs/platform-express'
import { config } from 'dotenv'
import { AppModule } from './resource/app/app.module'
import { setupStaticFiles } from './config/static-files.config'
import { CustomLoggerService } from './config/logger.service'
import { setupSwagger } from './config/swagger.config'

export async function bootstrap(envFile: string = '.env') {
  const envFilePath = resolve(__dirname, envFile)
  config({ path: envFilePath })

  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  const configService = app.get(ConfigService)
  const dbPort = configService.get<number>('DATABASE_PORT') || 3000

  app.setGlobalPrefix('api')
  // has web static
  setupStaticFiles(app)
  // has upload static
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads'
  })
  // has log
  const logger = app.get(CustomLoggerService)
  // has swagger
  setupSwagger(app)
  app.useLogger(logger)

  await app.listen(dbPort)
}

import { resolve } from 'node:path'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import type { NestExpressApplication } from '@nestjs/platform-express'
import { config } from 'dotenv'
import { AppModule } from './resource/app/app.module'
import { setupStaticFiles } from './config/static-files.config'
import { CustomLoggerService } from './config/logger.service'
import { setupSwagger } from './config/swagger.config'
import { uploadPath } from './path'
import { ResponseInterceptor } from './common/response.interceptor'

export async function bootstrap(envFile: string = '.env') {
  const envFilePath = resolve(__dirname, envFile)
  config({ path: envFilePath })

  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  // app.useGlobalInterceptors(new ResponseInterceptor())

  const configService = app.get(ConfigService)
  const port = configService.get<number>('SERVER_PORT') || 3000

  app.setGlobalPrefix('api')
  // has web static
  setupStaticFiles(app)
  // has upload static
  app.useStaticAssets(uploadPath, {
    prefix: '/uploads'
  })
  // has log
  const logger = app.get(CustomLoggerService)
  // has swagger
  setupSwagger(app)
  app.useLogger(logger)

  await app.listen(port)
}

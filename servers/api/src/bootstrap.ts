import { NestFactory } from '@nestjs/core'
import { AppModule } from './resource/app/app.module'
import { NestExpressApplication } from '@nestjs/platform-express'
import { setupStaticFiles } from './static-files.config'
import { ConfigService } from '@nestjs/config'
import { join, resolve } from 'node:path'
import { config } from 'dotenv'

export async function bootstrap(envFile: string = '.env') {
  const envFilePath = resolve(__dirname, envFile)
  config({ path: envFilePath })

  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  const configService = app.get(ConfigService)
  const dbPort = configService.get<number>('DATABASE_PORT') || 3000

  app.setGlobalPrefix('api')
  // has web static
  setupStaticFiles(app)
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads'
  })
  await app.listen(dbPort)
}

import { NestFactory } from '@nestjs/core'
import { AppModule } from './resource/app/app.module'
import { NestExpressApplication } from '@nestjs/platform-express'
import { setupStaticFiles } from './static-files.config'
import { ConfigService } from '@nestjs/config'
import { resolve } from 'node:path'
import { config } from 'dotenv'

export async function bootstrap(envFile: string = '.env') {
  const envFilePath = resolve(__dirname, envFile)
  config({ path: envFilePath })

  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  const configService = app.get(ConfigService)
  const dbPort = configService.get<number>('DATABASE_PORT') || 3000
  // has web static
  setupStaticFiles(app)

  await app.listen(dbPort)
}

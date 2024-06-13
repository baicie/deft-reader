import { NestFactory } from '@nestjs/core';
import { AppModule } from './resource/app/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { setupStaticFiles } from './static-files.config';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);
  const dbPort = configService.get<number>('DATABASE_PORT') || 3000;

  setupStaticFiles(app);

  await app.listen(dbPort);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import path, { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  console.log('path', path);

  // 提供静态文件
  app.useStaticAssets(join(__dirname, '../static'), {
    index: false, // 禁用默认目录索引
    redirect: false, // 禁用从 URL 末尾 "/" 重定向到默认文件名
  });

  // 配置 SPA 路由处理：如果不是 /api 开头的请求，返回 index.html
  app.use((req, res, next) => {
    if (!req.path.startsWith('/api')) {
      res.sendFile(join(__dirname, '../static/index.html'));
    } else {
      next();
    }
  });

  await app.listen(3000);
}
bootstrap();

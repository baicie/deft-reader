import { resolve } from 'node:path'
import type { NestExpressApplication } from '@nestjs/platform-express'
import type { NextFunction, Request, Response } from 'express'
import { staticPath } from '../path'

export function setupStaticFiles(app: NestExpressApplication): void {
  app.useStaticAssets(staticPath, {
    index: false, // 禁用默认目录索引
    redirect: false // 禁用从 URL 末尾 "/" 重定向到默认文件名
  })

  // 配置 SPA 路由处理：如果不是 /api 开头的请求，返回 index.html
  app.use((req: Request, res: Response, next: NextFunction) => {
    if (!req.path.startsWith('/api')) {
      res.sendFile(resolve(staticPath, 'index.html'))
    } else {
      next()
    }
  })
}

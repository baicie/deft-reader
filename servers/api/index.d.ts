import type { IncomingMessage, ServerResponse } from 'node:http'
import type { NestExpressApplication } from '@nestjs/platform-express'

export type DeftApp = NestExpressApplication<
  Server<typeof IncomingMessage, typeof ServerResponse>
>

export function createApp(envFile: string): Promise<DeftApp>

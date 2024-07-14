import type { GlobalSetupContext } from 'vitest/node'
import type { BrowserServer } from 'playwright-chromium'
import { chromium } from 'playwright-chromium'
import { serve } from './server'
import type { DeftApp } from '@deft-reader/api'

let browserServer: BrowserServer | undefined
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let nodeServer: DeftApp | undefined

export async function setup({ provide }: GlobalSetupContext): Promise<void> {
  browserServer = await chromium.launchServer({
    headless: !process.env.VITE_DEBUG_SERVE,
    args: process.env.CI ? ['--no-sandbox', '--disable-setuid-sandbox'] : [],
  })
  nodeServer = await serve()
  nodeServer?.listen(3000)
  provide('wsEndpoint', browserServer.wsEndpoint())
}

export async function teardown(): Promise<void> {
  await browserServer?.close()
  await nodeServer?.close()
}

declare module 'vitest' {
  export interface ProvidedContext {
    wsEndpoint: string
  }
}

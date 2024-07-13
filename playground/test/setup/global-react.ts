import type { GlobalSetupContext } from 'vitest/node'
import type { BrowserServer } from 'playwright-chromium'
import { chromium } from 'playwright-chromium'
import path from 'node:path'
import fs from 'fs-extra'

let browserServer: BrowserServer | undefined

export async function setup({ provide }: GlobalSetupContext): Promise<void> {
  browserServer = await chromium.launchServer({
    headless: !process.env.VITE_DEBUG_SERVE,
    args: process.env.CI ? ['--no-sandbox', '--disable-setuid-sandbox'] : [],
  })

  provide('wsEndpoint', browserServer.wsEndpoint())
}

export async function teardown(): Promise<void> {
  await browserServer?.close()
  if (!process.env.VITE_PRESERVE_BUILD_ARTIFACTS) {
    fs.removeSync(path.resolve(__dirname, '../playground-temp'))
  }
}

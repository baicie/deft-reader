/* eslint-disable no-console */
import { cac } from 'cac'
import { fileURLToPath } from 'node:url'
import { VERSION } from './constants'
import { createServer } from './server'
const cli = cac('deft')

export const cliPath = fileURLToPath(new URL('.', import.meta.url))

export interface Options {
  config: string
  env: string
  port: number
}
cli
  .option('-c, --config <file>', `[string] use specified config file`)
  .option('-e, --env <file>', `[string] use specified env file`)
  .option('-p, --port <port>', `[number] use specified port`, {
    default: 3001,
  })

cli
  .command('[root]', 'start dev server') // default command
  .alias('start')
  .action(async (_, options: Options) => {
    try {
      await createServer(options)
    } catch (error) {
      console.error(error)
    }
  })

cli
  .command('pm2 [root]', 'start pm2')
  .action(async (_root: string, options: Options) => {
    try {
      await createServer(options, 'pm2')
    } catch (error) {
      console.error(error)
    }
  })

cli.command('config').action(() => {
  console.log(cliPath)
})

cli.help()
cli.version(VERSION)

cli.parse()

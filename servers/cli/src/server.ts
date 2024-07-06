import path from 'node:path'
import { Options, cliPath } from './index'
import fs from 'node:fs'
import { bootstrap } from '@deft-reader/api'
import pm2 from 'pm2'

export const createServer = async (
  options: Options,
  command = 'root',
): Promise<void> => {
  let envContent = ''
  const root = process.cwd()
  if (options.env) {
    envContent = fs.readFileSync(path.resolve(root, options.env), {
      encoding: 'utf-8',
    })
  } else {
    envContent = `
      DATABASE_PATH=${path.resolve(root, 'database.sqljs')}
      DATABASE_PORT=${options.port.toString()}
    `
  }
  const envFile = path.resolve(root, '.env')
  fs.writeFileSync(envFile, envContent)

  if (command === 'pm2') {
    pm2.connect((err) => {
      if (err) {
        process.exit(2)
      }
      pm2.start(
        {
          script: '../node_modules/@deft-reader/api/dist/main.js',
          cwd: cliPath,
          env: {
            NODE_ENV: 'production',
            PORT: options.port.toString(),
            ENV_FILE: envFile,
          },
        },
        (err) => {
          pm2.disconnect()
          if (err) {
            throw err
          }
        },
      )
    })
  } else {
    await bootstrap(envFile).then(() => {
      return
    })
  }
}

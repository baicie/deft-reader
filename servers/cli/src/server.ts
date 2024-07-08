/* eslint-disable no-console */
import path from 'node:path'
import { Options, cliPath } from './index'
import fs from 'node:fs'
import { bootstrap } from '@deft-reader/api'
import pm2 from 'pm2'

export const createServer = async (
  options: Options,
  command = 'root',
  root = 'start',
): Promise<void> => {
  let envContent = ''
  const pwd = process.cwd()
  if (options.env) {
    envContent = fs.readFileSync(path.resolve(pwd, options.env), {
      encoding: 'utf-8',
    })
  } else {
    envContent = `
      DATABASE_PATH=${path.resolve(pwd, 'database.sqljs')}
      DATABASE_PORT=${options.port.toString()}
    `
  }
  const envFile = path.resolve(pwd, '.env')
  fs.writeFileSync(envFile, envContent)

  if (command === 'pm2') {
    pm2.connect((err) => {
      if (err) {
        console.error(err)
        process.exit(2)
      }
      if (root === 'start') {
        pm2.start(
          {
            script: '../node_modules/@deft-reader/api/dist/main.js',
            cwd: cliPath,
            name: options.name,
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
            console.log('PM2: Server started')
          },
        )
      } else if (root === 'stop') {
        pm2.stop(options.name, (err) => {
          pm2.disconnect()
          if (err) {
            throw err
          }
          console.log('PM2: Server stopped')
        })
      } else if (root === 'restart') {
        pm2.restart(options.name, (err) => {
          pm2.disconnect()
          if (err) {
            throw err
          }
          console.log('PM2: Server restarted')
        })
      } else if (root === 'delete') {
        pm2.delete(options.name, (err) => {
          pm2.disconnect()
          if (err) {
            throw err
          }
          console.log('PM2: Server deleted')
        })
      }
    })
  } else {
    await bootstrap(envFile).then(() => {
      console.log('Server started')
    })
  }
}

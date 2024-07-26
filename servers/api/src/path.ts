import { resolve } from 'node:path'
import { normalize } from 'node:path/posix'

export const rootPath = resolve(__dirname, '..')
export const logPath = resolve(rootPath, 'logs')
export const uploadPath = resolve(rootPath, 'uploads')
export const staticPath = resolve(rootPath, 'static')
export const testEnvPath = resolve(rootPath, '.test.env')
export const envPath = '.deft.env'
export const i18nPath = resolve(rootPath, 'locales')
export const jwt = 'qwertyuiop'

export const isWindows =
  typeof process !== 'undefined' && process.platform === 'win32'
const windowsSlashRE = /\\/g
export function slash(p: string): string {
  return p.replace(windowsSlashRE, '/')
}

export function normalizePath(id: string): string {
  return normalize(isWindows ? slash(id) : id)
}

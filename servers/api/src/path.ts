import { resolve } from 'node:path'

export const rootPath = resolve(__dirname, '..')
export const logPath = resolve(rootPath, 'logs')
export const uploadPath = resolve(rootPath, 'uploads')
export const staticPath = resolve(rootPath, 'static')
export const testEnvPath = resolve(rootPath, '.test.env')
export const i18nPath = resolve(rootPath, 'src', 'locales')

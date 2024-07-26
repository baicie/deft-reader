import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export const workspaceRoot = path.resolve(__dirname, '../')
export const envFile = path.resolve(workspaceRoot, '.server.api.env')

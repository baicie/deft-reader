import path from 'node:path'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

export const workspaceRoot = path.resolve(__dirname, '../')
export const envFile = path.resolve(workspaceRoot, '.server.api.env')

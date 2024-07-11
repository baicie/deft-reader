import { createApp } from '@deft-reader/api'
import { envFile } from '../src/paths'

export async function serve() {
  try {
    return await createApp(envFile)
  } catch (error) {
    console.error(error)
  }
}

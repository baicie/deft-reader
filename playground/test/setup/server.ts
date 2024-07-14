import { envFile } from '../src/paths'
import { createApp } from '@deft-reader/api'

export async function serve() {
  try {
    return await createApp(envFile)
  } catch (error) {
    console.error('deft-reader:serve', error)
  }
}

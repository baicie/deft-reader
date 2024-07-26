import { envFile } from '../src/paths'
import { createApp } from '@deft-reader/api'

export async function serve() {
  try {
    console.log('deft-reader:serve', envFile)
    return await createApp(envFile)
  } catch (error) {
    console.error('deft-reader:serve', error)
  }
}

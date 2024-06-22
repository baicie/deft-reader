/* eslint-disable no-console */
import { bootstrap } from './bootstrap'

bootstrap().catch((err: unknown) => {
  console.error('Error during bootstrap:', err)
})

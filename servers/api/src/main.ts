/* eslint-disable no-console */
import { bootstrap } from './bootstrap'

bootstrap().catch((err) => {
  console.error('Error during bootstrap:', err)
})

/* eslint-disable no-console */
import { ConfigService } from '@nestjs/config'
import { createApp } from './app'
import { envPath } from './path'

async function bootstrap(envFile: string = envPath) {
  const app = await createApp(envFile)
  const configService = app.get(ConfigService)
  let port = configService.get<number>('SERVER_PORT') || 3000

  // eslint-disable-next-line no-constant-condition
  while (true) {
    try {
      await app.listen(port)
      console.log(`Server is running on http://localhost:${port.toString()}`)
      break
    } catch (error) {
      if (error.code === 'EADDRINUSE') {
        console.log(`Port ${port} is already in use, trying ${port + 1}`)
        port++
      } else {
        console.error('Error occurred while starting the server:', error)
        process.exit(1)
      }
    }
  }
}

bootstrap().catch((err: unknown) => {
  console.error('Error during bootstrap:', err)
})

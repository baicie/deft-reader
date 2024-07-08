import { INestApplication } from '@nestjs/common'

declare global {
  // eslint-disable-next-line no-var
  var __APP__: INestApplication
}

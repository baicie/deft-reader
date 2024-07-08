import 'reflect-metadata'
import { beforeAll } from 'vitest'
import { INestApplication } from '@nestjs/common'
import * as dotenv from 'dotenv'
import { testEnvPath } from '@/path'
import { Test, TestingModule } from '@nestjs/testing'
import { AppModule } from '@/resource/app/app.module'
import { ConfigModule } from '@nestjs/config'

export let app: INestApplication

beforeAll(async () => {
  dotenv.config({ path: testEnvPath })
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [ConfigModule.forRoot(), AppModule]
  }).compile()

  app = moduleFixture.createNestApplication()
  await app.init()
})

afterAll(async () => {
  await app.close()
})

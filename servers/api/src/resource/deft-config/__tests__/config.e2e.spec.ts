import { INestApplication } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { Test, TestingModule } from '@nestjs/testing'
import * as dotenv from 'dotenv'
import request from 'supertest'
import { DeftConfigModule } from '../config.module'
import { testEnvPath } from '@/path'

describe('DeftConfigModule (e2e)', () => {
  let app: INestApplication

  beforeAll(async () => {
    dotenv.config({ path: testEnvPath })

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot(), DeftConfigModule]
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  afterAll(async () => {
    await app.close()
  })

  it('/config (GET)', () => {
    return request(app.getHttpServer()).get('/config').expect(200).expect({
      DATABASE_PATH: 'database.test.sqljs',
      ENABLE_AUTH: true,
      ENABLE_LOG: true,
      ENABLE_SWAGGER: true,
      ENABLE_WEB: true,
      LOG_PATH: 'logs',
      SERVER_PORT: '3000'
    })
  })
})

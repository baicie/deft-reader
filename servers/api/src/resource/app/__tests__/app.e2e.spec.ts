import type { INestApplication } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import * as dotenv from 'dotenv'
import request from 'supertest'
import { testEnvPath } from '../../../path'
import { AppModule } from '../app.module'

describe('UsersController (e2e)', () => {
  let app: INestApplication

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

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!')
  })
})

import { resolve } from 'node:path'
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing'
import type { INestApplication } from '@nestjs/common'
import * as dotenv from 'dotenv'
import request from 'supertest'
import { AppModule } from '../src/resource/app/app.module'

describe('UsersController (e2e)', () => {
  let app: INestApplication

  beforeAll(async () => {
    dotenv.config({ path: resolve(__dirname, '../.env') })
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
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

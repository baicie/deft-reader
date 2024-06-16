import { INestApplication } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { Test, TestingModule } from '@nestjs/testing'
import * as dotenv from 'dotenv'
import request from 'supertest'
import { AppModule } from '../app.module'
import { testEnvPath } from '@/path'
import { DeftResponseType } from '@/common/response.type'

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

  it('/ (GET) with Accept-Language: zh', () => {
    return request(app.getHttpServer())
      .get('/')
      .set('Accept-Language', 'zh')
      .expect(200)
      .expect((response) => {
        const data: DeftResponseType<string> = response.body
        expect(data.data).toBe('你好 世界')
      })
  })

  it('/ (GET) with Accept-Language: en', () => {
    return request(app.getHttpServer())
      .get('/')
      .set('Accept-Language', 'en')
      .expect(200)
      .expect((response) => {
        const data: DeftResponseType<string> = response.body
        expect(data.data).toBe('hello world')
      })
  })
})

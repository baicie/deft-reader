import { INestApplication } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { Test, TestingModule } from '@nestjs/testing'
import { TypeOrmModule } from '@nestjs/typeorm'
import * as dotenv from 'dotenv'
import request from 'supertest'
import { typeOrmConfig } from '../../../config/typeorm.config'
import { testEnvPath } from '../../../path'
import { UsersModule } from '../users.module'

describe('UserModule (e2e)', () => {
  let app: INestApplication

  beforeAll(async () => {
    dotenv.config({ path: testEnvPath })
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          useFactory: (configService: ConfigService) =>
            typeOrmConfig(configService),
          inject: [ConfigService]
        }),
        UsersModule
      ]
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  afterAll(async () => {
    await app.close()
  })

  it('/users (GET)', () => {
    return request(app.getHttpServer()).get('/users').expect(200)
  })
})

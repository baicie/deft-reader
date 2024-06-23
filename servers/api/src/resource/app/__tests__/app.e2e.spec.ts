import { Result } from '@/common/result'
import request from 'supertest'
import { app } from '~utils'

describe('UsersController (e2e)', () => {
  it('/ (GET) with Accept-Language: zh', () => {
    return request(app.getHttpServer())
      .get('/')
      .set('Accept-Language', 'zh')
      .expect(200)
      .expect((response) => {
        const data: Result<string> = response.body
        expect(data.code).toBe(0)
        expect(data.message).toBe('Success')
        expect(data.data).toBe('你好 世界')
      })
  })

  it('/ (GET) with Accept-Language: en', () => {
    return request(app.getHttpServer())
      .get('/')
      .set('Accept-Language', 'en')
      .expect(200)
      .expect((response) => {
        const data: Result<string> = response.body
        expect(data.code).toBe(0)
        expect(data.message).toBe('Success')
        expect(data.data).toBe('hello world')
      })
  })
})

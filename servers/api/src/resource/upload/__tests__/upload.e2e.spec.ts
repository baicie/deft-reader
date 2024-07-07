import path from 'node:path'
import request from 'supertest'
import { expect } from 'vitest'
import { app } from '~utils'

describe('UploadController (e2e)', () => {
  it('/upload (POST) should upload a file', async () => {
    const filePath = path.resolve(__dirname, 'upload.demo.txt')

    try {
      const response = await request(app.getHttpServer())
        .post('/upload')
        .set('Content-Type', 'multipart/form-data')
        .attach('file', filePath)
        .expect(201)
      console.log(response.body)

      expect(response.body.code).toBe(0)
      expect(response.body.message).toBe('Success')
      expect(response.body.data).toMatch(/^\d+-\d+\.txt$/)
    } catch (error) {
      console.error('Error during file upload:', error)
      throw error
    }
  })

  it('/upload (GET) should get all files', async () => {
    const response = await request(app.getHttpServer())
      .get('/upload')
      .expect(200)

    expect(response.body.code).toBe(0)
    expect(response.body.message).toBe('Success')
    expect(Array.isArray(response.body.data)).toBe(true)
    expect(response.body.data.length).toBeGreaterThan(0)
  })
})

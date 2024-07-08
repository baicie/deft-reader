import { setupServer } from 'msw/node'
import { http } from 'msw'

export const server = setupServer(
  http.post('/api/upload', ({ request, params, cookies }) => {
    return res(ctx.status(200), ctx.json({ status: 'done' }))
  }),
  http.get('/api/files', ({ request, params, cookies }) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          bookName: 'Book 1',
          size: '1MB',
          uploadedAt: '2023-01-01',
          updateTime: '2023-01-02',
        },
        {
          id: 2,
          bookName: 'Book 2',
          size: '2MB',
          uploadedAt: '2023-01-03',
          updateTime: '2023-01-04',
        },
      ]),
    )
  }),
)

import { Suspense, lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Layout from '../layout'

const Demo = lazy(() => import('../view/demo/demo-container'))
const Loading = () => <div>Loading...</div>

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    errorElement: <div>error</div>,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/demo',
        element: (
          <Suspense fallback={<Loading />}>
            <Demo />
          </Suspense>
        ),
      },
    ],
  },
]

const router = createBrowserRouter(routes)

export default router

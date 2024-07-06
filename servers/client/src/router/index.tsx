import type { LazyExoticComponent } from 'react'
import { Suspense, lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout'

const Books = lazy(() => import('../view/books/books-container'))
const Config = lazy(() => import('../view/config/config-container'))
const Log = lazy(() => import('../view/log-page/log-container'))

const Loading = () => <div>Loading...</div>

const warpCom = (
  Com: LazyExoticComponent<
    (() => JSX.Element) & {
      displayName: string
    }
  >,
) => {
  return (
    <Suspense fallback={<Loading />}>
      <Com />
    </Suspense>
  )
}

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    errorElement: <div>error</div>,
    children: [
      {
        path: '/',
        element: warpCom(Books),
      },
      {
        path: '/config',
        element: warpCom(Config),
      },
      {
        path: '/log',
        element: warpCom(Log),
      },
    ],
  },
]

const router = createBrowserRouter(routes)

export default router

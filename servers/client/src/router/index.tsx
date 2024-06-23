import type { LazyExoticComponent } from 'react'
import { Suspense, lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout'

const Books = lazy(() => import('../view/books/books-container'))
const Demo = lazy(() => import('../view/demo/demo-container'))
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
        path: '/demo',
        element: warpCom(Demo),
      },
    ],
  },
]

const router = createBrowserRouter(routes)

export default router

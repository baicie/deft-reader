import { lazy } from 'react'
import { RouteObject, createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Layout from '../layout'

const Demo = lazy(() => import('../view/demo/demo-container'))

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
        element: <Demo />,
      },
    ],
  },
]

const router = createBrowserRouter(routes)

export default router

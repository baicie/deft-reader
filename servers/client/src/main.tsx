import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import 'reflect-metadata'
import { registerGlobalModules } from './di.ts'
import './index.css'
import './locales'
import router from './router'

registerGlobalModules()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<div>loading</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
)

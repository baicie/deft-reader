import ReactDOM from 'react-dom/client'
import 'reflect-metadata'
import App from './App.tsx'
import { registerGlobalModules } from './di.ts'
import './index.css'
import './locales'

registerGlobalModules()
ReactDOM.createRoot(document.getElementById('root')!).render(<App />)

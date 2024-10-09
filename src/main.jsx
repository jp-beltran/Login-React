import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Header} from './components/Header'
import {Login} from './components/Login'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Login/>
  </StrictMode>,
)
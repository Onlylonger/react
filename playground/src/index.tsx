import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import '../../src/components/theme/theme.css'
import './style.css'

createRoot(document.querySelector('#app')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

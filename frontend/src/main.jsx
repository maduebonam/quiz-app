import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // Remove StrictMode to test if it resolves the issue
 // <StrictMode>
    <App />
 // </StrictMode>,
)

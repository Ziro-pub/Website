import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

const container = document.getElementById('root')
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// Use hydrate for prerendered content, otherwise use render
if (container.hasChildNodes()) {
  hydrateRoot(container, app, {
    onRecoverableError: (error) => {
      // Suppress hydration mismatch errors from framer-motion animations
      // These are expected since prerendered HTML captures mid-animation state
      if (error.message?.includes('Hydration') || error.message?.includes('hydrat')) {
        return
      }
      console.error(error)
    },
  })
} else {
  createRoot(container).render(app)
}

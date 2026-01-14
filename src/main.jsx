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
    onRecoverableError: () => {
      // Suppress all hydration errors - expected due to framer-motion animations
      // Prerendered HTML captures mid-animation state which doesn't match client
    },
  })
} else {
  createRoot(container).render(app)
}

// src/main.jsx (diagnostic — shows runtime errors on-screen)
import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import App from './App'
import './index.css'

console.log('main.jsx: starting app mount...')

// Simple Error Boundary to show runtime errors on the page
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo)
    this.setState({ error, errorInfo })
  }

  render() {
    const { error, errorInfo } = this.state
    if (error) {
      return (
        <div style={{
          minHeight: '100vh',
          padding: 24,
          background: 'linear-gradient(180deg,#05021a,#0b1224)',
          color: '#ffdca8',
          fontFamily: 'system-ui, sans-serif'
        }}>
          <h1 style={{ color: '#ff8fb3' }}>App Error — check console & message below</h1>
          <pre style={{
            whiteSpace: 'pre-wrap',
            marginTop: 12,
            background: 'rgba(0,0,0,0.3)',
            padding: 12,
            borderRadius: 8,
            color: '#fff'
          }}>
            {String(error && (error.message || error))}
            {errorInfo ? '\n\n' + (errorInfo.componentStack || '') : ''}
          </pre>
          <div style={{ marginTop: 12, color: '#ffdca8' }}>
            Tip: paste the error text here so I can fix the exact line.
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

const container = document.getElementById('root')
if (!container) {
  const msg = 'Root element not found — ensure index.html contains <div id="root"></div>'
  console.error(msg)
  // render a helpful message
  document.body.innerHTML = `<div style="padding:24px;color:#ffdca8;background:#071023;min-height:100vh">
    <h1 style="color:#ff8fb3">Mount failed</h1>
    <p>${msg}</p>
    <p>Open the console for more info.</p>
  </div>`
  throw new Error(msg)
}

const root = createRoot(container)

try {
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <HashRouter>
          <AnimatePresence mode="wait" initial={false}>
            <App />
          </AnimatePresence>
        </HashRouter>
      </ErrorBoundary>
    </React.StrictMode>
  )
  console.log('main.jsx: app mounted successfully')
} catch (err) {
  console.error('main.jsx: render failed', err)
  document.body.innerHTML = `<pre style="color:#ffdca8;background:#071023;padding:24px;min-height:100vh">${String(err)}</pre>`
}

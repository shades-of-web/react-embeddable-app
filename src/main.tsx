import 'styles/index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const appContainer = document.querySelector(
  '.react-embeddable-app'
) as HTMLDivElement

ReactDOM.createRoot(appContainer).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

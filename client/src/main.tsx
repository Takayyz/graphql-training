import React from 'react'
import ReactDOM from 'react-dom/client'
import { createClient, fetchExchange, Provider } from 'urql'
import App from './App.tsx'
import './index.css'

const client = createClient({
  url: import.meta.env.VITE_API_URL || 'http://localhost:4000/graphql',
  exchanges: [
    fetchExchange,
  ],
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>,
)

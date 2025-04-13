import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CloudinaryProvider } from './utils/CloudinaryContext.jsx'
import { SearchProvider } from './utils/SearchContext.jsx'

createRoot(document.getElementById('root')).render(
  <SearchProvider>
    <CloudinaryProvider>
    <App />
  </CloudinaryProvider>,
  </SearchProvider>
)

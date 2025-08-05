import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fontsource/poppins/400.css'; // normal weight
import '@fontsource/poppins/500.css'; // medium
import '@fontsource/poppins/600.css'; // semi-bold
import '@fontsource/poppins/700.css'; // bold

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

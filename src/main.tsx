import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Index from './admin/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Index/>
  </StrictMode>,
)

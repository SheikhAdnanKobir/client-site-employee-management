import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'flowbite';
import Router from './Router/Router.jsx';
import AuthContext from './Component/AuthContext/AuthContext.jsx';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <RouterProvider router={Router} />
    </AuthContext>
  </StrictMode>,
)

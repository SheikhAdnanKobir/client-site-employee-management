import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'flowbite';
import Router from './Router/Router.jsx';
import AuthContext from './Component/AuthContext/AuthContext.jsx';
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import 'flowbite';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Router} />
      </QueryClientProvider>
    </AuthContext>
  </StrictMode>,
)

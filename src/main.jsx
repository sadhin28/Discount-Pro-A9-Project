import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from '../src/Routes/router'
import {

  RouterProvider,
} from "react-router-dom";
import AuthProvider from './provider/AuthProvider';
import { ToastContainer } from 'react-toastify';





createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

    <ToastContainer  theme='colored' position='top-center'/>
  </StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { RouterProvider} from "react-router-dom";
import "./index.scss";
import router from './Routes/router';
import AuthProvider from './Providers/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)

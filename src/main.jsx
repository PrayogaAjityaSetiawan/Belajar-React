import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import LoginPage from './Pages/login.jsx'
import RegisterPage from './Pages/register.jsx'
import ErrorPage from './Pages/404.jsx'
import ProductPage from './Pages/products.jsx'
import DetilProductPage from './Pages/detilProduct.jsx'


// Contoh Pengaplikasian React Router
const router = createBrowserRouter([
  {
    path: "/",
    errorElement : <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element: <RegisterPage/>
  },
  {
    path: "/products",
    element: <ProductPage/>
  },
  {
    path: "/products/:id",
    element: <DetilProductPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

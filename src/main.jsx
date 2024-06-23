import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import LoginPage from './Pages/login.jsx'
import RegisterPage from './Pages/register.jsx'
import ErrorPage from './Pages/404.jsx'
import ProductPage from './Pages/products.jsx'
import DetilProductPage from './Pages/detilProduct.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'


// Contoh Pengaplikasian React Router
const router = createBrowserRouter([
  {
    path: "/error",
    errorElement : <ErrorPage />
  },
  {
    path: "/",
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import App from './App'
import Fib from './Fib'
import './index.css'
import OtherPage from './OtherPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Fib />,
  },
  {
    path: '/other',
    element: <OtherPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <RouterProvider /> */}
    {/* <App /> */}
  </React.StrictMode>
)

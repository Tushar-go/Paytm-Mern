import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Dashboard, SendMoney, Signin, Signup } from './pages/index.js'

let router = createBrowserRouter([
  {
    path:"/",
    element:<Signup />,
    children:[
      {
        path:"/signup",
        element:<Signup />
      },
      {
        path:"/signin",
        element:<Signin />
      },
      {
        path:"/dashboard",
        element:<Dashboard />
      },
      {
        path:"/send",
        element:<SendMoney />
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

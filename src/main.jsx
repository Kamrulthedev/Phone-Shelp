import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import MyReactReouter from './Reouts/Reout'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={MyReactReouter}></RouterProvider>
  </React.StrictMode>,
)

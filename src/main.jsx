import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from './Componenets/Login.jsx'
import SignUp from './Componenets/SignUp.jsx'
import ConfirmEmail from './Componenets/ConfirmEmail.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path ="/" element={<App />} />,
    <Route path="/login" element={<Login />} />,
    <Route path="/signup" element={<SignUp />} />,
    <Route path="/emailconfirmation" element={<ConfirmEmail />} />,


  </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

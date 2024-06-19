import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from './Components/Login.jsx'
import SignUp from './Components/SignUp.jsx'
import ConfirmEmail from './Components/ConfirmEmail.jsx'
import ProfessionalDetails from './Components/ProfessionalDetails.jsx'
import BankDetails from './Components/BankDetails.jsx'
import UploadDocuments from './Components/UploadDocuments.jsx'
import Services from './Components/Services.jsx'
import Profile from './Components/Profile.jsx'
import Logout from './Components/Logout.jsx'
import Layout from './Layout.jsx'
import Dashboard from './Components/Dashboard.jsx'
import ServiceForm from './Components/ServiceForm.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path ="/" element={<App />} />,
    <Route path="/login" element={<Login />} />,
    <Route path="/signup" element={<SignUp />} />,
    <Route path="/emailconfirmation" element={<ConfirmEmail />} />,
    <Route path="/professionaldetails" element={<ProfessionalDetails />} />,
    <Route path="/bankdetails" element={<BankDetails />} />,
    <Route path="/documentupload" element={<UploadDocuments />} />,
    <Route path='/app' element={<Layout />}>
      <Route path="/app" element={<Dashboard />} />
      <Route path="/app/services" element={<Services />} />
      <Route path="/app/serviceform" element={<ServiceForm />} />
      <Route path="/app/profile" element={<Profile />} />
      <Route path="/app/logout" element={<Logout />} />
     </Route>


  </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

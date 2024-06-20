import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from './Advisor-Components/Login.jsx'
import SignUp from './Advisor-Components/SignUp.jsx'
import ConfirmEmail from './Advisor-Components/ConfirmEmail.jsx'
import ProfessionalDetails from './Advisor-Components/ProfessionalDetails.jsx'
import BankDetails from './Advisor-Components/BankDetails.jsx'
import UploadDocuments from './Advisor-Components/UploadDocuments.jsx'
import Services from './Advisor-Components/Services.jsx'
import Profile from './Advisor-Components/Profile.jsx'
import Logout from './Advisor-Components/Logout.jsx'
import Layout from './Layout.jsx'
import Dashboard from './Advisor-Components/Dashboard.jsx'
import ServiceForm from './Advisor-Components/ServiceForm.jsx'
import UserLandingPage from './User-Components/UserLandingPage.jsx'
import UserLayout from './UserLayout.jsx'
import UserCategory from './User-Components/UserCategory.jsx'
import AdviserProfile from './User-Components/AdviserProfile.jsx'


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
     </Route>,


     <Route path="/user" element={<UserLayout />} >
            <Route path="/user" element={<UserLandingPage />} />
            <Route path="/user/category" element={<UserCategory />} />
            <Route path="/user/advisorprofile" element={<AdviserProfile />} />

     </Route>


  </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

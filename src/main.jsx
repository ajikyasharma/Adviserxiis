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
import UserAdviserProfile from './User-Components/UserAdvisorProfile.jsx'
import UserCheckoutPage from './User-Components/UserCheckoutPage.jsx'
import UserSignUp from './User-Components/UserSignUp.jsx'
import UserLogin from './User-Components/UserLogin.jsx'
import VideoCall from './Advisor-Components/VideoCall.jsx'
import { MeetingRoom } from '@mui/icons-material'
import Room from './Advisor-Components/Room.jsx'


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
            <Route path="/user/advisorprofile" element={<UserAdviserProfile />} />
            <Route path="/user/checkout" element={<UserCheckoutPage />} />
            <Route path="/user/signup" element={<UserSignUp />} />
            <Route path="/user/login" element={<UserLogin />} />
     </Route>


     <Route path="/videocall" element={<VideoCall />} />,
     <Route path="/room/:meetingid" element={<Room />} />,


  </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

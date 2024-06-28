import React, { useEffect, useState } from 'react'
import insta from '../user-assets/insta.png'
import fb from '../user-assets/fb.png'
import twitter from '../user-assets/twitter.png'
import profile from '../assets/profile.png'
import backicon from '../user-assets/backicon.png';
import { useNavigate, useParams } from 'react-router-dom'
import { child, get, getDatabase, ref, set } from "firebase/database";
import { app } from "../firebase";
import { CircularProgress } from '@mui/material'
import User from '../assets/User.png'

function UserAdviserProfile() {

  const database = getDatabase(app);
  const { adviserid } = useParams()
  const naviagte = useNavigate()


  const [adviser, setAdviser] = useState(null)
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  

  async function getUser(userId) {
    const nodeRef = ref(database, `advisers/${userId}`);
    try {
      const snapshot = await get(nodeRef);
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log('No data available');
        return null;
      }
    } catch (error) {
      console.error('Error fetching node details:', error);
      return null;
    }
  }


  async function getServiceDetails(serviceIds) {
    const serviceDetails = [];
  
    for (const serviceId of serviceIds) {
      const serviceRef = ref(database, `advisers_service/${serviceId}`);
      try {
        const snapshot = await get(serviceRef);
        if (snapshot.exists()) {
          serviceDetails.push({data:snapshot.val(),id:snapshot.key});
        } else {
          console.log(`No data available for service ID: ${serviceId}`);
        }
      } catch (error) {
        console.error(`Error fetching service details for service ID: ${serviceId}`, error);
      }
    }
  
    return serviceDetails;
  }

  useEffect(()=>{
    getUser(adviserid).then((adviserData) => {
      setAdviser(adviserData)
      getServiceDetails(adviserData.services).then((servicesData) => {
        setServices(servicesData)
      });
      setLoading(false); // Update loading state after fetching the user data
    });

  },[])


  if (loading) {
    return <div className='h-screen flex justify-center items-center'><CircularProgress  /></div>; // Show a loading message or spinner while fetching data
  }


  return (
    <div className="container mx-auto px-4 font-inter pt-[80px]">
    <div className='min-h-screen'>
    <div className="flex  items-center my-8 ">

        <div className='md:mx-[100px] hidden md:block'>
        <button className="bg-[#489CFF] text-white py-2 px-4 rounded-full cursor-pointer" onClick={()=> naviagte('/category')} >
        <img 
          src={backicon}
          alt=""
          className='h-8 w-4 rounded-full '
          />
      </button>
        </div>

      <div className='flex items-center'>
      <div className="  w-2/6 md:w-1/6 mr-[30px] md:mr-[50px] ">
      <img
            src={adviser && adviser.profile_photo ? adviser.profile_photo : User}
            alt=""
            className="h-32 w-32 rounded-full"
          />
      </div>
      <div className='w-4/6 md:w-5/6'>
      <h1 className="text-2xl font-semibold">{adviser.username}</h1>
      <p className="text-gray-500">{adviser.professional_bio
      }</p>
      </div>
      </div>
    </div>
    <div className=" md:ml-[250px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">{service.data.service_name}</h2>
          <p className="text-gray-500 mb-4">{service.data.about_service}</p>
          <p className="text-lg font-bold mb-4">Rs {service.data.price}/-</p>
          <button className="bg-gradient-to-b from-[#0165E1] to-[#17A9FD] text-white py-2 px-4 rounded cursor-pointer " onClick={()=>naviagte(`/category/${adviserid}/checkout/${service.id}`)}>Book</button>
        </div>
      ))}
    </div>
    {/* <div className="flex justify-center my-8">
      <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
        &larr;
      </button>
    </div> */}
    </div>
    <footer className="bg-white py-4">
      <div className="container mx-auto px-4 text-center my-[20px]">
        <div className="flex justify-between space-x-4 mb-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Privacy</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Terms</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Help</a>
        </div>
        <div className="flex justify-center space-x-4 md:space-x-8">
          <a href="#" >
          <img
            src={insta}
            alt=""
            className="h-8 w-8"
          />
          </a>
          <a href="#" >
          <img
            src={fb}
            alt=""
            className="h-8 w-8"
          />
          </a>
          <a href="#" >
          <img
            src={twitter}
            alt=""
            className="h-8 w-8"
          />
          </a>
        </div>
      </div>
    </footer>
 
  </div>
  )
}

export default UserAdviserProfile
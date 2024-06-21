import React from 'react'
import insta from '../user-assets/insta.png'
import fb from '../user-assets/fb.png'
import twitter from '../user-assets/twitter.png'
import profile from '../assets/profile.png'
import backicon from '../user-assets/backicon.png';

function UserCheckoutPage() {
  return (
    <div className="container mx-auto px-4 font-inter">
    <div className='min-h-screen'>
    <div className="flex  items-center my-8 ">

        <div className='md:mx-[100px] hidden md:block'>
        <button className="bg-[#489CFF] text-white py-2 px-4 rounded-full ">
        <img 
          src={backicon}
          alt=""
          className='h-8 w-4 rounded-full'
          />
      </button>
        </div>

      <div className='flex items-center'>
      <div className="mr-[30px] md:mr-[50px] ">
      <img
            src={profile}
            alt=""
            className="h-32 w-32 rounded-full"
          />
      </div>
      <div>
      <h1 className="text-2xl font-semibold">Utkarsh Pandey</h1>
      <p className="text-gray-500">Talent Acquisition Specialist at JindalX || Tech Mahindra || TCS</p>
      </div>
      </div>
    </div>

<div className='md:ml-[250px] flex flex-col md:flex-row'>   
       <div className='w-full md:w-1/5 md:mr-[30px]'>
       <h2 className="text-xl font-semibold mb-2">Service Description</h2>
       <p className="text-gray-500">Talent Acquisition Specialist at JindalX || Tech Mahindra || TCS</p>
       </div>

    <div className="w-full mt-[20px] md:mt-[0px] md:w-2/5 bg-gray-100 p-6 rounded-lg shadow-md">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Service</label>
              <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-12 p-2" value="CV Review" readOnly />
            </div>
            <div>
              <label className="block text-gray-700">Whatsapp number</label>
              <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-12 p-2"   placeholder='+91 8287282020'/>
              <small className="text-gray-500">Will update you the booking details on this number</small>
            </div>
            <div>
              <label className="block text-gray-700">Schedule date</label>
              <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-12 p-2"  placeholder='2024-08-10' />
            </div>
            <div>
              <label className="block text-gray-700">Select Time</label>
              <input type="time" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-12 p-2"  placeholder="09:00" />
            </div>
            <div>
              <label className="block text-gray-700">Price</label>
              <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-12 p-2" value="499" readOnly />
            </div>
            <button type="submit" className="bg-[#489CFF] text-white py-2 px-4 rounded  h-12 p-2">Book</button>
          </form>
        </div>
        </div>
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

export default UserCheckoutPage
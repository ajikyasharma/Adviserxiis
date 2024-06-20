import React from 'react'
import { useNavigate } from 'react-router-dom'

function Services() {
  const navigate= useNavigate()
  return (
    <div className="flex flex-col p-6 space-y-6">

    <div className="flex justify-between items-center">
    <p className='font-Poppins text-xl sm:text-3xl font-bold s my-2'>Services</p>
      <button className="bg-[#489CFF] text-white rounded-md py-2 px-4" onClick={()=> navigate('/app/serviceform')}>Create New Service</button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
      <div className="bg-gray-100 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold font-Poppins">CV Review</h2>
        <p className="mt-2 text-gray-700 font-Poppins">Talent Acquisition Specialist at JindalX || Tech Mahindra || TCS</p>
        <p className="mt-4 font-bold font-Poppins">Duration : 1 Hour Rs 499/-</p>
        <button className="mt-4 bg-[#489CFF] text-white rounded-md py-2 px-4 font-Poppins">Edit</button>
      </div>
      <div className="bg-gray-100 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold font-Poppins">CV Review</h2>
        <p className="mt-2 text-gray-700 font-Poppins">Talent Acquisition Specialist at JindalX || Tech Mahindra || TCS</p>
        <p className="mt-4 font-bold font-Poppins">Duration : 1 Hour Rs 499/-</p>
        <button className="mt-4 bg-[#489CFF] text-white rounded-md py-2 px-4 font-Poppins">Edit</button>
      </div>
      <div className="bg-gray-100 p-6 rounded-xl shadow-md font-Poppins">
        <h2 className="text-xl font-bold font-Poppins">CV Review</h2>
        <p className="mt-2 text-gray-700 font-Poppins">Talent Acquisition Specialist at JindalX || Tech Mahindra || TCS</p>
        <p className="mt-4 font-bold font-Poppins">Duration : 1 Hour Rs 499/-</p>
        <button className="mt-4 bg-[#489CFF] text-white rounded-md py-2 px-4 font-Poppins">Edit</button>
      </div>
    </div>
  </div>
  )
}

export default Services
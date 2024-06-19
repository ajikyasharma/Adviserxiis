import React from 'react'
import background2 from '../assets/background2.png'
import image3 from '../assets/image3.png'
import logo from '../assets/logo.png'
import image4 from '../assets/image4.png'
import { Autocomplete, Button, Checkbox, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'



function BankDetails() {
  const navigate = useNavigate()
  return (
    <div className='min-h-screen flex flex-col  sm:flex-row-reverse'>
      <div className=' w-full sm:w-3/6 bg-cover flex justify-center items-center ' style={{ backgroundImage: `url(${background2})` }} >
        <img className="object-contain h-auto max-w-full" style={{ paddingTop: "80px" }} src={image4} alt="" />
      </div>
      <div className='min-h-screen w-full sm:w-3/6 flex flex-col items-center'>
        <div className='flex items-center justify-center' style={{ marginTop: "70px" }}>
          <img className="object-cover" src={logo} alt="" />
        </div>

        <div className="relative z-10 w-full max-w-md p-8 ">
        <p className='font-workSans text-md mt-4  text-[#489CFF]' style={{marginTop:"50px", marginBottom:"20px"}}>BANK DETAILS
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-workSans">Bank Name:</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md font-workSans"
              placeholder="RBI"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-workSans">Account Holder Name:</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md font-workSans"
              placeholder="Amit Kumar"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-workSans">Account Number:</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md font-workSans"
              placeholder="C9876543"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-workSans">IFSC Code:</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md font-workSans"
              placeholder="RBI23141"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-workSans">Branch Name:</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md font-workSans"
              placeholder="Khalid Bin Waleed Road, Al Hamriya, Bur Dubai"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 h-[50px] font-workSans"
            onClick={()=> navigate('/documentupload')}
          >
            Next
          </button>
        </form>
      </div>
      </div>

    </div>
  )
}

export default BankDetails
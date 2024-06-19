import React from 'react'
import background2 from '../assets/background2.png'
import image3 from '../assets/image3.png'
import logo from '../assets/logo.png'
import background3 from '../assets/background3.png'
import { Autocomplete, Button, Checkbox, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'



function ProfessionalDetails() {
 const navigate = useNavigate()

  return (
    <div className='min-h-screen flex flex-col sm:flex-row'>
      <div
        className="absolute top-0 right-0 w-full h-full bg-no-repeat bg-right-top"
        style={{ backgroundImage: `url(${background3})`, backgroundSize: '60% auto' }}
      ></div>
      <div className='min-h-screen w-full sm:w-3/6 flex flex-col items-center  mt-[150px] sm:mt-[80px]'>
        <div className='flex items-center justify-center' >
          <img className="object-cover" src={logo} alt="" />
        </div>

        <div className="relative z-10 w-full max-w-md p-8  ">
        {/* <h2 className="text-2xl font-bold mb-6 text-center">PROFESSIONAL INFORMATION</h2> */}
        <p className='font-workSans text-md mt-4  text-[#489CFF]' style={{marginTop:"50px", marginBottom:"20px"}}>PROFESSIONAL INFORMATION
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-workSans">Professional Title:</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md font-workSans"
              placeholder="Sr. UI & UX Designer"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-workSans">Year of Experience:</label>
            <input
              type="number"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md font-workSans"
              placeholder="5"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-workSans">Education:</label>
            <select className="w-full mt-1 p-2 border border-gray-300 rounded-md font-workSans">
              <option>Graduate</option>
              {/* Add other options here */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-workSans">Industry:</label>
            <select className="w-full mt-1 p-2 border border-gray-300 rounded-md font-workSans">
              <option>IT</option>
              {/* Add other options here */}
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-workSans">Professional BIO:</label>
            <textarea
              className="w-full mt-1 p-2 border border-gray-300 rounded-md font-workSans"
              placeholder="This will be displayed everywhere"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-workSans h-[50px]"
            onClick={()=> navigate('/bankdetails')}
          >
            Next
          </button>
        </form>
      </div>
      </div>

    </div>
  )
}

export default ProfessionalDetails;
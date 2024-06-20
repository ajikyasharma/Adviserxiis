import React, { useState } from 'react'
import profile from '../assets/profile.png'

function Profile() {
  const [name, setName] = useState('')
  const [professionalBio, setProfessionalBio] = useState('')
  return (
    <div className="flex flex-col p-6 space-y-6">
    <p className='font-Poppins text-xl sm:text-3xl font-bold s my-2'>Profile</p>

    <div className="flex items-center space-x-4 w-full my-4">
        <img 
          src={profile} 
          alt="" 
          className="rounded-full w-32 h-32"
        />
        <div>
          <p className="text-lg font-medium font-Poppins">Edit Profile Image</p>
        </div>
      </div>
    <form className="bg-[#D9D9D942] p-6 rounded-xl shadow-md space-y-6 sm:w-3/6 pb-[200px] sm:pb-[300px] ">
      <div>
        <label className="block text-sm font-bold text-gray-700 font-Poppins">Name</label>
        <input
          type="text"
          value={name}
          placeholder='Utkarsh Pandey'
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full h-12 p-2 rounded-md border-gray-300  font-Poppinsshadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label className="block text-sm font-bold text-gray-700 font-Poppins">Professional BIO </label>
        <textarea
          value={professionalBio}
          placeholder=''
          onChange={(e) => setProfessionalBio(e.target.value)}
          className="mt-1 block w-full h-12 p-2 rounded-md border-gray-300 shadow-sm font-Poppins focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          rows="3"
        />
      </div>
 
      <div className="flex space-x-4">
        <button className="bg-[#489CFF] text-white rounded-md py-2 px-4">Publish</button>
      </div>
    </form>
  </div>
  )
}

export default Profile
import React from 'react'
import insta from '../user-assets/insta.png'
import fb from '../user-assets/fb.png'
import twitter from '../user-assets/twitter.png'
import profile from '../assets/profile.png'

function AdviserProfile() {
  return (
    <div className="container mx-auto px-4 ">
    <div className='min-h-screen'>
    <div className="flex  items-center my-8 ">
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">CV Review</h2>
          <p className="text-gray-500 mb-4">Talent Acquisition Specialist at JindalX || Tech Mahindra || TCS</p>
          <p className="text-lg font-bold mb-4">Rs 499/-</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Book</button>
        </div>
      ))}
    </div>
    <div className="flex justify-center my-8">
      <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
        &larr;
      </button>
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

export default AdviserProfile
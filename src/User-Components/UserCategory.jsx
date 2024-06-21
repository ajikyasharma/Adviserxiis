import { Rating } from '@mui/material'
import React from 'react'
import insta from '../user-assets/insta.png'
import fb from '../user-assets/fb.png'
import twitter from '../user-assets/twitter.png'
import checkicon from '../user-assets/checkicon.png'

const Categories= ["Career", "Business", "Health", "Technology", "Education", "Legal", "Marketing"]

function UserCategory() {
  return (
    <div className="min-h-screen flex flex-col font-inter">

    <div className="flex-grow bg-gray-50 py-8">
      <section className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Categories</h1>
        <div className="flex flex-wrap space-x-2 md:space-x-8 space-y-1 mb-6">
          {Categories.map((category) => (
            <button key={category} className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">
              {category}
            </button>
          ))}
        </div>
        <div className="relative mb-8  md:w-3/6 ">
          <input
            type="text"
            className="w-full p-3 h-16 rounded-lg shadow text-black"
            placeholder="Search consultant"
          />
          <button className="absolute right-0 top-0 mt-2 mr-2 bg-[#1C91F2] text-white px-4 p-3 rounded-lg">
            Search
          </button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className="bg-white rounded-lg shadow p-4 flex ">
          <div className=' flex flex-col justify-center items-center'>
          <img
            src="https://via.placeholder.com/50"
            alt="Consultant"
            className="rounded-full h-24 w-24"
          />
          <div>
          <Rating name="read-only" value={5} readOnly />
          </div>
          <p className='text-center text-sm'>English, Hindi</p>
          <p className='text-center text-sm'>₹ 5/min</p>
          </div>
          <div className="ml-4 mt-[10px] ">
            <div>
            <h2 className="text-2xl font-bold mt-[10px] mb-[8px]">Utkarsh Pandey</h2>
            {/* <img 
          src={checkicon}
          alt=""
          className='h-8 w-8 rounded-full mt-[8px] bg-[#117D00]'
          /> */}
            </div>
            
            <div className='flex justify-between' >
            <p className="text-md ">Business Consultant</p>
            <p className="text-md">Exp: 5 years</p>
            </div>

            <p >Founder : P&C, Ex Mckinskey, consulted more than 100 members</p>
          </div>
        </div>
        </div>

      </section>
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

export default UserCategory
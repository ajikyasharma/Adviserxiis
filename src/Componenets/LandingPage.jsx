import React from 'react';
import background from '../assets/background.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import logo2 from '../assets/logo2.png';
import logo from '../assets/logo.png'
import Navbar from './Navbar';

function LandingPage() {
  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${background})` }}>
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="flex flex-row justify-center">
          <div className="flex flex-col items-center justify-center p-4 w-2/5">
            <div>
              <p className='font-Poppins text-xl sm:text-5xl font-bold sm:leading-normal my-2'>
                Start your <br />
                Side hustle <br />
                today
              </p>
              <p className='font-Poppins text-md sm:text-lg '>
                Join our Army of 1000+ <br />
                Advisers
              </p>
              <button className='bg-[#489CFF] text-white px-1 py-1 sm:px-4 sm:py-2 rounded-md cursor-pointer font-Poppins my-3'>Create My Page</button>
            </div>
          </div>
          <div className=" w-3/5 flex items-center justify-center">
            <img className="object-contain h-auto max-w-full" src={image1} alt="" />
          </div>
        </div>

        <div className='flex flex-row justify-center my-4'>
          <div className='  h-full w-3/6 flex justify-center items-center'>
            <div>
              <p className='font-LondrinaOutline text-3xl sm:text-5xl font-medium my-2 '>Advisers<br />
                Onboarded</p>
              <p className='font-Poppins text-3xl sm:text-5xl font-bold mt-4'>1200+</p>
            </div>
          </div>
          <div className='  h-full w-3/6 flex justify-center items-center'>
            <div>
              <p className='font-LondrinaOutline text-xl sm:text-5xl font-medium my-2 '>Adviser<br />
                Earning</p>
              <p className='font-Poppins text-xl sm:text-5xl font-bold mt-4'>1 Lakh +</p>
            </div>
          </div>
        </div>


        <div style={{ marginTop: "120px", marginLeft: "40px" }}>
          <p className='font-Poppins text-2xl sm:text-5xl font-bold  my-2'>Benefits to Join Adviserxiis</p>
        </div>

        <div className='flex flex-col sm:flex-row ' style={{ marginTop: "50px" }}>
          <div className='h-full w-full sm:w-2/5 flex flex-col justify-center items-center'>
            <div className='bg-gradient-to-b from-[#0165E1] to-[#17A9FD] text-white font-Poppins w-64 h-12 p-3 rounded-lg my-2'>
              Personal Profile
            </div>
            <div className='bg-white font-Poppins w-64 h-12 p-3 rounded-lg my-2'>
              Unlimited Earning
            </div>
            <div className='bg-white font-Poppins w-64 h-12 p-3 rounded-lg my-2'>
              Unlimited Services
            </div>
            <div className='bg-white font-Poppins w-64 h-12 p-3 rounded-lg my-2'>
              Unlimited Audience
            </div>
            <div className='bg-white font-Poppins w-64 h-12 p-3 rounded-lg my-2'>
              Easy to Use
            </div>
          </div>
          <div className=' w-full sm:w-3/5 h-full flex justify-center items-center'>
            <img className="object-cover h-96" src={image2} alt="" />
          </div>
        </div>
      </div>

      <div style={{ marginTop: "50px", height: "300px" }} className='bg-gradient-to-r from-[#000000E5] to-[#489CFFE5] flex justify-center items-center'>
        <div>
          <p className='font-Poppins text-xl sm:text-5xl text-white font-bold sm:leading-normal my-2'>
            Don’t Miss out the chance of becoming <span className='text-black text-center'>TOP 1 %</span>
          </p>
          <div className='flex justify-center'>
            <button className='bg-[#489CFF] text-white px-1 py-1 sm:px-4 sm:py-2 rounded-md cursor-pointer font-Poppins my-3'>Create My Page</button>
          </div>
        </div>
      </div>


      <div className='container mx-auto'>
        <div style={{ marginTop: "50px", marginLeft: "40px" }} className='flex flex-col sm:flex-row'>
          <div className='w-full sm:w-3/6'>
            <p className='font-Poppins text-2xl sm:text-4xl font-bold sm:leading-normal my-2'>
              Pricing
            </p>

            <p className='font-Poppins text-xl sm:text-3xl  sm:leading-normal my-2'>
              We earn only when you earn
            </p>

            <div className=' w-full  h-full flex justify-end items-center ' style={{paddingRight:"120px"}}>
              <img className="object-cover h-32" src={logo2} alt="" />
            </div>

          </div>
          <div className='w-full sm:w-3/6 flex flex-col justify-center '>
            <p className='font-Poppins text-xl sm:text-2xl ' style={{marginTop:"60px"}}>We charge a small commission on your<br /> earnings. <span className='font-bold'>7% Commission</span>
            </p>
           <p className='font-Poppins text-xl sm:text-2xl font-bold' style={{marginTop:"40px"}}>No CC required. No upfront fees. No <br />recurring charges.</p>
          </div>
        </div>
      </div>


      <div className='bg-[#F6F6F6CC]' style={{marginTop:"100px",height:"350px"}}>
        <div className='container mx-auto flex flex-col sm:flex-row justify-center items-center'>
          <div className='w-3/6 flex flex-col justify-center items-center pl-2'>
          <div >
          <div className=' flex items-center '>
              <img className="object-cover" src={logo} alt="" />
            </div>
            <p className='font-Poppins text-xl '>Adviserxiis  the world of advisers</p>
          </div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 w-3/6">
            <div>
              <p className='font-Poppins text-xl sm:text-5xl font-bold sm:leading-normal my-2'>
                Start your <br />
                Side hustle <br />
                today
              </p>
              <button className='bg-[#489CFF] text-white px-1 py-1 sm:px-4 sm:py-2 rounded-md cursor-pointer font-Poppins my-3'>Get Started</button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default LandingPage;

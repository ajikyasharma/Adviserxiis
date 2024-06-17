import React from 'react';
import background from '../assets/background.png';
import image1 from '../assets/image1.png';
import Navbar from './Navbar';

function LandingPage() {
  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${background})` }}>
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="flex flex-row justify-center">
          <div className="flex flex-col items-center justify-center p-4 w-2/5">
          <div>
              <p className='font-Poppins text-xl sm:text-5xl font-bold sm:leading-normal  my-2'>
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
            <img className="object-contain h-auto max-w-full" src={image1} alt=""/>
          </div>
        </div>

        <div className='flex flex-row justify-center'>
          <div className='border border-red-500'>

          </div>
          <div className='border border-red-500'>

          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

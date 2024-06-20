import React from 'react'
import UserNavbar from './UserNavbar'
import bg1 from '../user-assets/bg1.png'
import icon1 from '../user-assets/icon1.png'
import icon2 from '../user-assets/icon2.png'
import icon3 from '../user-assets/icon3.png'

function UserLandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className=" container mx-auto flex-grow">
        <section className="relative bg-[#489CFF] text-white py-16 px-4 md:px-8">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-2/5 mt-[40px] md:mt-[100px]">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-Poppins text-black">
              Get professional advice from top experts
              </h1>
              <div className="relative ">
                <input
                  type="text"
                  className="w-full p-3 h-16 rounded shadow text-black font-Poppins"
                  placeholder="Search Adviser"
                />
                <button className="absolute right-0 top-0 my-2 mr-2 p-3 bg-[#489CFF] text-white  rounded font-Poppins">
                  Search
                </button>
              </div>
            </div>
            <div className="md:w-3/5 flex justify-center mt-8 md:mt-0">
              <img
                src={bg1}
                alt="Top Right Illustration"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </section>
        <section className="bg-[#F2F2F24D] mt-4 rounded-lg py-16 px-4 md:px-8 font-Poppins">
          <div className="container mx-auto text-center md:mx-[50px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <img src={icon1} alt="Advisers Icon" className="mx-auto my-4" />
                <h2 className="text-3xl font-bold">1000 + Advisers</h2>
              </div>
              <div>
                <img src={icon2} alt="Advice Icon" className="mx-auto my-4" />
                <h2 className="text-3xl font-bold">700 + Advise Provided</h2>
              </div>
              <div>
                <img src={icon3} alt="Users Icon" className="mx-auto my-4" />
                <h2 className="text-3xl font-bold">800 + Users</h2>
              </div>
            </div>
          </div>
        </section>
        <section className=" py-16 px-4 md:px-8">
          <div className="container mx-auto font-Poppins">
            <h2 className="text-3xl font-bold mb-4">What is Adviserxiis</h2>
            <p className="text-lg leading-normal">
            Adverxiis is your one-stop platform for connecting with<br />
             professional advisers. Whether you need expert advice,<br />
              coaching, or consulting services, Adverxiis makes it easy to find<br />
               and book the right adviser for you.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default UserLandingPage
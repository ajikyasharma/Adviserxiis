import React, { useState } from 'react';

const ServiceForm = () => {
  const [serviceName, setServiceName] = useState('');
  const [aboutService, setAboutService] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');
  const [bookingDays, setBookingDays] = useState('');
  const [bookingTime, setBookingTime] = useState('');

  return (
    <div className="flex flex-col p-6 space-y-6">
      <p className='font-Poppins text-xl sm:text-3xl font-bold s my-2'>Services</p>
      <form className="bg-[#D9D9D942] p-6 rounded-xl shadow-md space-y-6 md:w-3/6 ">
        <div>
          <label className="block text-sm font-bold text-gray-700 font-Poppins">Service Name</label>
          <input
            type="text"
            value={serviceName}
            placeholder='CV Review'
            onChange={(e) => setServiceName(e.target.value)}
            className="mt-1 block w-full h-12 p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 font-Poppins"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 font-Poppins ">About Service</label>
          <textarea
            value={aboutService}
            placeholder='Talent Acquisition Specialist at JindalX || Tech Mahindra || TCS'
            onChange={(e) => setAboutService(e.target.value)}
            className="mt-1 block w-full h-12 p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 font-Poppins"
            rows="3"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 font-Poppins">Duration</label>
          <input
            type="text"
            placeholder='1 hour'
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="mt-1 block w-full h-12 p-2 rounded-md border-gray-300 font-Poppins shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 font-Poppins">Price</label>
          <input
            type="text"
            placeholder='499'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 block w-full h-12 p-2 rounded-md border-gray-300 font-Poppins shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 font-Poppins">Booking Days</label>
          <input
            type="text"
            placeholder='Mon, Wed, Fri'
            value={bookingDays}
            onChange={(e) => setBookingDays(e.target.value)}
            className="mt-1 block w-full h-12 p-2 rounded-md border-gray-300 shadow-sm font-Poppins focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 font-Poppins">Booking Time</label>
          <input
            type="text"
            placeholder='8:00pm - 9:00pm, 10:00pm - 12:00pm'
            value={bookingTime}
            onChange={(e) => setBookingTime(e.target.value)}
            className="mt-1 block w-full h-12 p-2 rounded-md border-gray-300 font-Poppins shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        <div className="flex space-x-4">
          <button className="bg-[#489CFF] text-white rounded-md py-2 px-4 font-Poppins">Publish</button>
          <button className="bg-[#FF5348] text-white rounded-md py-2 px-4 font-Poppins">Delete</button>
        </div>
      </form>
    </div>
  );
};

export default ServiceForm;

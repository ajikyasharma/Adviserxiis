import React, { useEffect, useState } from 'react'
import profile from '../assets/profile.png'
import { get, getDatabase, ref, set, update } from "firebase/database";
import { app } from "../firebase";
import { CircularProgress } from '@mui/material';

function Dashboard() {
  const database = getDatabase(app);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getUser(userId) {
    const nodeRef = ref(database, `advisers/${userId}`);
    try {
      const snapshot = await get(nodeRef);
      if (snapshot.exists()) {
        console.log("User photo:", snapshot.val().profile_photo);
        return snapshot.val();
      } else {
        console.log('No data available');
        return null;
      }
    } catch (error) {
      console.error('Error fetching node details:', error);
      return null;
    }
  }

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem('adviserid'));
    if (userId) {
      getUser(userId).then((userData) => {
        setUser(userData);
        setLoading(false); // Update loading state after fetching the user data
      });
    } else {
      setLoading(false); // Update loading state even if there's no user ID in localStorage
    }
  }, []);

  if (loading) {
    return <div className='h-screen flex justify-center items-center'><CircularProgress  /></div>; // Show a loading message or spinner while fetching data
  }
  return (
    <div className=''>
          <div>
    <p className='font-Poppins text-xl sm:text-3xl font-bold s my-2'>Dashboard</p>
    </div>
    <div className="flex flex-col md:flex-row justify-center items-center md:justify-between sm:p-6 space-y-6 ">

    <div className="flex flex-col justify-center sm:justify-between items-center md:items-start w-full md:w-3/6 ">
      <div className="flex items-center space-x-4 w-full my-4">

        <img 
           src={user && user.profile_photo ? user.profile_photo : profile}
          alt="" 
          className="rounded-full w-32 h-32"
        />
        <div>
          <h1 className="text-xl font-bold font-Poppins">Welcome !!</h1>
          <p className="text-lg font-bold font-Poppins">{user.username}</p>
        </div>
      </div>
      <div className="bg-[#489CFF] text-white rounded-xl w-full p-6 md:w-3/5 m-4">
        <p className="text-lg font-Poppins">Total Earning</p>
        <h2 className="text-4xl font-bold font-Poppins">₹ 80,000</h2>
        <button className="mt-4 bg-white text-[#489CFF] rounded-md py-2 px-4 font-Poppins">Request Withdraw</button>
      </div>
    </div>

    <div className=" bg-white rounded-xl shadow-md  p-6 w-full  md:w-2/6 my-4">
        <h2 className="text-xl font-bold font-Poppins">Upcoming Booking</h2>
        <div className="mt-4 space-y-4">
          <div className="bg-gray-100 p-4 rounded-md flex justify-between items-center">
            <div>
              <p className='font-Poppins'>User Name : Ritik</p>
              <p className='font-Poppins'>Service Request : 499</p>
              <p className='font-Poppins'>Booking for : Today, 10 mins left</p>
            </div>
            <button className="bg-[#489CFF] text-white rounded-md py-2 px-4 font-Poppins">Join</button>
          </div>
          <div className="bg-gray-100 p-4 rounded-md flex justify-between items-center">
            <div>
              <p className='font-Poppins'>User Name : Ritik</p>
              <p className='font-Poppins'>Service Request : 499</p>
              <p className='font-Poppins'>Booking for : Tomorrow, 9pm</p>
            </div>
            <button className="bg-gray-300 text-white rounded-md py-2 px-4 font-Poppins" disabled>Join</button>
          </div>
        </div>
      </div>
    


  </div>
  <div className="flex justify-between space-x-6">
      <div className="flex-1 bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold font-Poppins">Last Appointments</h2>
        <table className="min-w-full mt-4 text-left font-Poppins">
          <thead>
            <tr>
              <th className="py-2">Purchase Date</th>
              <th className="py-2">Name</th>
              <th className="py-2">Service</th>
              <th className="py-2">Booking date</th>
              <th className="py-2">Slot</th>
              <th className="py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">12 May 2024</td>
              <td className="py-2">Ritik</td>
              <td className="py-2">Profile Review</td>
              <td className="py-2">15 May 2024</td>
              <td className="py-2">8:00 - 9:00pm</td>
              <td className="py-2">499</td>
            </tr>
            <tr>
              <td className="py-2">10 May 2024</td>
              <td className="py-2">Vishal</td>
              <td className="py-2">Career</td>
              <td className="py-2">19 May 2024</td>
              <td className="py-2">9:00 - 12:00pm</td>
              <td className="py-2">1999</td>
            </tr>
          </tbody>
        </table>
      </div>


    </div>
  </div>
  )
}

export default Dashboard
import React, { useEffect, useState } from 'react'
import profile from '../assets/profile.png'
import { equalTo, get, getDatabase, orderByChild, query, ref, set, update } from "firebase/database";
import { app } from "../firebase";
import { CircularProgress } from '@mui/material';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import User from '../assets/User.png'

function Dashboard() {
  const database = getDatabase(app);
  const navigate= useNavigate()

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const userId = JSON.parse(localStorage.getItem('adviserid'));

  const [appointmentData, setAppointmantData] = useState([])

  function convertDateFormat(dateString) {
    // Split the input date string by the hyphen
    const [year, month, day] = dateString.split('-');
  
    // Return the date in dd-mm-yyyy format
    return `${day}-${month}-${year}`;
  }


  async function getUser(userId) {
    const nodeRef = ref(database, `advisers/${userId}`);
    try {
      const snapshot = await get(nodeRef);
      if (snapshot.exists()) {
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

  const fetchPaymentsByAdviserId = async (adviserId) => {
    const payments = [];
    const paymentsRef = ref(database, 'payments');
  
    try {
      const snapshot = await get(paymentsRef);
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          if(childSnapshot.val().adviserid == adviserId)
            {
              payments.push(childSnapshot.val());
            }
     
        });
      } else {
        console.log('No payments available');
      }
    } catch (error) {
      console.error('Error fetching payments:', error);
    }
  
    return payments;
  };

  const fetchUserById = async (userId) => {
    const userRef = ref(database, `users/${userId}`);
    try {
      const snapshot = await get(userRef);
      if (snapshot.exists()) {
        return snapshot.val();

      } else {
        console.log(`No user available for user ID: ${userId}`);
        return null;
      }
    } catch (error) {
      console.error(`Error fetching user data for user ID: ${userId}`, error);
      return null;
    }
  };

  const fetchServiceById = async (serviceId) => {
    const serviceRef = ref(database, `advisers_service/${serviceId}`);
    try {
      const snapshot = await get(serviceRef);
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log(`No service available for service ID: ${serviceId}`);
        return null;
      }
    } catch (error) {
      console.error(`Error fetching service data for service ID: ${serviceId}`, error);
      return null;
    }
  };

  useEffect(()=>{
    if( JSON.parse(localStorage.getItem('adviserid')) == null)
      {
         Swal.fire({
          title: "Oops!!",
          text: "You need to be loggedin.",
          icon: "error"
        });
            navigate('/adviser')
  
      } 
    },[])

  useEffect(() => {
    
    if (userId) {
      getUser(userId).then((userData) => {
        setUser(userData);
        if(!userData)
          {
            Swal.fire({
              title: "Oops!!",
              text: "You must be a loggedin.",
              icon: "error"
            });
                navigate('/adviser')
          }
        if(userData && userData.isVerified != true)
          {
            Swal.fire({
              title: "Oops!!",
              text: "You must be a verified user.",
              icon: "error"
            });
                navigate('/adviser')
          }
        setLoading(false); // Update loading state after fetching the user data
      });
    } else {
      setLoading(false); // Update loading state even if there's no user ID in localStorage
    }
  }, []);


  useEffect(()=>{
     fetchPaymentsByAdviserId(userId).then(async (payments) => {
      const enrichedPayments = await Promise.all(payments.map(async (payment) => {
        const userId = payment.userid;
        const serviceId = payment.serviceid;
    
        const [user, service] = await Promise.all([
          fetchUserById(userId),
          fetchServiceById(serviceId)
        ]);
    
        return {
          ...payment,
          user: user ? user : null,
          service: service ? service : null
        };
      }));
      setAppointmantData(enrichedPayments)
      // console.log("Enriched Payments:", enrichedPayments);
    }).catch((error) => {
      console.error('Error fetching enriched payments:', error);
    });



    // fetchUserById('9fd0c4b0-3472-11ef-bbcd-a108b1ffa824')
  },[])



  if (loading) {
    return <div className='h-screen flex justify-center items-center'><CircularProgress  /></div>; // Show a loading message or spinner while fetching data
  }
  return (
    <div className='max-w-[1440px]'>
          <div>
    <p className='font-Poppins text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold s my-2'>Dashboard</p>
    </div>
    <div className="flex flex-col md:flex-row justify-center md:justify-between sm:p-6 space-y-6 max-w-[1440px]">

    <div className="flex flex-col  sm:justify-between  md:items-start w-full md:w-3/6  ">
      <div className="flex items-center space-x-4 w-full my-4">

        <img 
           src={user && user.profile_photo ? user.profile_photo :User}
          alt="" 
          className="rounded-full w-32 h-32 lg:h-48 lg:w-48 object-cover"
        />
        <div>
          <h1 className="text-lg md:text-xl lg:text-2xl font-Poppins mb-[10px]">Welcome !!</h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold font-Poppins">{user && user.username ? user.username : 'User'}</p>
        </div>
      </div>

      <div className="mt-[30px]">
        <p className="text-lg lg:text-3xl font-Poppins ml-4 font-bold">Total Earning</p>
        <div className='bg-[#489CFF] text-white rounded-xl p-6 w-[320px] sm:w-[350px] md:w-[400px] m-4 '>
        <h2 className="text-4xl font-bold font-Poppins">₹ {user && user.earnings ? user.earnings : 0}</h2>
        <button className="mt-4 bg-white text-black rounded-[60px] py-2 px-[20px] font-Poppins">Request Withdraw</button>
        </div>
      </div>
    </div>

  


     


    <div className="  py-6  w-[320px] sm:w-[350px]   md:w-3/6 my-4 ">
        <h2 className="text-xl md:tetx-2xl lg:text-3xl font-bold font-Poppins">Upcoming Booking</h2>
        <div className="mt-4 space-y-4">
          <div className="bg-gray-100 p-4 rounded-md flex justify-between items-center md:text-lg lg:text-xl">
            <div>
              <p className='font-Poppins font-bold'>User Name : Ritik</p>
              <p className='font-Poppins'>Service Request : 499</p>
              <p className='font-Poppins'>Booking for : Today, 10 mins left</p>
            </div>
            <button className="bg-[#489CFF] text-white rounded-md py-2 px-4 font-Poppins md:w-24">Join</button>
          </div>
          <div className="bg-gray-100 p-4 rounded-md flex justify-between items-center md:text-lg lg:text-xl">
            <div>
              <p className='font-Poppins font-bold'>User Name : Ritik</p>
              <p className='font-Poppins'>Service Request : 499</p>
              <p className='font-Poppins'>Booking for : Tomorrow, 9pm</p>
            </div>
            <button className="bg-gray-300 text-white rounded-md py-2 px-4 font-Poppins md:w-24" disabled>Join</button>
          </div>
        </div>
      </div>
    


  </div>
  <div className="flex flex-col  mt-[50px] sm:mt-[0px] md:ml-4">
  <h2 className="text-xl md:text-2xl lg:text-3xl md:p-6 font-bold font-Poppins">Appointments</h2>
      <div className="flex-1 bg-white rounded-md shadow-lg p-6 ">

        <table className="min-w-full mt-4 text-left font-Poppins overflow-x-auto">
          <thead style={{fontSize:"20px"}}>
            <tr>
              <th className="py-2 ">Purchase Date</th>
              <th className="py-2 ">Name</th>
              <th className="py-2">Service</th>
              <th className="py-2">Booking date</th>
              <th className="py-2">Time</th>
              <th className="py-2">Price</th>
            </tr>
          </thead>
          <tbody style={{fontSize:"20px"}}>
            {appointmentData.map((data, idx) => (
                           <tr>
                           <td className="py-2">{convertDateFormat(data.purchased_date)}</td>
                           <td className="py-2">{data.user.name}</td>
                           <td className="py-2">{data.service.service_name}</td>
                           <td className="py-2">{convertDateFormat(data.scheduled_date)}</td>
                           <td className="py-2">{data.scheduled_time}</td>
                           <td className="py-2">{data.service.price}</td>
                         </tr>
            ))}


          </tbody>
        </table>
      </div>


    </div>
  </div>
  )
}

export default Dashboard
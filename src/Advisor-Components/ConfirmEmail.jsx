import React, { useState } from 'react'
import background2 from '../assets/background2.png'
import image3 from '../assets/image3.png'
import logo from '../assets/logo.png'
import { Autocomplete, Button, Checkbox, CircularProgress, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { get, getDatabase, ref, set } from "firebase/database";
import { app } from "../firebase";
import Swal from 'sweetalert2'



function ConfirmEmail() {
  const database = getDatabase(app);

  const navigate = useNavigate()
  const [otp, setOtp]= useState('')
 const [otpSent, setOtpSent] = useState(false)
 const [verified, setVerified] = useState(false)
 const [loading, setLoading] = useState(false)

 const userId = JSON.parse(localStorage.getItem('userid'))

  // const sendOTP = async () =>{
  //     setLoading(true)
  //  fetch(`https://adviserxiis-backend.vercel.app/sendemail/${userId}`)
  //       .then((res)=>{
  //         if(res.status == 200)
  //           {
  //             // alert("Otp send successfully !!")
  //              Swal.fire({
  //               title: "Success",
  //               text: "OTP Sent Successfullly!!",
  //               icon: "success"
  //             });
  //             setOtpSent(true)
  //             setLoading(false)
  //           }
  //       }).catch((error)=>{
  //         // console.log("error in otp send", error)
  //        await Swal.fire({
  //           title: "Success",
  //           text: "Something went wrong!!",
  //           icon: "error"
  //         });          

  //         setLoading(false)
  //       })
  // }

  const sendOTP = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://adviserxiis-backend.vercel.app/sendemail/${userId}`);
      if (res.status === 200) {
        await Swal.fire({
          title: "Success",
          text: "OTP Sent Successfully!!",
          icon: "success"
        });
        setOtpSent(true);
      } else {
        await Swal.fire({
          title: "Error",
          text: "Failed to send OTP.",
          icon: "error"
        });
      }
    } catch (error) {
      await Swal.fire({
        title: "Error",
        text: "Something went wrong!!",
        icon: "error"
      });
    } finally {
      setLoading(false);
    }
  }

  async function getUser(userId) {
    const nodeRef = ref(database, `advisors/${userId}`);
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

  const verifyOTP = async () =>{
     setLoading(true)
    const user = await getUser(userId);

    if( otp == user.otp)
      {
             setVerified(true)
            //  alert("OTP verified successfully!!")
            await Swal.fire({
              title: "Success",
              text: "OTP Verified Successfully!!",
              icon: "success"
            });
             setOtp('')
              setLoading(false)
      }

      else{
        // alert ("Wrong OTP !!")
        await Swal.fire({
          title: "Success",
          text: "Wrong OTP!!",
          icon: "error"
        });
        setLoading(false)
        setOtp('')
      }

  }

  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className=' w-full md:w-3/6 bg-cover flex justify-center items-center ' style={{ backgroundImage: `url(${background2})` }} >
        <img className="object-contain h-auto max-w-full" style={{ paddingTop: "80px" }} src={image3} alt="" />
      </div>
      <div className='min-h-screen w-full md:w-3/6 flex flex-col items-center'>
        <div className='flex items-center justify-center' style={{ marginTop: "70px" }}>
          <img className="object-cover" src={logo} alt="" />
        </div>

        <div style={{ marginTop: "60px" }}>
          <p className='font-workSans text-3xl font-bold text-center'>Confirm your email<br /> address</p>
          <p className='font-workSans text-md mt-4 text-center text-[#03014C]' style={{marginTop:"50px"}}>We will send a OTP to your email address <br />after click on button below
          </p>
            

          
        </div>

        <div className='flex flex-col' style={{ marginTop: "30px" }}>


 
 {otpSent &&  
           <TextField
           name='OTP'
           id="outlined-basic"
           type="number"
           label="Enter OTP"
            value={otp}
            onChange={(e)=> setOtp(e.target.value)}
           variant="outlined"
           margin="dense"
           className=' font-workSans w-[360px] sm:w-[380px]'
         />}

 {
  (!otpSent && !verified)  &&  <Button
  variant="contained"
  // color="secondary"
  aria-label="Register"

  margin="normal"
  // onClick={formik.handleSubmit}
  onClick={sendOTP}
  size="large"
  className='bg-[#F6F6F6] font-workSans w-[360px] sm:w-[380px]'
style={{ margin: "0 auto", marginTop:"5px",height:"50px", backgroundColor:"#489CFF" }}
>
{ !loading ? 'Send OTP' : <CircularProgress  color="inherit"  />}
</Button>
 }


            {
              (otpSent && !verified) &&        <Button         variant="contained"
              // color="secondary"
              aria-label="Register"
              margin="normal"
              // onClick={formik.handleSubmit}
              onClick={verifyOTP}
              size="large"
              className='bg-[#F6F6F6] font-workSans w-[360px] sm:w-[380px]'
            style={{ margin: "0 auto", marginTop:"5px",height:"50px", backgroundColor:"#489CFF" }}
            >
               { !loading ? 'Verify' : <CircularProgress  color="inherit"  />}
            </Button>
            }


            {
              verified &&    <Button         variant="contained"
              // color="secondary"
              aria-label="Register"
              margin="normal"
              // onClick={formik.handleSubmit}
              onClick={()=>navigate('/adviser/professionaldetails')}
              size="large"
              className='bg-[#F6F6F6] font-workSans w-[360px] sm:w-[380px]'
            style={{ margin: "0 auto", marginTop:"5px",height:"50px", backgroundColor:"#489CFF" }}
            >
             { !loading ? 'Next' : <CircularProgress  color="inherit"  />}
            </Button>
            }

          

        </div>
      </div>

    </div>
  )
}

export default ConfirmEmail
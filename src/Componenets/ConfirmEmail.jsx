import React from 'react'
import background2 from '../assets/background2.png'
import image3 from '../assets/image3.png'
import logo from '../assets/logo.png'
import { Autocomplete, Button, Checkbox, TextField } from '@mui/material'



function ConfirmEmail() {
  return (
    <div className='min-h-screen flex flex-col sm:flex-row'>
      <div className=' w-full sm:w-3/6 bg-cover flex justify-center items-center ' style={{ backgroundImage: `url(${background2})` }} >
        <img className="object-contain h-auto max-w-full" style={{ paddingTop: "80px" }} src={image3} alt="" />
      </div>
      <div className='min-h-screen w-full sm:w-3/6 flex flex-col items-center'>
        <div className='flex items-center justify-center' style={{ marginTop: "70px" }}>
          <img className="object-cover" src={logo} alt="" />
        </div>

        <div style={{ marginTop: "60px" }}>
          <p className='font-workSans text-3xl font-bold text-center'>Confirm your email<br /> address</p>
          <p className='font-workSans text-md mt-4 text-center text-[#03014C]' style={{marginTop:"50px"}}>We sent a confirmation email to<br/>
          ayush2142@gmail.com
          </p>
            
          <p className='font-workSans text-md mt-4 text-center text-[#489CFF]' style={{marginTop:"50px"}}>check your email and click on the<br /> confirmation link to login
          </p>
          
        </div>

        <div style={{ marginTop: "60px" }}>
          <form className='flex flex-col mb-[100px] '>


            <Button
              variant="contained"
              // color="secondary"
              aria-label="Register"
              type="submit"
              margin="normal"
              // onClick={formik.handleSubmit}
              size="large"
              className='bg-[#F6F6F6] font-workSans w-[360px] sm:w-[380px]'
            style={{ margin: "0 auto", marginTop:"5px",height:"50px", backgroundColor:"#489CFF" }}
            >
              Login
            </Button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default ConfirmEmail
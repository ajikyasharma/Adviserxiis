import React from 'react'
import background2 from '../assets/background2.png'
import image3 from '../assets/image3.png'
import logo from '../assets/logo.png'
import { Autocomplete, Button, Checkbox, TextField } from '@mui/material'

const country = ['India', 'USA', 'Russia']
const state = ['UttarPradesh', 'Gujrat', 'Uttrakhand']

function SignUp() {
  return (
    <div className='min-h-screen flex flex-col sm:flex-row'>
      <div className=' w-full sm:w-3/6 bg-cover flex justify-center items-center ' style={{ backgroundImage: `url(${background2})` }} >
        <img className="object-contain h-auto max-w-full" style={{ paddingTop: "80px" }} src={image3} alt="" />
      </div>
      <div className='min-h-screen w-full sm:w-3/6 flex flex-col items-center'>
        <div className='flex items-center justify-center' style={{ marginTop: "70px" }}>
          <img className="object-cover" src={logo} alt="" />
        </div>

        <div style={{ marginTop: "30px" }}>
          <p className='font-workSans text-3xl font-bold'>Create Account</p>
          <p className='font-workSans text-md mt-4'>Follow the instructions to make it easier to<br /> register and you will be able to explore inside.
          </p>
        </div>

        <div style={{ marginTop: "15px" }}>
          <form className='flex flex-col mb-[100px] '>
            <TextField
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              margin="dense"
              className='bg-[#F6F6F6] font-workSans w-[360px] sm:w-[380px]'
               />

            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              margin="dense"
              className='bg-[#F6F6F6] font-workSans w-[360px] sm:w-[380px]'
               />

            <TextField
              id="outlined-basic"
              label="Phone number"
              variant="outlined"
              margin="dense"
              className='bg-[#F6F6F6] font-workSans w-[360px] sm:w-[380px]'
               />

            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              margin="dense"
              className='bg-[#F6F6F6] font-workSans w-[360px] sm:w-[380px]'
               />

            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={country}
              className='bg-[#F6F6F6] font-workSans w-[360px] sm:w-[380px]'
              renderInput={(params) => <TextField {...params} label="Country" margin="dense" />}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={state}
              className='bg-[#F6F6F6] font-workSans w-[360px] sm:w-[380px]'
              renderInput={(params) => <TextField {...params} label="State" margin="dense" />}
            />
            <div className='flex'>
            <Checkbox  /> <p className='font-workSans text-md pt-2'>I Agree all <span className='text-[#489CFF]'>Term&Conditions</span></p>
            </div>

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
              Create Account
            </Button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default SignUp
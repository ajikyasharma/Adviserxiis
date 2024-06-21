import React, { useEffect } from 'react'
import background2 from '../assets/background2.png'
import image3 from '../assets/image3.png'
import logo from '../assets/logo.png'
import { Autocomplete, Button, Checkbox, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import * as Yup from "yup";
import { useFormik } from 'formik';
import { getDatabase, ref,set } from "firebase/database";
import { app } from "../firebase";
import { v1 as uuidv1 } from 'uuid';




const country = ['India', 'USA', 'Russia']
const state = ['UttarPradesh', 'Gujrat', 'Uttrakhand']


function SignUp() {
  const database = getDatabase(app);

  const navigate = useNavigate()

  const initialValues ={
    name:'',
    email:'',
    mobile_number:'',
    password:'',
    country:'',
    state:'',
    check:false
    
  }

  


  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters long')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in)$/, 'Email must be a valid .com or .in domain')
      .required('Email is required'),
    mobile_number: Yup.string()
      .matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits')
      .required('Mobile number is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters long')
      .required('Password is required'),
    country: Yup.string()
      .required('Country is required'),
    state: Yup.string()
      .required('State is required'),
    check: Yup.boolean()
      .oneOf([true], 'You must accept the terms and conditions')
      .required('Checkbox is required'),
  });


  const handleSubmit = () =>{
    //  console.log("values", formik.values)

     const userid = uuidv1();
    //  console.log("unique id", userid)

     set(ref(database, 'advisors/' + userid), {
      username: formik.values.name,
      email: formik.values.email,
      mobile_number: formik.values.mobile_number,
      password: formik.values.password,
      country: formik.values.country,
      state: formik.values.state
    });

    formik.resetForm()
    alert("Your data saved successfully.")
     

     
  }
   
  const formik = useFormik({
    initialValues:initialValues,
    validationSchema:validationSchema,
    onSubmit: handleSubmit
  })

   

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
          <p className='font-workSans text-3xl font-bold text-center'>Create Account</p>
          <p className='font-workSans text-md mt-4 text-center text-[#03014C]'>Follow the instructions to make it easier to<br /> register and you will be able to explore inside.
          </p>
        </div>

        <div style={{ marginTop: "15px" }}>
          <form className='flex flex-col mb-[100px] '>
            
            <TextField
              name='name'
              id="outlined-basic"
              label="Full Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              variant="outlined"
              margin="dense"
              className=' font-workSans w-[360px] sm:w-[380px]'
               />

            <TextField
            name='email'
              id="outlined-basic"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              variant="outlined"
              margin="dense"
              className=' font-workSans w-[360px] sm:w-[380px]'
               />

            <TextField
            name='mobile_number'
              id="outlined-basic"
              label="Phone number"
              value={formik.values.mobile_number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.mobile_number && Boolean(formik.errors.mobile_number)}
              helperText={formik.touched.mobile_number && formik.errors.mobile_number}
              variant="outlined"
              margin="dense"
              className=' font-workSans w-[360px] sm:w-[380px]'
               />

            <TextField
            name='password'
              id="outlined-basic"
              label="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              variant="outlined"
              margin="dense"
              className=' font-workSans w-[360px] sm:w-[380px]'
               />



<Autocomplete
                options={country}
                value={formik.values.country}
                onChange={(event, newValue) => {
                  formik.setFieldValue("country", newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    margin='dense'
                    label="Country"
                    name="country"
                    className=' font-workSans w-[360px] sm:w-[380px]'
                    variant="outlined"
                    required
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.country && Boolean(formik.errors.country)
                    }
                    helperText={formik.touched.country && formik.errors.country}
                  />
                )}
              />
<Autocomplete
                options={state}
                value={formik.values.state}
                onChange={(event, newValue) => {
                  formik.setFieldValue("state", newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    margin='dense'
                    label="Country"
                    name="state"
                    className=' font-workSans w-[360px] sm:w-[380px]'
                    variant="outlined"
                    required
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.state && Boolean(formik.errors.state)
                    }
                    helperText={formik.touched.state && formik.errors.state}
                  />
                )}
              />
              <div>
            <div className='flex'>
            <Checkbox 
            name='check'
                    value={formik.values.check}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.check && Boolean(formik.errors.check)}
                    helperText={formik.touched.check && formik.errors.check}  /> <p className='font-workSans text-md pt-2'>I Agree all <span className='text-[#489CFF]'>Term&Conditions</span></p>
            </div>
            {formik.touched.check &&
                  formik.errors.check && (
                    <p
                      style={{
                        fontSize: "13px",
                        padding: "",
                        color: "red",
                      }}
                    >
                      {formik.errors.check}
                    </p>
                  )}
                </div>
            <Button
              variant="contained"
              // color="secondary"
              aria-label="Register"
              type="submit"
              margin="normal"
              onClick={formik.handleSubmit}
              // onClick={()=>navigate('/emailconfirmation') }
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
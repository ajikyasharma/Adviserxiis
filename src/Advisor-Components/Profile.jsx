import React, { useEffect, useState } from 'react'
import profile from '../assets/profile.png'
import User from '../assets/User.png'
import { child, get, getDatabase, ref, set } from "firebase/database";
import { app } from "../firebase";
import { CircularProgress } from '@mui/material';
import * as Yup from "yup";
import { useFormik } from 'formik';

function Profile() {
  const [name, setName] = useState('')
  const [professionalBio, setProfessionalBio] = useState('')
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const database = getDatabase(app);
  const adviserId = JSON.parse(localStorage.getItem('adviserid'));

  const initialValues = {
    name: '',
    professional_bio:''
  }


  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters long')
      .required('Name is required'),
      professional_bio: Yup.string()
      .required('Professional bio is required')
      .min(10, 'Professional bio must be at least 10 characters')
      .max(1000, 'Professional bio must be at most 1000 characters'),

  });

  const handleSubmit = () =>{
          

    console.log("values", formik.values)
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleSubmit
  })





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

  useEffect(() => {
    
    if (adviserId) {
      getUser(adviserId).then((userData) => {
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
    <div className="flex flex-col p-6 space-y-6">
    <p className='font-Poppins text-xl sm:text-3xl font-bold s my-2'>Profile</p>

    <div className="flex items-center space-x-4 w-full my-4">
        <img 
          src={user && user.profile_photo ? user.profile_photo : User} 
          alt="" 
          className="rounded-full w-32 h-32"
        />
        <div>
          {/* <p className="text-lg font-medium font-Poppins">Edit Profile Image</p> */}
        </div>
      </div>
    <form className="bg-[#D9D9D942] p-6 rounded-xl shadow-md space-y-6 md:w-3/6 pb-[200px] sm:pb-[300px] ">
      <div>
        <label className="block text-sm font-bold text-gray-700 font-Poppins">Name</label>
        <input
          name="name"
          type="text"
          value={ user && user.username ? user.username : name}
          placeholder='Utkarsh Pandey'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="mt-1 block w-full h-12 p-2 rounded-md border-gray-300  font-Poppinsshadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        />
                      {formik.touched.name &&
                formik.errors.name && (
                  <p
                    style={{
                      fontSize: "13px",
                      padding: "",
                      color: "red",
                    }}
                  >
                    {formik.errors.name}
                  </p>
                )}
      </div>
      <div>
        <label className="block text-sm font-bold text-gray-700 font-Poppins">Professional BIO </label>
        <textarea
          name='professional_bio'
          value={user && user.professional_bio ? user.professional_bio : professionalBio}
          placeholder=''
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="mt-1 block w-full h-12 p-2 rounded-md border-gray-300 shadow-sm font-Poppins focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          rows="3"
        />
                              {formik.touched.professional_bio &&
                formik.errors.professional_bio && (
                  <p
                    style={{
                      fontSize: "13px",
                      padding: "",
                      color: "red",
                    }}
                  >
                    {formik.errors.professional_bio}
                  </p>
                )}
      </div>
 
      <div className="flex space-x-4">
        <button type="submit" className="bg-[#489CFF] text-white rounded-md py-2 px-4" >Publish</button>
      </div>
    </form>
  </div>
  )
}

export default Profile
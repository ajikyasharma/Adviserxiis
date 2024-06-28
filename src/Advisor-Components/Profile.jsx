import React, { useEffect, useState } from 'react'
import profile from '../assets/profile.png'
import User from '../assets/User.png'
import { child, get, getDatabase, ref, set, update } from "firebase/database";
import { app } from "../firebase";
import { CircularProgress } from '@mui/material';
import * as Yup from "yup";
import { useFormik } from 'formik';
import { v1 as uuidv1 } from 'uuid';
import { getDownloadURL, getStorage, uploadBytes } from 'firebase/storage'
import Swal from 'sweetalert2'
import { ref as sRef } from 'firebase/storage';

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const [ isUpdated, setIsUpdated] = useState(false)

  const database = getDatabase(app);
  const adviserId = JSON.parse(localStorage.getItem('adviserid'));

  const initialValues = {
    name: '',
    professional_bio:'',
    profile_photo:null
  }


  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters long')
      .required('Name is required'),
    professional_bio: Yup.string()
      .required('Professional bio is required')
      .min(10, 'Professional bio must be at least 10 characters')
      .max(1000, 'Professional bio must be at most 1000 characters'),
    profile_photo: Yup
      .mixed()
      .test("fileType", "Unsupported file type", (value) => {
        if (!value) return true;
        const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
        return allowedTypes.includes(value.type);
      })
      .test("fileSize", "File size is too large (max 10MB)", (value) => {
        if (!value) return true;
        return value.size <= 5 * 1024 * 1024; // 10MB in bytes
      })

  });

  const handleSubmit = async () => {
    setLoading(true);
    const userid = JSON.parse(localStorage.getItem('adviserid'));
    const storage = getStorage();
    const { profile_photo, name, professional_bio } = formik.values;
  
    try {
      let profilePhotoURL = null;
  
      if (profile_photo) {
        const imgRef = sRef(storage, `images/${uuidv1()}`);
        const uploadResult = await uploadBytes(imgRef, profile_photo);
        profilePhotoURL = await getDownloadURL(uploadResult.ref);
      }
  
      const updateData = {
        username: name,
        professional_bio: professional_bio,
      };
  
      if (profilePhotoURL) {
        updateData.profile_photo = profilePhotoURL;
      }
  
      await update(ref(getDatabase(), 'advisers/' + userid), updateData);
  
      await Swal.fire({
        title: "Success",
        text: "Profile Updated Successfully!!",
        icon: "success",
      });
    } catch (error) {
      await Swal.fire({
        title: "Error",
        text: "Something Went Wrong!!",
        icon: "error",
      });
    } finally {
      setLoading(false);
      setIsUpdated(! isUpdated)
    }
  };

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
        formik.setValues({
          name: userData.username || '',
          professional_bio: userData.professional_bio || ''
        });

        setLoading(false); // Update loading state after fetching the user data
      });
    } else {
      setLoading(false); // Update loading state even if there's no user ID in localStorage
    }
  }, [isUpdated]);

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
          value={formik.values.name}
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
          value={formik.values.professional_bio}
          placeholder=''
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="mt-1 block w-full h-16 p-2 rounded-md border-gray-300 shadow-sm font-Poppins focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
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
      <div className="mb-4">
                            <label className="block text-sm font-bold text-gray-700 font-Poppins">Change Profile Photo:</label>

                            <div className='my-4'>
                                <label class="block">
                                    <span class="sr-only">Choose profile photo</span>
                                    <input type="file" class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                                        name="profile_photo"
                                        onChange={(event) => {
                                            formik.setFieldValue("profile_photo", event.target.files[0]);
                                        }}
                                    />
                                </label>
                                {formik.touched.profile_photo &&
                                    formik.errors.profile_photo && (
                                        <p
                                            style={{
                                                fontSize: "13px",
                                                padding: "",
                                                color: "red",
                                            }}
                                        >
                                            {formik.errors.profile_photo}
                                        </p>
                                    )}
                            </div>
                        </div>
 
      <div className="flex space-x-4">
        <button type="submit" className="bg-[#489CFF] text-white rounded-md py-2 px-4" onClick={formik.handleSubmit}>
         Update
        </button>
      </div>
    </form>
  </div>
  )
}

export default Profile
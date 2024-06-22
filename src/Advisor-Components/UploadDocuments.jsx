import React from 'react'
import background2 from '../assets/background2.png'
import image3 from '../assets/image3.png'
import logo from '../assets/logo.png'
import background3 from '../assets/background3.png'
import { Autocomplete, Button, Checkbox, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import * as Yup from "yup";
import { useFormik } from 'formik';



function UploadDocuments() {
    const navigate = useNavigate()

    const initialValues = {
        profile_photo:null,
        aadhar_front:null,
        aadhar_back:null,
    }



    const validationSchema = Yup.object().shape({
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
        .required("Image is required"),
        aadhar_front: Yup
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
        .required("Image is required"),
        aadhar_back: Yup
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
        .required("Image is required"),
    });

    const handleSubmit = () => {
        alert("sab shi hai")

    }


    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: handleSubmit
    })

    return (
        <div className='min-h-screen flex flex-col md:flex-row'>
            <div
                className="absolute top-0 right-0 w-full h-full bg-no-repeat bg-right-top"
                style={{ backgroundImage: `url(${background3})`, backgroundSize: '60% auto' }}
            ></div>
            <div className='min-h-screen w-full md:w-3/6 flex flex-col items-center  mt-[200px]  md:mt-[150px] '>
                <div className='flex items-center justify-center' >
                    <img className="object-cover" src={logo} alt="" />
                </div>

                <div className="relative z-10 w-full max-w-md p-8  ">
                    <p className='font-workSans text-md mt-4  text-[#489CFF]' style={{ marginTop: "50px", marginBottom: "20px" }}>UPLOAD DOCUMENTS
                    </p>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700">Upload Profile Photo:</label>

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
                        <div className="mb-4">
                            <label className="block text-gray-700">Upload Aadhar Card:</label>
                            <div className="flex flex-col">
                                <div className='my-4'>
                                    <label className="block text-gray-700">Upload / Front</label>
                                    <label class="block">
                                        <span class="sr-only">Choose Aadhar Front</span>
                                        <input type="file" class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                                            name="aadhar_front"
                                            onChange={(event) => {
                                                formik.setFieldValue("aadhar_front", event.target.files[0]);
                                            }}
                                        />

                                    </label>

                                    {formik.touched.aadhar_front &&
                                        formik.errors.aadhar_front && (
                                            <p
                                                style={{
                                                    fontSize: "13px",
                                                    padding: "",
                                                    color: "red",
                                                }}
                                            >
                                                {formik.errors.aadhar_front}
                                            </p>
                                        )}
                                </div>

                                <div className='my-4'>
                                    <label className="block text-gray-700 ">Upload / Back</label>
                                    <label class="block">
                                        <span class="sr-only">Choose Aadhar Back</span>
                                        <input type="file" class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                                            name="aadhar_back"
                                            onChange={(event) => {
                                                formik.setFieldValue("aadhar_back", event.target.files[0]);
                                            }}
            
                                        />
                                    </label>
                                    {formik.touched.aadhar_back &&
                                        formik.errors.aadhar_back && (
                                            <p
                                                style={{
                                                    fontSize: "13px",
                                                    padding: "",
                                                    color: "red",
                                                }}
                                            >
                                                {formik.errors.aadhar_back}
                                            </p>
                                        )}
                                </div>
                            </div>
                            <p style={{ fontSize: "15px", paddingTop:"10px" }}>
                  PNG, JPG, or JPEG (Must be a clear images).
                  {/* <span style={{ color: "red", fontSize: "1.8rem" }}>*</span> */}
                </p>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 h-[50px]"
                            onClick={formik.handleSubmit}
                        >
                            Submit
                        </button>
                    </form>      </div>
            </div>

        </div>
    )
}

export default UploadDocuments;
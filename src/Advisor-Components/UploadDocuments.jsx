import React from 'react'
import background2 from '../assets/background2.png'
import image3 from '../assets/image3.png'
import logo from '../assets/logo.png'
import background3 from '../assets/background3.png'
import { Autocomplete, Button, Checkbox, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'



function UploadDocuments() {
    const navigate = useNavigate()

    return (
        <div className='min-h-screen flex flex-col sm:flex-row'>
            <div
                className="absolute top-0 right-0 w-full h-full bg-no-repeat bg-right-top"
                style={{ backgroundImage: `url(${background3})`, backgroundSize: '60% auto' }}
            ></div>
            <div className='min-h-screen w-full sm:w-3/6 flex flex-col items-center  mt-[150px] sm:mt-[80px]'>
                <div className='flex items-center justify-center' >
                    <img className="object-cover" src={logo} alt="" />
                </div>

                <div className="relative z-10 w-full max-w-md p-8  ">
                    {/* <h2 className="text-2xl font-bold mb-6 text-center">PROFESSIONAL INFORMATION</h2> */}
                    <p className='font-workSans text-md mt-4  text-[#489CFF]' style={{ marginTop: "50px", marginBottom: "20px" }}>UPLOAD DOCUMENTS
                    </p>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700">Upload Image:</label>

                           <div className='my-4'>
                            <label class="block">
                                <span class="sr-only">Choose profile photo</span>
                                <input type="file" class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
                            </label>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Upload Aadhar Card:</label>
                            <div className="flex flex-col space-x-2">
                                <div className='my-4'>
                                <label className="block text-gray-700">Upload / Front</label>
                            <label class="block">
                                <span class="sr-only">Choose profile photo</span>
                                <input type="file" class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
    
                            </label>
                            </div>

                            <div className='my-4'>
                            <label className="block text-gray-700 ">Upload / Back</label>
                            <label class="block">
                                <span class="sr-only">Choose profile photo</span>
                                <input type="file" class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
                            </label>
                            </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 h-[50px]"
                        >
                            Submit
                        </button>
                    </form>      </div>
            </div>

        </div>
    )
}

export default UploadDocuments;
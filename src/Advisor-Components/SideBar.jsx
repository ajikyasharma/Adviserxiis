import React, { Fragment, forwardRef } from "react";
import { HomeIcon, CreditCardIcon, UserIcon, ChevronDownIcon, PencilIcon, Cog8ToothIcon } from "@heroicons/react/24/solid";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'
import { Menu, Transition } from "@headlessui/react";
import Swal from "sweetalert2";

const SideBar = forwardRef(({ showSideBar }, ref) => {
  const navigate = useNavigate()

  const handleLogOut = async () => {
  
    Swal.fire({
      title: "Do you want to logout?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem("adviserid", JSON.stringify(null));
        navigate('/adviser');
      }
    });
  

  };



  return (
    <div ref={ref} className="fixed w-[270px] h-full ">
            <div className="flex justify-center  ">
            <div className='flex items-center justify-center' style={{ marginTop: "70px" }}>
              <Link to='/adviser' className="cursor-pointer">
              <img className="object-cover" src={logo} alt="" />
              </Link>
          
        </div>
      </div>
      <div className=" bg-[#489CFF] h-full rounded-tr-[100px]">


      <div className="flex flex-col pt-[20px]">

        <NavLink
          to="/adviser/dashboard"
          className={({ isActive }) =>
            ` ${
              isActive
                ? " text-white font-Poppins"
                : "text-gray-300 hover:text-white font-Poppins"
            } `
          }
        >
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors`}
          >

            <div>
              <p className="font-Poppins font-2xl ">Dashboard</p>
            </div>
          </div>
        </NavLink>
        <NavLink
          to="/adviser/services"
          className={({ isActive }) =>
            ` ${
              isActive
                ? " text-white font-Poppins"
                : "text-gray-300 hover:text-white font-Poppins"
            } `
          }
        >
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors`}
          >

            <div>
              <p className="font-Poppins font-2xl">Services</p>
            </div>
          </div>
        </NavLink>

        <NavLink
          to="/adviser/profile"
          className={({ isActive }) =>
            ` ${
              isActive
                ? " text-white font-Poppins"
                : "text-gray-300 hover:text-white font-Poppins"
            } `
          }
        >
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors`}
          >

            <div>
              <p className="font-Poppins font-2xl">Profile</p>
            </div>
          </div>
        </NavLink>

        <div
           onClick={handleLogOut}
           className="text-gray-300 hover:text-white font-Poppins"
        >
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors`}
          >

            <div>
              <p className="font-Poppins font-2xl">Logout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
});

export default SideBar;

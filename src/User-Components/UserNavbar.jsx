import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function UserNavbar() {

  const navigate= useNavigate()
  return (
    <Disclosure as="nav" className="bg-[#A9A9A91A]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-[#489CFF] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                <img
                    className="h-8 w-auto"
                    src={logo}
                    alt=""
                  />

                </div>

              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">

                

       <NavLink to="/user">
             <div className={`font-Poppins text-lg  h-full flex items-center mx-3`}>
               <p>Home</p>
              </div>
        </NavLink> 

        <NavLink to="/user/category">
             <div className={`font-Poppins text-lg  h-full flex items-center mx-3`}>
               <p>Category</p>
              </div>
        </NavLink>

        <NavLink to="/">
             <div className={`font-Poppins text-lg  h-full flex items-center mx-3`}>
               <p>Login</p>
              </div>
        </NavLink>

                  </div>
                </div>
              </div>
              

            
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="">
                <Disclosure.Button>
                  <NavLink to="/user" >
             <div className={`py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors`}>
               <p>Home</p>
              </div>
        </NavLink>

        <NavLink to="/user/category" >
             <div className={`py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors`}>
               <p>Category</p>
              </div>
        </NavLink>

        <NavLink to="/" >
             <div className={`py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors`}>
               <p>Login</p>
              </div>
        </NavLink>
            
                </Disclosure.Button>


            
              
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

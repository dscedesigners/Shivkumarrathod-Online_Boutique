import React, { useState } from 'react';
import AuthImage from '../Utiles/AuthImage.jpg'
import { FcGoogle } from "react-icons/fc";
import {Link} from 'react-router-dom'
import { FaChevronLeft } from "react-icons/fa";

const SignUpPage = () => {
  
  const [toogle, setToogle] = useState(false);
  const [isOn, setIsOn] = useState(true);

  // Function to toggle the switch
  const toggleSwitch = () => setIsOn(!isOn);
  return (
    <>
    <Link to='/' className='flex mt-10 ml-10'>
        <FaChevronLeft size={25}/> <h1 className='font-semibold'>Go Back</h1>
    </Link>
    <div className="flex flex-col md:flex-row items-center justify-center mt-10 ">
    
      {/* Left Section with Image and Text */}
      <div className="hidden md:flex md:w-1/2 flex-col items-center justify-center p-8 ">
        {isOn?(
          <>
           <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back !</h1>
           <p className="text-md text-gray-600 ">Sign in to get started</p>
          </>
        ):(
         <>
           <h1 className="text-2xl font-bold text-gray-800 mb-2">Create Account</h1>
           <p className="text-md text-gray-600 ">Sign up to get started</p>
         </>
        )}
        <img src={AuthImage} alt="Sign Up" className="w-[500px] mb-20  " />
      </div>

      {/* Right Section with Sign Up Form */}
      <div className="flex flex-col  justify-center w-full md:w-1/2 p-6 md:p-12">
        {/* For Mobile View - "Create Account" Text */}
        <div className="md:hidden text-center mb-4">
          {isOn?(<>
            <h1 className="w-[437px] text-3xl font-bold">Sign In to get Started</h1>
          </>):(<>
            <h1 className="w-[437px] text-3xl font-bold">Create Account</h1>
          </>)}
        </div>
        {/* switch on or off */}
        <div
        className={`w-[54px] mb-2 h-[27px] bg-[#2518BD] rounded-full flex items-end  cursor-pointer transition-colors duration-300 ${
          isOn ? 'bg-[#2518BD]' : 'bg-[#2518BD]'
        }`}
        onClick={toggleSwitch}
      >
        <div
          className={`w-[27px] h-[27px] bg-white rounded-full border-[#2518BD] border-x-2 border-y-2 transition-transform duration-300 ${
            isOn ? 'translate-x-[27px]' : 'translate-x-0'
          }`}
        ></div>
      </div>
        {/* Sign Up Form */}
        {
          isOn?(<>
             <form className="space-y-4">
          
          <div>
            <input
              type="email"
              id="email"
              className="w-[437px] h-[50px] pl-3 placeholder-[#3B3A3A] placeholder:font-semibold border bg-[#D9D9D9] rounded-md mt-1 focus:outline-none focus:ring-2 "
              required
              placeholder='Email'
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              className="w-[437px] h-[50px] pl-3 placeholder-[#3B3A3A] placeholder:font-semibold border bg-[#D9D9D9] rounded-md mt-1 focus:outline-none focus:ring-2 "
              required
              placeholder='Password'
            />
          </div>
          <button
            type="submit"
            className="w-[437px] h-[50px] text-[#3B3A3A] py-2 bg-[#B5B1FF]  rounded-lg hover:bg-[#2518BD] hover:text-white transition duration-300 "
          >
            Continue
          </button>
        </form>
          </>):(<>
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  id="email"
                  className="w-[437px] h-[50px] pl-3 placeholder-[#3B3A3A] placeholder:font-semibold border bg-[#D9D9D9] rounded-md mt-1 focus:outline-none focus:ring-2 "
                  required
                  placeholder='Name'
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  className="w-[437px] h-[50px] pl-3 placeholder-[#3B3A3A] placeholder:font-semibold border bg-[#D9D9D9] rounded-md mt-1 focus:outline-none focus:ring-2 "
                  required
                  placeholder='Email'
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  className="w-[437px] h-[50px] pl-3 placeholder-[#3B3A3A] placeholder:font-semibold border bg-[#D9D9D9] rounded-md mt-1 focus:outline-none focus:ring-2 "
                  required
                  placeholder='Password'
                />
              </div>
              <button
                type="submit"
                className="w-[437px] h-[50px] text-[#3B3A3A] py-2 bg-[#B5B1FF]  rounded-lg hover:bg-[#2518BD] hover:text-white transition duration-300 "
              >
                Continue
              </button>
           </form>
          </>)
        }
        <div className='w-[440px] flex mt-5'>
            <div className='w-1/2 border-t border-black mt-3'></div>
            <h1 className='px-2 font-bold text-[#2518BD]'>Or</h1>
            <div className="w-1/2 border-t border-black mt-3"></div>
        </div>
        <button className='flex justify-center items-center w-[437px] p-2'>
          <div className="rounded-full border border-black hover:bg-[#B5B1FF] p-2 ">
              <FcGoogle className='' size={40}/>
          </div>
          <h1 className='px-2 font-semibold'>Continue With Google</h1>
        </button>
      </div>
    </div>
    </>
    
  );
};

export default SignUpPage;

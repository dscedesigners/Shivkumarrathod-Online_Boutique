import React from 'react';
import Logo from '../Utiles/Logo.png';
import { IoSearchSharp } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='h-[4rem] flex justify-around items-center border-b border-red-600 fixed top-0 w-full bg-white z-50 px-4 sm:px-8'>
      {/* LOGO, location and search box */}
      <div className='flex justify-center items-center gap-3 md:gap-5'>
        <img src={Logo} alt="logo" className='w-[4rem] md:w-[5rem]' />

        {/* Location */}
        <div className='hidden md:flex items-center px-2 py-1 border border-gray-500 rounded-full hover:bg-orange-500 border-orange-500 cursor-pointer'>
          <FaLocationDot size={20} />
          <span className='ml-1'>Location</span>
        </div>

        {/* Search box */}
        <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-lg hidden sm:block">
          <input
            type="text"
            placeholder="Search..."
            className="w-[30rem] sm:w-[20rem] py-1.5 pl-10 pr-4 border border-orange-300 rounded-full focus:outline-none"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400">
            <IoSearchSharp size={25} />
          </span>
        </div>
      </div>

      {/* Notification and login box */}
      <div className='flex gap-3 sm:gap-4 items-center'>
        {/* Notification icon */}
        <div><IoMdNotifications size={28} className='hover:text-orange-600 cursor-pointer' /></div>

        {/* Login button */}
        <Link to='/account' className='w-[7rem] md:w-[8rem] flex items-center border border-gray-500 px-2 py-1 rounded-full cursor-pointer hover:bg-orange-500 border-orange-500'>
          <FaUser size={20} />
          <span className='ml-1 font-semibold hidden md:flex'>
            Login <RiArrowDropDownLine size={24} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Nav;

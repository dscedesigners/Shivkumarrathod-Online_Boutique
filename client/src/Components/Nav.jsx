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
    <div className='h-[4rem] flex justify-around items-center border-b border-red-600 fixed top-0 w-full bg-white z-50'>
      {/* LOGO , location and search box */}
      <div className='flex justify-center items-center gap-5'>
        <img src={Logo} alt="image" className='w-[5rem]'/>
        
        <div className='px-2 py-1 flex border border-grey-500 rounded-full hover:bg-orange-500 border-orange-500 cursor-pointer'>
          <FaLocationDot size={20}/>
          <span className='ml-1'>Location</span>
        </div>

        <div className="relative w-full max-w-sm ml-10">
          <input
            type="text"
            placeholder="Search..."
            className="w-[35rem] py-1.5 pl-10 pr-4 border border-orange-300 rounded-full focus:outline-none"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400">
            <IoSearchSharp size={25}/>
          </span>
        </div>
      </div>

      {/* notification and login div box */}
      <div className='flex gap-4'>
        <div><IoMdNotifications size={33} className='hover:text-orange-600 cursor-pointer'/></div>
        <Link to='/account' className='w-[8rem] flex border border-grey-500 p-1 px-2 py-1 rounded-full cursor-pointer hover:bg-orange-500 border-orange-500'>
          <FaUser size={25}/> 
          <span className='ml-1 flex font-semibold'>
            Login <RiArrowDropDownLine size={26} className='-ml-1'/>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Nav;

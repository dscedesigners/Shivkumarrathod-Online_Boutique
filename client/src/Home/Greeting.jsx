import React, { useState, useEffect } from 'react';
import lpi from '../Utiles/lpi.jpg';
import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {Link} from 'react-router-dom'
const Greeting = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Trigger the pop-up effect when the component mounts
    useEffect(() => {
      setTimeout(() => {
        setIsVisible(true); // Set to true after a short delay for the effect
      }, 100); // Small delay to ensure smooth animation on mount
    }, []);
    const currentHour = new Date().getHours();
  
    // Determine the greeting based on the current hour
    let greeting;
    if (currentHour < 12) {
      greeting = 'Good Morning';
    } else if (currentHour < 18) {
      greeting = 'Good Afternoon';
    } else {
      greeting = 'Good Evening';
    }
  return (
    <div className='flex justify-around bg-gray-100 mt-2'>
        <div className='w-[5%]  flex flex-col p-2 items-center justify-center cursor-pointer'>
          <FiInstagram className='p-1 m-2 hover:text-red-500' size={30}/>
          <FaGithub className='p-1 m-2 hover:text-red-500' size={30}/>
          <FaXTwitter className='p-1 m-2 hover:text-red-500' size={30}/>
        </div>
        <div className={`h-auto w-[60rem] flex mt-1 p-2 justify-center ml-10  flex-col transition-all duration-500 transform ${
                isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
            <h1 className='font-cursive font-semibold text-4xl mb-5 ml-[5rem] text-bold'>{greeting} <span className='text-orange-500'>Shivkumar !</span></h1> 
            <p className='w-[38rem] ml-20'>"Welcome to our exclusive online boutique, where style meets elegance. Discover a curated collection of fashionable apparel, accessories, and unique pieces tailored to your distinct taste. Explore limited-edition items and timeless designs, all available at the click of a button. Enjoy a seamless shopping experience with secure payments and fast delivery, bringing the latest trends right to your doorstep!"</p>
            <Link to='/#' className='bg-orange-500 bg-opacity-10 border border-orange-500 hover:bg-opacity-100 rounded-full px-1 py-1 w-[10rem] text-center ml-[5rem] mt-2 font-bold'>Find Tailor</Link>
        </div>

            {/* image */}
        <div className={`h-auto flex justify-center mt-5  mr-10  rounded-full hover:bg-orange-500   transition-all duration-500 transform ${
                isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}>
            <img
                src={lpi}
                alt="LandingPageImage"
                className='w-[25rem] h-[25rem] rounded-full shadow-custom-mixed '
            />
        </div>
    </div>
  )
}

export default Greeting
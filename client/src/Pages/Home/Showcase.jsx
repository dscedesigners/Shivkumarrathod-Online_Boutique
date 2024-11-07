import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import person1 from '../../utiles/person1.jpg'; 
import person2 from '../../utiles/person1.jpg';

const Showcase = () => {
  return (
    <div className="bg-[linear-gradient(114.91deg,_#BEE2EF_7.73%,_#73C1DE_103.62%)] text-white p-8" style={{ height: '750px' }}>
      <div className="container mx-auto px-10 flex justify-between items-start space-x-10">
        
        {/* Text Section */}
        <div className="max-w-xl space-y-6">
          <div className="bg-sky-100 rounded-lg shadow-md p-4 inline-flex space-x-4 text-blue-500">
            <div className="flex items-center space-x-1">
              <FaCheckCircle className="text-lg" />
              <span className="text-gray-600">Free Register</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaCheckCircle className="text-lg" />
              <span className="text-gray-600">Great Service</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaCheckCircle className="text-lg" />
              <span className="text-gray-600">Easy Payment</span>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-black leading-relaxed">
            Getting the best <span className="text-blue-600">and</span><br />
            latest style has never<br />
            <span className="text-blue-600">been easier!</span>
          </h1>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            <strong>StarFashion</strong> is a platform that helps to make fashion <br />
            accessible to all & brings fashion to your doorstep!
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
            Shop collections
          </button>
        </div>

        {/* Images Section */}
        <div className="flex space-x-4">
          {/* First Image */}
          <div
            style={{
              width: '300px',
              height: '570px',
              borderRadius: '150px',
              marginLeft: '-30px', // Adjusted to move it slightly to the left
              overflow: 'hidden',
            }}
            className="relative"
          >
            <img
              src={person1}
              alt="Fashion 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second Image */}
          <div
            style={{
              width: '269px',
              height: '483px',
              borderRadius: '131px',
              overflow: 'hidden',
            }}
            className="relative"
          >
            <img
              src={person2}
              alt="Fashion 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;

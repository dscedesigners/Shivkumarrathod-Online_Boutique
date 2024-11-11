import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for navigation
import person1 from '../../Utiles/person1.jpg'; 
import person2 from '../../Utiles/person1.jpg';
import person3 from '../../Utiles/person1.jpg'; // Add the third image (you can use a different image)

const Showcase = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className="bg-[linear-gradient(114.91deg,_#BEE2EF_7.73%,_#73C1DE_103.62%)] text-white p-8" style={{ height: '750px' }}>
      <div className="container mx-auto px-10 flex justify-between items-start space-x-10 relative">
        
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
          {/* Link component for navigation with scroll to top */}
          <Link to="/products" onClick={handleScrollToTop}>
            <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
              Shop collections
            </button>
          </Link>
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

      {/* Glass Effect Box Overlapping the Large Image */}
      <div className="absolute top-[calc(100%-150px)] right-0 flex justify-center items-center w-[50%] z-10">
        <div className="p-4 bg-white/20 backdrop-blur-lg rounded-lg w-full max-w-[350px]">
          <div className="flex justify-between gap-4">
            {/* Small Image 1 */}
            <div className="flex justify-center items-center">
              <img
                src={person1}
                alt="Fashion 1"
                className="w-16 h-16 object-cover rounded-lg shadow-lg"
              />
            </div>
            {/* Small Image 2 */}
            <div className="flex justify-center items-center">
              <img
                src={person2}
                alt="Fashion 2"
                className="w-16 h-16 object-cover rounded-lg shadow-lg"
              />
            </div>
            {/* Small Image 3 */}
            <div className="flex justify-center items-center">
              <img
                src={person3}
                alt="Fashion 3"
                className="w-16 h-16 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;

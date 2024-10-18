import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] sm:w-[28rem]">
        {/* Form Heading */}
        <h2 className="text-3xl font-bold text-center mb-5">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </h2>

        {/* Google Sign In */}
        <button className="flex items-center justify-center w-full p-2 border border-gray-300 rounded-lg hover:bg-gray-100 mb-5">
          <FaGoogle className="mr-2 text-red-600" />
          {isSignUp ? 'Sign Up with Google' : 'Sign In with Google'}
        </button>

        {/* Divider */}
        <div className="text-center mb-5">
          <span className="text-gray-400">or</span>
        </div>

        {/* Email Form */}
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter your password"
            />
          </div>

          {/* Confirm Password for SignUp */}
          {isSignUp && (
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Confirm your password"
              />
            </div>
          )}

          {/* Submit Button */}
          <button className="w-full bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition duration-300">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        {/* Toggle between Sign In / Sign Up */}
        <div className="text-center mt-4">
          {isSignUp ? (
            <p className="text-sm">
              Already have an account?{' '}
              <span
                onClick={toggleAuthMode}
                className="text-orange-500 font-semibold cursor-pointer"
              >
                Sign In
              </span>
            </p>
          ) : (
            <p className="text-sm">
              Don’t have an account?{' '}
              <span
                onClick={toggleAuthMode}
                className="text-orange-500 font-semibold cursor-pointer"
              >
                Sign Up
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;

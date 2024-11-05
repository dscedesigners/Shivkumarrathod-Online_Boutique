import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white border-b border-white shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link to="/">LOGO</Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/products" className="hover:text-gray-400">Products</Link>
        <Link to="/contact" className="hover:text-gray-400">Contact</Link>
      </div>

      {/* Icons and Button */}
      <div className="flex items-center space-x-6">
        {/* Search */}
        <div className="flex items-center space-x-1 hover:text-gray-400 cursor-pointer">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"></path>
          </svg>
          <span>Search</span>
        </div>

        {/* Cart */}
        <div className="flex items-center space-x-1 hover:text-gray-400 cursor-pointer">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4m-.9 8l-1.5 6h13M6 16h.01M10 16h.01"></path>
          </svg>
          <span>Cart</span>
        </div>

        {/* Get Started Button */}
        <Link to="/account">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Get Started
          </button>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center">
        <button className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Nav;

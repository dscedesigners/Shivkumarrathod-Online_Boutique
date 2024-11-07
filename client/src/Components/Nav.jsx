import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom"; // Import useLocation for getting the current path
import person1 from '../Utiles/AuthImage.jpg';

const Nav = () => {
  const location = useLocation(); // Get the current path

  // Function to determine if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white text-gray-800 w-full border-b border-gray-200">
      {/* Logo Section */}
      <div className="flex items-center space-x-2 text-2xl font-bold text-blue-800">
        <span className="rounded-full p-2 bg-white">
          <img src={person1} alt="logo" className="h-8 w-8 rounded-full" />
        </span>
        <span>StarFashion</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-8 text-lg">
        {["Home", "Products", "Contact"].map((item) => (
          <li
            key={item}
            className={`hover:text-blue-900 ${
              isActive(item === "Home" ? "/" : `/${item.toLowerCase()}`)
                ? "text-blue-900 border-b-2 border-blue-900 font-semibold"
                : "text-blue-800"
            }`}
          >
            <Link
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="pb-2 transition-all"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Search, Cart, and Login */}
      <div className="flex items-center space-x-6">
        {/* Search Box */}
        <div className="flex items-center border-b border-gray-700">
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-transparent placeholder-gray-700"
          />
          <FaSearch className="text-gray-600 ml-2" />
        </div>

        {/* Shopping Cart */}
        <FaShoppingCart className="text-2xl text-gray-800" />

        {/* Login Button */}
        <button className="px-4 py-1 rounded-full bg-blue-800 text-white font-semibold hover:bg-blue-900">
          <Link to="/account">Login</Link>
        </button>
      </div>
    </nav>
  );
};

export default Nav;

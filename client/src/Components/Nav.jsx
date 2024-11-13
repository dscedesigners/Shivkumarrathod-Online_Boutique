import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import person1 from '../Utiles/AuthImage.jpg';

const Nav = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const isActive = (path) => location.pathname === path;

  const handleLogin = () => {
    // Simulate successful login
    setIsLoggedIn(true);
    setShowProfileMenu(false); // Hide menu on login
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowProfileMenu(false); // Hide menu on logout
  };

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

      {/* Search, Cart, and Auth Options */}
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

        {/* Shopping Cart Link */}
        <Link to="/cart">
          <FaShoppingCart className="text-2xl text-gray-800" />
        </Link>

        {/* Login/SignUp or Profile Icon */}
        {!isLoggedIn ? (
          <button
            onClick={handleLogin}
            className="px-4 py-1 rounded-full bg-blue-800 text-white font-semibold hover:bg-blue-900"
          >
            <Link to="/account">Sign Up</Link>
          </button>
        ) : (
          <div className="relative">
            <FaUserCircle
              className="text-2xl cursor-pointer text-blue-800"
              onClick={() => setShowProfileMenu((prev) => !prev)}
            />
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                <button
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;

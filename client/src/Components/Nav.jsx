import React, { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for routing

const Nav = () => {
  const [active, setActive] = useState("Home");

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-[linear-gradient(114.91deg,_#BEE2EF_7.73%,_#73C1DE_103.62%)] text-white w-full border-b border-white">
      {/* Logo Section */}
      <div className="flex items-center space-x-2 text-2xl font-bold text-blue-800">
        <span className="rounded-full p-2 bg-white">
          <img src="path/to/logo.png" alt="logo" className="h-8 w-8" />
        </span>
        <span>StarFashion</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-8 text-lg">
        {["Home", "Products", "Contact"].map((item) => (
          <li
            key={item}
            className={`hover:text-blue-900 ${
              active === item
                ? "text-blue-900 border-b-2 border-blue-900 font-semibold"
                : "text-blue-800"
            }`}
          >
            <Link
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setActive(item)}
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

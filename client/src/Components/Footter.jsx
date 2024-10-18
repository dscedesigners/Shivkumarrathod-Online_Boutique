import React from 'react';
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-5">

        {/* About Us */}
        <div>
          <h2 className="font-bold text-xl mb-4">About Us</h2>
          <p className="text-gray-400">
            Welcome to our exclusive online boutique. Discover timeless pieces, 
            unique accessories, and the latest fashion trends, all curated for your style.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="font-bold text-xl mb-4">Useful Links</h2>
          <ul>
            <li className="mb-2"><Link to="/shop" className="text-gray-400 hover:text-orange-500">Shop</Link></li>
            <li className="mb-2"><Link to="/about" className="text-gray-400 hover:text-orange-500">About Us</Link></li>
            <li className="mb-2"><Link to="/contact" className="text-gray-400 hover:text-orange-500">Contact</Link></li>
            <li className="mb-2"><Link to="/faq" className="text-gray-400 hover:text-orange-500">FAQ</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="font-bold text-xl mb-4">Contact Us</h2>
          <p className="text-gray-400">Email: support@boutique.com</p>
          <p className="text-gray-400">Phone: +123 456 789</p>
          <p className="text-gray-400">Address: 123 Fashion St., New York, NY</p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="font-bold text-xl mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <Link to="#" className="hover:text-orange-500">
              <FiInstagram size={24} />
            </Link>
            <Link to="#" className="hover:text-orange-500">
              <FiFacebook size={24} />
            </Link>
            <Link to="#" className="hover:text-orange-500">
              <FiTwitter size={24} />
            </Link>
            <Link to="#" className="hover:text-orange-500">
              <FaGithub size={24} />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center">
        <p className="text-gray-500">© 2024 Online Boutique. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

function Footer() {
  return (
    <footer className="bg-[linear-gradient(94.1deg,_#010037_-39.59%,_#6B8B90_99.19%)] text-white p-8">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Footer content in 5 sections */}
        <div className="flex flex-wrap justify-between text-center md:text-left space-y-4 md:space-y-0">
          {/* Sign Up and Save Section */}
          <div className="w-full md:w-1/5 mb-6">
            <h2 className="text-lg font-semibold mb-4">SIGN UP AND SAVE</h2>
            <ul className="space-y-2 mt-2">
              <li className="text-sm">Subscribe to get special offers,<br></br> free giveaways, and <br></br>once-in-a-lifetime deals.</li>
            <li><form className="mt-4 flex justify-center items-center space-x-2">
              <input type="email" placeholder="Enter your email" className="p-1 text-sm bg-transparent text-white focus:outline-none border-b-2 border-white"/>
              <button className="text-sm text-white hover:text-blue-600">
                Sub
              </button>
            </form></li>
            </ul>
          </div>
          
          {/* Location Section */}
          <div className="w-full md:w-1/5 mb-6">
            <h3 className="font-semibold">LOCATION</h3>
            <ul className="space-y-2 mt-2">
            <li>007, James Bond Street, London, England.</li>
            <li>Mon-Sat: 10AM - 9PM</li>
            <li>Sun: Closed</li>
            </ul>
          </div>

          {/* About Section */}
          <div className="w-full md:w-1/5 mb-6">
            <h3 className="font-semibold">About</h3>
            <ul className="space-y-2 mt-2">
              <li>Tailoring</li>
              <li>Orders</li>
              <li>Made-to-Measure</li>
              <li>Services</li>
              <li>Weddings</li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div className="w-full md:w-1/5 mb-6">
            <h3 className="font-semibold">FAQ</h3>
            <ul className="space-y-2 mt-2">
              <li>Returns</li>
              <li>Start a Return or Exchange</li>
              <li>Gifts</li>
              <li>Made-to-Order</li>
            </ul>
          </div>

          {/* Policies Section */}
          <div className="w-full md:w-1/5 mb-6">
            <h3 className="font-semibold">POLICIES</h3>
            <ul className="space-y-2 mt-2">
              <li>Terms and Conditions</li>
              <li>Privacy and Policy</li>
              <li>Refund Policy</li>
              <li>Contact</li>
            </ul>
            <p className="mt-4">Sun: Closed</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <p className="text-center mt-8 text-gray-500">
          © 2024 StarFashion. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

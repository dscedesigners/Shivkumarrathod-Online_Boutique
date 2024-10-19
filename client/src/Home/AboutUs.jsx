import React from 'react';
import Logo from '../Utiles/Logo.png'; // Replace with your image path

const AboutUs = () => {
  return (
    <section className="py-10 ">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <img
              src={Logo}
              alt="Our Boutique"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-10">
            <p className="text-gray-700 mb-4">
              Welcome to our online boutique, where we believe in making fashion accessible and enjoyable for everyone. Our collection features a curated selection of stylish apparel, accessories, and unique pieces tailored to suit every taste and occasion.
            </p>
            <p className="text-gray-700 mb-4">
              Our mission is to empower individuals through fashion, helping you express your unique style with confidence. We are committed to providing high-quality products and exceptional customer service, ensuring that your shopping experience is seamless and enjoyable.
            </p>
            <p className="text-gray-700 mb-4">
              Join us on our journey to discover the latest trends and timeless designs. Thank you for being a part of our community, and we look forward to serving you!
            </p>
            <p className="text-gray-700 font-semibold">
              — The Boutique Team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

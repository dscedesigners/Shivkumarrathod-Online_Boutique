import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Importing arrow icons
import product1 from '../../utiles/person1.jpg'; 
import product2 from '../../utiles/person2.jpg'; 
import product3 from '../../utiles/person1.jpg'; 
import product4 from '../../utiles/person2.jpg'; 
import product5 from '../../utiles/person1.jpg'; 
import product6 from '../../utiles/person2.jpg'; 

const products = [
  { id: 1, image: product1 },
  { id: 2, image: product2 },
  { id: 3, image: product3 },
  { id: 4, image: product4 },
  { id: 5, image: product5 },
  { id: 6, image: product6 },
];

function Products() {
  const [currentIndex, setCurrentIndex] = useState(2);  // Start with the middle image

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  // Create an array of 3 visible images, centered around the current image
  const visibleImages = [
    products[(currentIndex - 1 + products.length) % products.length],
    products[currentIndex],
    products[(currentIndex + 1) % products.length],
  ];

  return (
    <section id="products" className="p-16 bg-blue-50" style={{ height: '600px' }}>
      <h2 className="text-4xl font-bold text-center text-black mb-8">Men's Collection</h2>

      <div className="relative mt-8"> {/* Added mt-8 to move the image container down */}
        {/* Left Arrow */}
        <button 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-4xl text-black opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out"
          onClick={goToPrev}
        >
          <FiChevronLeft />
        </button>

        {/* Image Container */}
        <div className="flex items-center justify-center space-x-12 overflow-hidden">
          {visibleImages.map((product, index) => {
            let widthClass = "w-72";  // Default width for side images
            let scaleClass = "scale-90";  // Default scale for side images
            let borderRadiusClass = "rounded-lg";  // Apply rounded corners to all images

            if (index === 1) {
              // The middle image (larger with rounded corners)
              widthClass = "w-96";  // Larger width for the middle image
              scaleClass = "scale-110";  // Larger scale for the middle image
            }

            return (
              <div key={product.id} className={`transition-all duration-500 ease-in-out ${widthClass} ${scaleClass}`}>
                <img 
                  src={product.image} 
                  alt={`Product ${product.id}`} 
                  className={`w-full h-96 object-cover ${borderRadiusClass} shadow-lg`}  // Increased height for the images
                />
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-4xl text-black opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out"
          onClick={goToNext}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Products;

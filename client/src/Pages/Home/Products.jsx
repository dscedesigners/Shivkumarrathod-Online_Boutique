import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Arrow icons
import product1 from '../../Utiles/person1.jpg';
import product2 from '../../Utiles/person2.jpg';
import product3 from '../../Utiles/person1.jpg';
import product4 from '../../Utiles/person2.jpg';
import product5 from '../../Utiles/person1.jpg';
import product6 from '../../Utiles/person2.jpg';

const products = [
  { id: 1, image: product1 },
  { id: 2, image: product2 },
  { id: 3, image: product3 },
  { id: 4, image: product4 },
  { id: 5, image: product5 },
  { id: 6, image: product6 },
];

function Products() {
  const [currentIndex, setCurrentIndex] = useState(2); // Start in the middle image
  const [isAutoSliding, setIsAutoSliding] = useState(true); // Track auto-sliding state

  // Auto-slide effect
  useEffect(() => {
    if (!isAutoSliding) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length); // Move to next image
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [isAutoSliding]);

  // Go to next image
  const goToNext = () => {
    setIsAutoSliding(false); // Stop auto-sliding
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  // Go to previous image
  const goToPrev = () => {
    setIsAutoSliding(false); // Stop auto-sliding
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  // Create visible images (prev, current, next)
  const visibleImages = [
    products[(currentIndex - 1 + products.length) % products.length],
    products[currentIndex],
    products[(currentIndex + 1) % products.length],
  ];

  return (
    <section id="products" className="p-16 bg-blue-50">
      <h2 className="text-4xl font-bold text-center text-black mb-8">Men's Collection</h2>

      <div className="relative mt-8">
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
            let widthClass = 'w-72'; // Default width for side images
            let scaleClass = 'scale-90'; // Default scale for side images
            let borderRadiusClass = 'rounded-lg'; // Default border radius for side images

            if (index === 1) {
              widthClass = 'w-96'; // Middle image is larger
              scaleClass = 'scale'; // Middle image is scaled up
              borderRadiusClass = 'rounded-xl'; // Apply 15px border radius to middle image
            }

            return (
              <div
                key={product.id}
                className={`transition-all transform duration-300 ease-in-out ${widthClass} ${scaleClass}`}
              >
                <img
                  src={product.image}
                  alt={`Product ${product.id}`}
                  className={`w-full h-96 object-cover ${borderRadiusClass} shadow-lg`}
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

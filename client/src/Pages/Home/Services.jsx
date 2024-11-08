import React from 'react';
import person1 from '../../utiles/person1.jpg';
import person2 from '../../utiles/person2.jpg';
import person3 from '../../utiles/person1.jpg';
import person4 from '../../utiles/person2.jpg';
import person5 from '../../utiles/person1.jpg';
import person6 from '../../utiles/person2.jpg';
import person7 from '../../utiles/person1.jpg';
import person8 from '../../utiles/person2.jpg';

function Services() {
  const images = [person1, person2, person3, person4, person5, person6, person7, person8];

  return (
    <section className="p-10 bg-gradient-to-b from-white to-blue-200 w-full">
      <h2 className="text-3xl font-bold text-center text-black mb-8">Services</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div key={index} className="group relative mb-8 overflow-hidden rounded">
            <div className="group relative mb-8 overflow-hidden rounded">
              <img
                src={image}
                alt={`Men's service ${index + 1}`}
                className="w-full h-[25rem] object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:object-center"
              />
            </div>
            <p className="text-center text-blue-900 font-semibold mt-3">Men's</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  
}

export default Services;

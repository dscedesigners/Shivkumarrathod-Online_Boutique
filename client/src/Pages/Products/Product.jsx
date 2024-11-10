import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from react-icons
import Nav from "../../Components/Nav"; // Import Navbar
import Footer from "../../Components/Footter"; // Corrected spelling of Footer
import ProductFilters from "./ProductFilters"; // Separate Filters Component
import ProductCard from "./ProductCard"; // Separate ProductCard Component
import AuthImage from "../../Utiles/AuthImage.jpg";
import BgRegImg from "../../Utiles/BgRegImg.jpg";
import RegBgImg from "../../Utiles/RegBgImg.jpg";
import TailorReg from "../../Utiles/TailorReg.jpg";
import person1 from "../../Utiles/person1.jpg";
import person2 from "../../Utiles/person2.jpg";
import LandingPageImage from "../../Utiles/LandingPageImage.png";
import Ipi from "../../Utiles/lpi.jpg";


const products = [
  {
    id: 1,
    name: "Custom Tailored Suit",
    price: 150,
    gender: "Men",
    category: "Formal",
    brand: "Elegant Attire",
    size: "M",
    color: "Charcoal Gray",
    imageUrl: TailorReg,  // Replaced with imported image
    description: "A premium custom-tailored suit for a sophisticated look.",
    questions: ['What is the fabric used?', 'Can this be custom-fitted?'],
    reviews: [
      { username: 'Alex Johnson', rating: 5, comment: 'Perfect fit and great quality!' },
      { username: 'Emily Davis', rating: 4, comment: 'Nice suit, but it took a bit longer than expected.' },
    ]
  },
  {
    id: 2,
    name: "Custom Tailored Suit",
    price: 150,
    gender: "Men",
    category: "Formal",
    brand: "Elegant Attire",
    size: "L",
    color: "Charcoal Gray",
    imageUrl: person1,  // Replaced with imported image
    description: "A premium custom-tailored suit for a sophisticated look.",
    questions: ['What is the fabric used?', 'Can this be custom-fitted?'],
    reviews: [
      { username: 'Michael Scott', rating: 5, comment: 'Loved it, feels like it was made just for me!' },
      { username: 'Pam Beesly', rating: 4, comment: 'Great, but I had to wait a bit longer for delivery.' },
    ]
  },
  {
    id: 3,
    name: "Custom Tailored Suit",
    price: 150,
    gender: "Men",
    category: "Formal",
    brand: "Elegant Attire",
    size: "S",
    color: "Charcoal Gray",
    imageUrl: person2,  // Replaced with imported image
    description: "A premium custom-tailored suit for a sophisticated look.",
    questions: ['What is the fabric used?', 'Can this be custom-fitted?'],
    reviews: [
      { username: 'Jim Halpert', rating: 5, comment: 'Perfect for my wedding! Fits great.' },
      { username: 'Dwight Schrute', rating: 4, comment: 'It was a good fit, but I was expecting something more unique.' },
    ]
  },
  {
    id: 4,
    name: "Custom Tailored Suit",
    price: 150,
    gender: "Men",
    category: "Formal",
    brand: "Elegant Attire",
    size: "M",
    color: "Charcoal Gray",
    imageUrl: BgRegImg,  // Replaced with imported image
    description: "A premium custom-tailored suit for a sophisticated look.",
    questions: ['What is the fabric used?', 'Can this be custom-fitted?'],
    reviews: [
      { username: 'Stanley Hudson', rating: 5, comment: 'Good quality and nice fabric.' },
      { username: 'Ryan Howard', rating: 3, comment: 'It’s okay, but it could be more stylish.' },
    ]
  },
  {
    id: 5,
    name: "Custom Tailored Suit",
    price: 150,
    gender: "Men",
    category: "Formal",
    brand: "Elegant Attire",
    size: "L",
    color: "Charcoal Gray",
    imageUrl: RegBgImg,  // Replaced with imported image
    description: "A premium custom-tailored suit for a sophisticated look.",
    questions: ['What is the fabric used?', 'Can this be custom-fitted?'],
    reviews: [
      { username: 'Toby Flenderson', rating: 5, comment: 'Excellent product, very comfortable.' },
      { username: 'Angela Martin', rating: 4, comment: 'Good, but I would have liked a different color option.' },
    ]
  },
  {
    id: 6,
    name: "Custom Tailored Suit",
    price: 150,
    gender: "Men",
    category: "Formal",
    brand: "Elegant Attire",
    size: "M",
    color: "Charcoal Gray",
    imageUrl: Ipi,  // Replaced with imported image
    description: "A premium custom-tailored suit for a sophisticated look.",
    questions: ['What is the fabric used?', 'Can this be custom-fitted?'],
    reviews: [
      { username: 'Kelly Kapoor', rating: 5, comment: 'Amazing suit! I feel like a star in it.' },
      { username: 'Phyllis Vance', rating: 4, comment: 'Nice suit, but I would prefer a lighter shade.' },
    ]
  },
  {
    id: 7,
    name: "Custom Tailored Suit",
    price: 150,
    gender: "Men",
    category: "Formal",
    brand: "Elegant Attire",
    size: "L",
    color: "Charcoal Gray",
    imageUrl: LandingPageImage,  // Replaced with imported image
    description: "A premium custom-tailored suit for a sophisticated look.",
    questions: ['What is the fabric used?', 'Can this be custom-fitted?'],
    reviews: [
      { username: 'Oscar Martinez', rating: 5, comment: 'This suit is perfect for a formal event!' },
      { username: 'Meredith Palmer', rating: 4, comment: 'Good quality but I expected better craftsmanship.' },
    ]
  },
  {
    id: 8,
    name: "Custom Tailored Suit",
    price: 150,
    gender: "Men",
    category: "Formal",
    brand: "Elegant Attire",
    size: "S",
    color: "Charcoal Gray",
    imageUrl: AuthImage,  // Replaced with imported image
    description: "A premium custom-tailored suit for a sophisticated look.",
    questions: ['What is the fabric used?', 'Can this be custom-fitted?'],
    reviews: [
      { username: 'Jim Halpert', rating: 5, comment: 'This is exactly what I was looking for.' },
      { username: 'Phyllis Vance', rating: 4, comment: 'I like it, but it could have been more unique.' },
    ]
  }
];


const ProductList = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [priceRange, setPriceRange] = useState(200);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handlePriceChange = (event) => {
    setPriceRange(event.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Nav /> {/* Navbar added here */}
      <h1 className="text-center mt-5 font-bold text-2xl md:text-3xl tracking-[5px]">
        Products
      </h1>

      <div className="flex justify-between items-center mt-4">
        <h2 className="font-semibold text-[#24107D] text-xl ml-5 md:text-2xl">Filters</h2>
        <div className="flex items-center text-[#1D55C1] font-semibold rounded-full border-2 border-[#73C1DE] px-3 cursor-pointer mr-5">
          <p className="mr-2">Sort by:</p>
          <select className="bg-transparent p-2 focus:outline-none">
            <option value="All">All</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-4">
        {/* Toggle Button for Small Screens */}
        <button
          className="md:hidden p-4 bg-gray-800 text-white flex items-center"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Sidebar for Filters */}
        <ProductFilters
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          priceRange={priceRange}
          handlePriceChange={handlePriceChange}
        />

        {/* Main Section for Products */}
        <main className="w-full md:w-3/4 lg:w-4/5 p-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </main>
      </div>

      <Footer /> {/* Footer added here */}
    </div>
  );
};

export default ProductList;

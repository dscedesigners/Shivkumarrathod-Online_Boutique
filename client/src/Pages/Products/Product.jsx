import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from react-icons
import Nav from "../../Components/Nav"; // Import Navbar
import Footer from "../../Components/Footter"; // Corrected spelling of Footer
import ProductFilters from "./ProductFilters"; // Separate Filters Component
import ProductCard from "./ProductCard"; // Separate ProductCard Component
import image1 from "../../Utiles/TailorReg.jpg"


const products = [
  {
    id: 1,
    name: "Tailored Suit",
    price: 120,
    gender: "Men",
    category: "Formal",
    brand: "Brand A",
    size: "M",
    color: "Black",
    imageUrl: image1,
    description: "A custom-made elegant suit.",
  },
  {
    id: 2,
    name: "Tailored Suit",
    price: 120,
    gender: "Men",
    category: "Formal",
    brand: "Brand A",
    size: "M",
    color: "Black",
    imageUrl: image1,
    description: "A custom-made elegant suit.",
  },
  {
    id: 3,
    name: "Tailored Suit",
    price: 120,
    gender: "Men",
    category: "Formal",
    brand: "Brand A",
    size: "M",
    color: "Black",
    imageUrl: image1,
    description: "A custom-made elegant suit.",
  },{
    id: 4,
    name: "Tailored Suit",
    price: 120,
    gender: "Men",
    category: "Formal",
    brand: "Brand A",
    size: "M",
    color: "Black",
    imageUrl: image1,
    description: "A custom-made elegant suit.",
  },
  {
    id: 5,
    name: "Tailored Suit",
    price: 120,
    gender: "Men",
    category: "Formal",
    brand: "Brand A",
    size: "M",
    color: "Black",
    imageUrl: image1,
    description: "A custom-made elegant suit.",
  },
  {
    id: 6,
    name: "Tailored Suit",
    price: 120,
    gender: "Men",
    category: "Formal",
    brand: "Brand A",
    size: "M",
    color: "Black",
    imageUrl: image1,
    description: "A custom-made elegant suit.",
  },
  {
    id: 7,
    name: "Tailored Suit",
    price: 120,
    gender: "Men",
    category: "Formal",
    brand: "Brand A",
    size: "M",
    color: "Black",
    imageUrl: image1,
    description: "A custom-made elegant suit.",
  },
  {
    id: 8,
    name: "Tailored Suit",
    price: 120,
    gender: "Men",
    category: "Formal",
    brand: "Brand A",
    size: "M",
    color: "Black",
    imageUrl: image1,
    description: "A custom-made elegant suit.",
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

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
    name: "Classic Black Suit",
    price: 180,
    gender: "Men",
    category: "Formal",
    brand: "Sharp Styles",
    size: "M",
    color: "Black",
    imageUrl: [TailorReg, person1, person2, LandingPageImage, Ipi, BgRegImg, RegBgImg, AuthImage], // All images for this product
    description: "A classic black suit that is just perfect for all your formal occasions",
    questions: ['Is this suit suitable for outdoor events?', 'What fabric is used?'],
    reviews: [
      { username: 'John Doe', rating: 5, comment: 'Amazing quality and perfect fit!' },
      { username: 'Jane Smith', rating: 4, comment: 'Great suit but the shipping took longer than expected.' },
    ]
  },
  {
    id: 2,
    name: "Blue Pinstripe Suit",
    price: 200,
    gender: "Men",
    category: "Business",
    brand: "Executive Couture",
    size: "L",
    color: "Navy Blue",
    imageUrl: [TailorReg, person1, person2, LandingPageImage, Ipi, BgRegImg, RegBgImg, AuthImage], // All images for this product
    description: "Navy blue pinstripe suit that brings confidence to your business look.",
    questions: ['Is it wrinkle-resistant?', 'Does it include a vest?'],
    reviews: [
      { username: 'Michael Scott', rating: 5, comment: 'Perfect for business meetings!' },
      { username: 'Pam Beesly', rating: 4, comment: 'Nice suit but it could use a pocket square.' },
    ]
  },
  {
    id: 3,
    name: "Charcoal Gray Blazer",
    price: 120,
    gender: "Men",
    category: "Casual",
    brand: "Urban Gentleman",
    size: "S",
    color: "Charcoal Gray",
    imageUrl: [TailorReg, person1, person2, LandingPageImage, Ipi, BgRegImg, RegBgImg, AuthImage], // All images for this product
    description: "A versatile charcoal gray blazer suitable for both casual and semi-formal events.",
    questions: ['Does it pair well with jeans?', 'Is it lightweight?'],
    reviews: [
      { username: 'Jim Halpert', rating: 5, comment: 'Great fit and versatile style.' },
      { username: 'Dwight Schrute', rating: 3, comment: 'Good, but a bit tight in the shoulders.' },
    ]
  },
  {
    id: 4,
    name: "White Linen Suit",
    price: 220,
    gender: "Men",
    category: "Summer",
    brand: "Breezy Couture",
    size: "M",
    color: "White",
    imageUrl: [TailorReg, person1, person2, LandingPageImage, Ipi, BgRegImg, RegBgImg, AuthImage], // All images for this product
    description: "A lightweight white linen suit, perfect for warm weather occasions.",
    questions: ['Is it machine washable?', 'Does it come with matching pants?'],
    reviews: [
      { username: 'Stanley Hudson', rating: 5, comment: 'Very comfortable and breathable.' },
      { username: 'Ryan Howard', rating: 3, comment: 'Nice suit but stains easily.' },
    ]
  },
  {
    id: 5,
    name: "Modern Slim Fit Suit",
    price: 210,
    gender: "Men",
    category: "Trendy",
    brand: "Sleek Attire",
    size: "L",
    color: "Light Gray",
    imageUrl: [TailorReg, person1, person2, LandingPageImage, Ipi, BgRegImg, RegBgImg, AuthImage], // All images for this product
    description: "A trendy slim fit suit that brings a modern edge to your wardrobe.",
    questions: ['Is it suitable for tall individuals?', 'Can the pants be altered?'],
    reviews: [
      { username: 'Toby Flenderson', rating: 5, comment: 'Fits great and looks sharp.' },
      { username: 'Angela Martin', rating: 4, comment: 'Good, but could use a wider color selection.' },
    ]
  },
  {
    id: 6,
    name: "Velvet Dinner Jacket",
    price: 230,
    gender: "Men",
    category: "Formal",
    brand: "Night Out Couture",
    size: "M",
    color: "Burgundy",
    imageUrl: [TailorReg, person1, person2, LandingPageImage, Ipi, BgRegImg, RegBgImg, AuthImage], // All images for this product
    description: "Luxurious velvet dinner jacket ideal for upscale evening events.",
    questions: ['Is it dry-clean only?', 'Does it come in other colors?'],
    reviews: [
      { username: 'Kelly Kapoor', rating: 5, comment: 'Stunning jacket! Makes me feel fancy.' },
      { username: 'Phyllis Vance', rating: 4, comment: 'Love the color, but it’s a bit heavy.' },
    ]
  },
  {
    id: 7,
    name: "Classic Tuxedo",
    price: 250,
    gender: "Men",
    category: "Black Tie",
    brand: "Formal Flair",
    size: "L",
    color: "Black",
    imageUrl: [TailorReg, person1, person2, LandingPageImage, Ipi, BgRegImg, RegBgImg, AuthImage], // All images for this product
    description: "A timeless tuxedo perfect for black-tie events.",
    questions: ['Does it come with a cummerbund?', 'Can the pants be hemmed?'],
    reviews: [
      { username: 'Oscar Martinez', rating: 5, comment: 'Ideal tux for formal occasions.' },
      { username: 'Meredith Palmer', rating: 4, comment: 'Nice tux but needs better lapel options.' },
    ]
  },
  {
    id: 8,
    name: "Casual Blazer",
    price: 140,
    gender: "Men",
    category: "Casual",
    brand: "Relaxed Fit",
    size: "S",
    color: "Light Blue",
    imageUrl: [TailorReg, person1, person2, LandingPageImage, Ipi, BgRegImg, RegBgImg, AuthImage], // All images for this product
    description: "A light blue casual blazer for a relaxed yet stylish look.",
    questions: ['Does it have interior pockets?', 'Is it stretchable?'],
    reviews: [
      { username: 'Jim Halpert', rating: 5, comment: 'Perfect for casual Fridays.' },
      { username: 'Phyllis Vance', rating: 4, comment: 'I like it, but the color could be deeper.' },
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

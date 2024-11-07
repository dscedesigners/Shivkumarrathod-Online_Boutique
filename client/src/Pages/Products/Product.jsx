import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from react-icons
import image1 from "../../Utiles/TailorReg.jpg";
import image2 from "../../Utiles/RegBgImg.jpg";
import { FiShoppingCart } from "react-icons/fi";
import Nav from "../../Components/Nav"; // Import Navbar

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
    name: "Kids' T-Shirt",
    price: 20,
    gender: "Kids",
    category: "Casual",
    brand: "Brand B",
    size: "S",
    color: "Blue",
    imageUrl: image2,
    description: "A comfortable kids' t-shirt.",
  },
  // Add more products as needed
];

const ProductList = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [priceRange, setPriceRange] = useState(200); // Initial price range value

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handlePriceChange = (event) => {
    setPriceRange(event.target.value);
  };

  return (
    <div className="container mx-auto px-4">
      <Nav /> {/* Navbar added here */}
      <h1 className="text-center mt-5 font-bold text-2xl md:text-3xl tracking-[5px]">
        Products
      </h1>

      <div className="flex justify-between items-center mt-4">
        <h2 className="font-semibold text-[#24107D] text-xl md:text-2xl">
          Filters
        </h2>
        <div className="flex items-center text-[#1D55C1] font-semibold rounded-full border-2 border-[#73C1DE] px-3 cursor-pointer">
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
        <aside
          className={`fixed top-0 left-0 w-64 h-full bg-white p-4 overflow-y-auto z-50 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:relative md:translate-x-0 md:w-1/4 lg:w-1/5`}
        >
          {/* Filters */}
          <div className="mb-4">
            <h3 className="font-medium">Category</h3>
            <ul className="ml-4 space-y-2">
              <li>
                <label>
                  <input type="checkbox" className="mr-2" /> Formal Wear
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" className="mr-2" /> Casual Wear
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" className="mr-2" /> Sportswear
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" className="mr-2" /> Accessories
                </label>
              </li>
            </ul>
          </div>

          {/* Price Filter */}
          <div className="mb-4">
            <h3 className="font-medium">Price Range</h3>
            <input
              type="range"
              min="0"
              max="200"
              value={priceRange}
              onChange={handlePriceChange}
              className="w-full"
            />
            <p className="text-sm">Up to: ${priceRange}</p>
          </div>

          {/* Brand Filter */}
          <div className="mb-4">
            <h3 className="font-medium">Brand</h3>
            <ul className="space-y-2">
              <li>
                <label>
                  <input type="checkbox" className="mr-2" /> Brand A
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" className="mr-2" /> Brand B
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" className="mr-2" /> Brand C
                </label>
              </li>
            </ul>
          </div>

          {/* Size Filter */}
          <div className="mb-4">
            <h3 className="font-medium">Size</h3>
            <ul className="space-y-2">
              <li>
                <label>
                  <input type="checkbox" className="mr-2" /> S
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" className="mr-2" /> M
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" className="mr-2" /> L
                </label>
              </li>
            </ul>
          </div>

          {/* Color Filter */}
          <div className="mb-4">
            <h3 className="font-medium">Color</h3>
            <ul className="space-y-2">
              <li>
                <label>
                  <input type="checkbox" className="mr-2" /> Black
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" className="mr-2" /> Blue
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" className="mr-2" /> White
                </label>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Section for Products */}
        <main className="w-full md:w-3/4 lg:w-4/5 p-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="p-4 flex flex-col items-center bg-white shadow rounded-lg">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-[222px] h-[237px] object-cover mb-2 rounded-xl"
              />
              <h3 className="text-sm font-semibold">{product.name}</h3>
              <p className="text-xs text-gray-500 mb-2">{product.description}</p>
              <div className="flex justify-around items-center w-full mt-2">
                <p className="font-semibold">Rs. {product.price}</p>
                <button className="bg-[#2518BD] text-white p-2 rounded-full">
                  <FiShoppingCart size={20} />
                </button>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default ProductList;

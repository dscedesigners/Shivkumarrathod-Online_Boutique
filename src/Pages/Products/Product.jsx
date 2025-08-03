import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footter"; // Ensure correct import
import ProductFiltersPC from "./ProductFiltersPC";
import ProductFiltersMobile from "./ProductFiltersMobile";
import ProductCard from "./ProductCard"; // Product card component
import { useGetProductsQuery } from "../../redux/services/productSlice";
import { motion } from "framer-motion"; // Import animation library

const ProductList = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [priceRange, setPriceRange] = useState(200);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Fetch products from API
  const { data: products, refetch, error, isLoading } = useGetProductsQuery();
  
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleFilterDropdown = () => setIsFilterOpen(!isFilterOpen);
  const handlePriceChange = (event) => setPriceRange(event.target.value);

  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="text-center mt-5 font-bold text-2xl md:text-3xl tracking-[5px]">
        Products
      </h1>

      <div className="flex justify-between items-center mt-4">
        <h2 className="font-semibold text-[#24107D] text-xl ml-5 md:text-2xl">Filters</h2>
        
        {/* Desktop Sort By Dropdown */}
        <div className="flex items-center text-[#1D55C1] font-semibold rounded-full border-2 border-[#73C1DE] px-3 cursor-pointer mr-5">
          <p className="mr-2">Sort by:</p>
          <select className="bg-transparent p-2 focus:outline-none">
            <option value="All">All</option>
          </select>
        </div>

        {/* Mobile Filter Button */}
        <button
          className="md:hidden p-4 bg-gray-800 text-white flex items-center"
          onClick={toggleFilterDropdown}
        >
          {isFilterOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Filter Dropdown */}
      {isFilterOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3 }} 
          className="md:hidden p-4 bg-gray-200 shadow-lg mt-4"
        >
          <ProductFiltersMobile priceRange={priceRange} handlePriceChange={handlePriceChange} />
        </motion.div>
      )}

      <div className="flex flex-col md:flex-row mt-4">
        {/* PC View Filters */}
        <ProductFiltersPC
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          priceRange={priceRange}
          handlePriceChange={handlePriceChange}
        />

        {/* Main Section for Products */}
        <main className="w-full md:w-3/4 lg:w-4/5 p-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {isLoading ? (
            <p className="text-center col-span-full text-xl text-gray-500">Loading products...</p>
          ) : error ? (
            <p className="text-center col-span-full text-xl text-red-500">Error fetching products</p>
          ) : (
            products?.map((product) => (
              
              <motion.div 
                key={product._id} 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))
          )}
        </main>
      </div>

      <Footer /> {/* Footer */}
    </div>
  );
};

export default ProductList;

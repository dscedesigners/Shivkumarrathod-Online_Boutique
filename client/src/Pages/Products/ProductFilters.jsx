import React from "react";

const ProductFilters = ({ isSidebarOpen, toggleSidebar, priceRange, handlePriceChange }) => {
  return (
    <aside
      className={`fixed top-0 left-0 w-64 h-full bg-white p-4 overflow-y-auto z-50 transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 md:relative md:translate-x-0 md:w-1/4 lg:w-1/5`}
    >
      {/* Filters */}
      <div className="mb-4">
        <h3 className="font-medium">Category</h3>
        <ul className="ml-4 space-y-2">
          {["Formal Wear", "Casual Wear", "Sportswear", "Accessories"].map((category) => (
            <li key={category}>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600 border-blue-600 rounded transition duration-200"
                />
                <span>{category}</span>
              </label>
            </li>
          ))}
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
          {["Brand A", "Brand B", "Brand C"].map((brand) => (
            <li key={brand}>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600 border-blue-600 rounded transition duration-200"
                />
                <span>{brand}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Size Filter */}
      <div className="mb-4">
        <h3 className="font-medium">Size</h3>
        <ul className="space-y-2">
          {["S", "M", "L"].map((size) => (
            <li key={size}>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600 border-blue-600 rounded transition duration-200"
                />
                <span>{size}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Color Filter */}
      <div className="mb-4">
        <h3 className="font-medium">Color</h3>
        <ul className="space-y-2">
          {["Black", "Blue", "White"].map((color) => (
            <li key={color}>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600 border-blue-600 rounded transition duration-200"
                />
                <span>{color}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default ProductFilters;

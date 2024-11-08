import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

const ProductCard = ({ product }) => {
  const [count, setCount] = useState(0);

  // Handles increment and decrement
  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => {
    if (count > 1) setCount(count - 1);
    else setCount(0); // Resets to 0 to remove from cart
  };

  return (
    <div className="p-4 flex flex-col items-center bg-white shadow rounded-lg">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-[222px] h-[237px] object-cover mb-2 rounded-xl"
      />
      <h3 className="text-sm font-semibold">{product.name}</h3>
      <p className="text-xs text-gray-500 mb-2">{product.description}</p>
      <div className="flex justify-around items-center w-full mt-2">
        <p className="font-semibold">$ {product.price}</p>
        
        {count === 0 ? (
          // Show cart icon when no items are added
          <button
            className="bg-[#2518BD] text-white p-3 rounded-full"
            onClick={incrementCount}
          >
            <FiShoppingCart size={24} />
          </button>
        ) : (
          // Show larger counter with minus and plus buttons
          <div className="flex items-center bg-[#2518BD] text-white rounded-full px-2 py-1">
            <button
              onClick={decrementCount}
              className="px-3 text-white font-bold text-lg rounded-full bg-[#1B1290]"
            >
              -
            </button>
            <span className="px-6 text-lg font-semibold">{count}</span>
            <button
              onClick={incrementCount}
              className="px-3 text-white font-bold text-lg rounded-full bg-[#1B1290]"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

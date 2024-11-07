import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const ProductCard = ({ product }) => {
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
        <button className="bg-[#2518BD] text-white p-2 rounded-full">
          <FiShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

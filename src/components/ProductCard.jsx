import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const ProductCard = ({product}) => {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div
        key={product.id}
        className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
        <div className="relative w-full h-48">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-4 flex flex-col">
          <h2 className="text-lg font-semibold text-gray-800 mb-1 truncate">
            {product.name}
          </h2>
          <p className="text-gray-500 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>

          <div className="mt-auto flex items-center justify-between">
            <p className="text-lg font-bold text-indigo-600">
              ${product.price.toFixed(2)}
            </p>
            <button
              onClick={() => addToCart(product)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-lg transition-colors duration-300 cursor-pointer">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

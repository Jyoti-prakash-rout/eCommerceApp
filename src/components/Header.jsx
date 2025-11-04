import React from "react";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

import { ShoppingCart } from "lucide-react";

const Header = () => {
  const { cart } = useContext(CartContext);

  const itemsCount = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <>
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="mt-5 text-3xl text-blue-600 font-bold mb-6 font-mono">
          🛒jStore
        </h1>
        <div className="relative cursor-pointer">
          <ShoppingCart className="text-3xl text-gray-700" />
          {itemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {itemsCount}
            </span>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;

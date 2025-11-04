import React from "react";
import { useState } from "react";

import { CartContext } from "../context/CartContext";
import { useContext } from "react";

import { ShoppingCart, Trash2 } from "lucide-react";

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const itemCount = cart.reduce((acc, item) => acc + item.qty, 0);

  const total = cart
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);

  return (
    <>
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="mt-5 text-3xl text-blue-600 font-bold mb-6 font-mono">
          🛒jStore
        </h1>
        <div className="relative cursor-pointer">
          <button
            className="cursor-pointer"
            onClick={() => setShowDropDown(!showDropDown)}>
            <ShoppingCart className="text-3xl text-gray-700" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {itemCount}
              </span>
            )}
          </button>
          {showDropDown && (
            <div className="absolute right-0 mt-2 w-80 bg-white border rounded shadow-lg z-50">
              <div className="p-4">
                <h2 className="font-semibold text-lg mb-2">Cart Items</h2>
                {cart.length === 0 ? (
                  <p className="text-gray-500 text-sm">Your 🛒 is empty</p>
                ) : (
                  <>
                    <ul className="max-h-60 overflow-y-auto divide-y divide-gray-500">
                      {cart.map((item) => (
                        <li
                          className="flex justify-between items-center py-2"
                          key={item.id}>
                          <div>
                            <p className="font-semibold"> {item.name}</p>
                            <p>
                              {" "}
                              {item.qty} x ${item.price}{" "}
                            </p>
                          </div>
                          <button className="cursor-pointer">
                            <Trash2
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-600"
                            />
                          </button>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex justify-between font-semibold">
                      <span>Total:</span>
                      <span> ${total} </span>
                    </div>
                    <button
                      onClick={clearCart}
                      className="mt-3 w-full bg-red-500 text-white py-1 rounded transition cursor-pointer">
                      Clear 🛒
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;

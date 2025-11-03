import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
	const [ cart, setCart ] = useState([]);
	return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );

}


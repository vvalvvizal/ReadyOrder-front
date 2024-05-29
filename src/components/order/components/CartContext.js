import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const handleAddMenu = (id, quantity = 1) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[id]) {
        updatedCart[id] += quantity;
      } else {
        updatedCart[id] = quantity;
      }
      console.log(updatedCart);
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, handleAddMenu }}>
      {children}
    </CartContext.Provider>
  );
};

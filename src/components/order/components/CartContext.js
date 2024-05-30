import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const handleAddMenu = (id, title, image_url, price, quantity = 1) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[id]) {
        updatedCart[id].quantity += quantity;
      } else {
        updatedCart[id] = { title, image_url, price, quantity };
      }
      console.log(updatedCart);
      return updatedCart;
    });
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[id]) {
        updatedCart[id].quantity += 1;
      }
      return updatedCart;
    });
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[id]) {
        if (updatedCart[id].quantity > 1) {
          updatedCart[id].quantity -= 1;
        } else {
          delete updatedCart[id];
        }
      }
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, handleAddMenu, increaseQuantity, decreaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

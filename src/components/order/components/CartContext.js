import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const calculate = {};

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

  const removeItem = (id) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[id]) {
        updatedCart[id].quantity = 0; // 수량을 0으로 설정하여 아이템을 삭제합니다.
        delete updatedCart[id]; // 아이템을 삭제합니다.
      }
      return updatedCart;
    });
  };

  const resetItem = () => {
    setCart({});
  };
  const calculateTotal = (cart) => {
    let totalQuantity = 0;
    let totalPrice = 0;

    // 카트 객체를 순회하면서 각 아이템의 수량과 가격을 계산합니다.
    Object.values(cart).forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });

    // 계산된 총 수량과 총 가격을 객체로 반환합니다.
    return { totalQuantity, totalPrice };
  };

  const { totalQuantity, totalPrice } = calculateTotal(cart);

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddMenu,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        totalQuantity,
        totalPrice,
        resetItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

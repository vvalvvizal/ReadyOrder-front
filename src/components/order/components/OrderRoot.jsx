import React, { useEffect } from "react";
import axios from "axios";

const OrderRoot = ({ cart, tableNum }) => {
  useEffect(() => {
    const handlePost = async () => {
      const orders = Object.keys(cart).map((id) => ({
        menuItemId: id,
        quantity: cart[id].quantity,
      }));

      try {
        await axios.post(`/api/orders/${tableNum}`, { orders });
        console.log("Order submitted successfully");
      } catch (error) {
        console.error("Order submission failed", error);
      }
    };

    if (Object.keys(cart).length > 0) {
      handlePost();
    }
  }, [cart, tableNum]);

  return null;
};

export default OrderRoot;

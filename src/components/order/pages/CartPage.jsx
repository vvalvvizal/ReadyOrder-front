import React from "react";
import Header from "../../../shared/header/Header";
import Footer from "../../../shared/footer/Footer";
import "./CartPage.css";
const CartPage = () => {
  const parents = "sum_cost";
  return (
    <div>
      <div className="order-header">
        <h2>주문내역</h2>
      </div>
      <div className="content"></div>
      <Footer parents={parents} />
    </div>
  );
};
export default CartPage;

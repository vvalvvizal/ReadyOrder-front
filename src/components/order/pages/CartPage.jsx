import React from "react";
import Header from "../../../shared/header/Header";
import Footer from "../../../shared/footer/Footer";
import "./CartPage.css";
const CartPage = () => {
  const viewHeader = "push-order";
  const viewFooter = "push_order";
  return (
    <div>
      <viewHeader viewHeader={viewHeader} />
      <div className="order-header">
        <h2>장바구니</h2>
      </div>
      <div className="content"></div>
      <Footer viewFooter={viewFooter} />
    </div>
  );
};
export default CartPage;

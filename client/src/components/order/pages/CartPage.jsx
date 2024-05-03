import React from "react";
import "./CartPage.css";
const CartPage = () => {
  return (
    <div>
      <div class="navbar">
        <h1>장바구니</h1>
      </div>
      <div class="cart-container">
        <h2>장바구니 목록</h2>
        <div id="cart-items"></div>
      </div>
      <div class="footer">
        <a href="/client/menu/menu.html" class="button">
          메뉴로 돌아가기
        </a>
      </div>
    </div>
  );
};
export default CartPage;

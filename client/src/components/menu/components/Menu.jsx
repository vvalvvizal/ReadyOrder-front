import React from "react";
import "./Menu.css";
const MenuPage = () => {
  return (
    <div>
      <div className="navbar">
        <h1>카페 메뉴</h1>
      </div>
      <div className="menu-container">
        <div className="menu-item">
          <img src="https://via.placeholder.com/50" alt="아메리카노 이미지" />
          <span className="menu-item-name">아메리카노</span>
          <span className="menu-item-price">5,000원</span>
          <button
            className="add-to-cart button"
            onclick="addToCart('아메리카노')"
          >
            장바구니에 담기
          </button>
        </div>
        <div className="menu-item">
          <img src="https://via.placeholder.com/50" alt="카페라떼 이미지" />
          <span className="menu-item-name">카페라떼</span>
          <span className="menu-item-price">6,000원</span>
          <button
            className="add-to-cart button"
            onclick="addToCart('카페라떼')"
          >
            장바구니에 담기
          </button>
        </div>
        <div className="menu-item">
          <img src="https://via.placeholder.com/50" alt="카페모카 이미지" />
          <span className="menu-item-name">카페모카</span>
          <span className="menu-item-price">6,500원</span>
          <button
            className="add-to-cart button"
            onclick="addToCart('카페모카')"
          >
            장바구니에 담기
          </button>
        </div>
        <div className="menu-item">
          <img src="https://via.placeholder.com/50" alt="카푸치노 이미지" />
          <span className="menu-item-name">카푸치노</span>
          <span className="menu-item-price">6,000원</span>
          <button
            className="add-to-cart button"
            onclick="addToCart('카푸치노')"
          >
            장바구니에 담기
          </button>
        </div>
      </div>
      <div className="footer">
        <button className="button" onclick="goToCart()">
          장바구니
        </button>
      </div>
    </div>
  );
};
export default MenuPage;

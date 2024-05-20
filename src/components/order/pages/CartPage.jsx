import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../../../shared/header/Header";
import Footer from "../../../shared/footer/Footer";
import Modal from "../../../shared//modal/Modal";
import "./CartPage.css";
const CartPage = () => {
  const viewHeader = "push-order";
  const viewFooter = "push_order";
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div>
      <Header viewHeader={viewHeader} />
      <div className="order-header">
        <h2>장바구니</h2>
      </div>
      <div className="content">
        <Modal show={showModal} onClose={handleClose}>
          <div className="OrderModal">
            <p>주문 완료</p>
            <div className="ButtonContainer">
              <button className="orderButton">
                <p>메뉴 추가하기</p>
              </button>
              <NavLink to="/order/recipe" style={{ textDecoration: "none" }}>
                <button className="recipeButton">
                  <p>주문 내역 확인</p>
                </button>
              </NavLink>
            </div>
          </div>
        </Modal>
      </div>
      <div
        onClick={() => {
          handleShow();
        }}
      >
        <Footer viewFooter={viewFooter} />
      </div>
    </div>
  );
};
export default CartPage;

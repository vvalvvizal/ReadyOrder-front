import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import Header from "../../../shared/header/Header";
import Footer from "../../../shared/footer/Footer";
import Modal from "../../../shared/modal/Modal";
import { CartContext } from "../components/CartContext";
import { ReactComponent as Minus } from "../util/icon/minus.svg";
import { ReactComponent as Plus } from "../util/icon/plus.svg";
import { ReactComponent as Back } from "../util/icon/back.svg";
import Divider from "../../../shared/Divider/Divider";

import styles from "./CartPage.module.css";

const CartPage = () => {
  const viewHeader = "push-order";
  const viewFooter = "push_order";
  const [showModal, setShowModal] = useState(false);

  const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const renderCartItems = () => {
    return Object.keys(cart).map((itemId) => {
      const { title, image_url, price, quantity } = cart[itemId];
      return (
        <div>
          <div key={itemId} className={styles["cart-item"]}>
            <img
              src={image_url}
              alt={title}
              className={styles["cart-item-img"]}
            />
            <div className={styles["cart-item-text"]}>
              <h3>{title}</h3>
              <p>{price}₩</p>
            </div>
            <div className={styles["item-button"]}>
              <div className={styles["item-button-back"]}>
                <Back />
              </div>
              <div className={styles["item-button-num"]}>
                <Minus
                  className={styles.changeNum}
                  onClick={(e) => {
                    console.log("삭제");
                    decreaseQuantity(itemId);
                  }}
                />
                <p>{quantity}</p>
                <Plus
                  className={styles.changeNum}
                  onClick={(e) => {
                    console.log("증가");
                    increaseQuantity(itemId);
                  }}
                />
              </div>
            </div>
          </div>
          <Divider />
        </div>
      );
    });
  };

  return (
    <div>
      <Header viewHeader={viewHeader} />

      <div className={styles.content}>
        {renderCartItems()}
        <Modal show={showModal} onClose={handleClose}>
          <div className={styles.OrderModal}>
            <p>주문 완료</p>
            <div className={styles.ButtonContainer}>
              <button className={styles.orderButton}>
                <p>메뉴 추가하기</p>
              </button>
              <NavLink to="/order/recipe" style={{ textDecoration: "none" }}>
                <button className={styles.recipeButton}>
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

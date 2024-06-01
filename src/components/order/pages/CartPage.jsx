import React, { useState, useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import Header from "../../../shared/header/Header";
import Footer from "../../../shared/footer/Footer";
import Modal from "../../../shared/modal/Modal";
import { CartContext } from "../components/CartContext";
import { ReactComponent as Minus } from "../util/icon/minus.svg";
import { ReactComponent as Plus } from "../util/icon/plus.svg";
import { ReactComponent as Back } from "../util/icon/back.svg";
import Divider from "../../../shared/Divider/Divider";
import OrderRoot from "../components/OrderRoot";

import styles from "./CartPage.module.css";

const CartPage = () => {
  let { tableNum } = useParams();
  const viewHeader = "push-order";
  const viewFooter = "push_order";
  const [showModal, setShowModal] = useState(false);

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    totalQuantity,
    totalPrice,
    resetItem,
  } = useContext(CartContext);

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
        <div key={itemId} className={styles["item-content"]}>
          <div className={styles["cart-item"]}>
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
                <Back
                  className={styles.changeNum}
                  onClick={(e) => {
                    removeItem(itemId);
                  }}
                />
              </div>
              <div className={styles["item-button-num"]}>
                <Minus
                  className={styles.changeNum}
                  onClick={(e) => {
                    decreaseQuantity(itemId);
                  }}
                />
                <p>{quantity}</p>
                <Plus
                  className={styles.changeNum}
                  onClick={(e) => {
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
          <OrderRoot cart={cart} tableNum={tableNum} />
          <div className={styles.OrderModal}>
            <p>주문 완료</p>
            <div className={styles.ModalText}>
              <div className={styles.ModalItem}>
                <div className={styles["ModalText-title"]}>테이블</div>
                <p>{tableNum}번</p>
              </div>
              <div className={styles.ModalItem}>
                <div className={styles["ModalText-title"]}>주문 메뉴</div>
                <p>{totalQuantity}개</p>
              </div>
              <div className={styles.ModalItem}>
                <div className={styles["ModalText-title"]}>주문 금액</div>
                <p>{totalPrice}원</p>
              </div>
            </div>
            <div className={styles.ButtonContainer}>
              <NavLink
                to={`/order/menu/${tableNum}`}
                style={{ textDecoration: "none" }}
              >
                <button className={styles.orderButton} onClick={resetItem}>
                  <p>메뉴 추가하기</p>
                </button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none" }}
                to={{
                  pathname: `/orders/${tableNum}/bill`,
                  state: { tableNum },
                }}
              >
                <button className={styles.recipeButton}>
                  <p>주문 내역 확인</p>
                </button>
              </NavLink>
            </div>
          </div>
        </Modal>
      </div>
      <div onClick={handleShow}>
        <Footer viewFooter={viewFooter} />
      </div>
    </div>
  );
};

export default CartPage;

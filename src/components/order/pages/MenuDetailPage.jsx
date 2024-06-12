import React, { useState, useEffect, useContext } from "react";
import Header from "../../../shared/header/Header";
import Footer from "../../../shared/footer/Footer";
import { useLocation } from "react-router-dom"; // useLocation 훅을 임포트합니다
import { ReactComponent as Plus } from "../util/icon/plus.svg";
import { ReactComponent as Minus } from "../util/icon/minus.svg";
import { ReactComponent as Success } from "../util/icon/success.svg";
import { CartContext } from "../components/CartContext";
import { ThreeDotsWave } from "../../../shared/loading/ReactLoading";
import { useHistory } from "react-router-dom";
import Modal from "../../../shared/modal/Modal";

import styles from "./MenuDetailPage.module.css";

const URLRoot = `${process.env.REACT_APP_API_ROOT}/api`;

const MenuDetailPage = () => {
  const [num, setNum] = useState(1);
  const location = useLocation();
  const [item, setItem] = useState(null);
  const { handleAddMenu } = useContext(CartContext);
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const viewHeader = "menu-detail";
  const viewFooter = "view_cart";
  const viewModal = "successOrder";

  useEffect(() => {
    const state = location.state;
    if (state && state.item) {
      setItem(state.item);
    }
  }, [location.state]);

  const increaseNum = () => setNum(num + 1);
  const decreaseNum = () => num > 1 && setNum(num - 1);

  const handleAddToCart = () => {
    handleAddMenu(item._id, item.title, item.image_url, item.price, num);
    handleShow();
    setTimeout(() => {
      history.goBack();
    }, 400);
  };

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const parseTags = (text) => {
    const tags = text.match(/#[^\s#]+/g) || [];
    const otherText = text.replace(/#[^\s#]+/g, "").trim();
    return { tags, otherText };
  };

  return (
    <div>
      <Header viewHeader={viewHeader} />
      <div className={styles.content}>
        <div>
          {item ? (
            <div>
              <div className={styles["item-info"]}>
                <div className={styles["item-img"]}>
                  <img src={URLRoot + item.image_url} alt={item.title} />
                </div>
                <div className={styles["item-info-text"]}>
                  <h2>{item.title}</h2>
                  <p>{item.price.toLocaleString()}₩</p>
                </div>
              </div>
              <div className={styles["item-tag"]}>
                <p className={styles.tags}>
                  {parseTags(item.tag).tags.join(" ")}
                </p>
                <p className={styles.otherText}>
                  {parseTags(item.tag).otherText}
                </p>
              </div>
              <div className={styles["item-button"]}>
                <div className={styles["item-button-num"]}>
                  <Minus className={styles.changeNum} onClick={decreaseNum} />
                  <p>{num}</p>
                  <Plus className={styles.changeNum} onClick={increaseNum} />
                </div>
                <div className={styles["item-add"]} onClick={handleAddToCart}>
                  <p>주문 담기</p>
                </div>
              </div>
            </div>
          ) : (
            <ThreeDotsWave />
          )}
        </div>
        <Modal show={showModal} onClose={handleClose} viewModal={viewModal}>
          <div className={styles.OrderModal}>
            <Success />
          </div>
        </Modal>
      </div>
      <Footer viewFooter={viewFooter} />
    </div>
  );
};

export default MenuDetailPage;

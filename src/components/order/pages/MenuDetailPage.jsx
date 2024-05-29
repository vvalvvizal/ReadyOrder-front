import React, { useState, useEffect, useContext } from "react";
import Header from "../../../shared/header/Header";
import Footer from "../../../shared/footer/Footer";
import { useLocation } from "react-router-dom"; // useLocation 훅을 임포트합니다
import { ReactComponent as Plus } from "../util/icon/plus.svg";
import { ReactComponent as Minus } from "../util/icon/minus.svg";
import { CartContext } from "../components/CartContext";

import styles from "./MenuDetailPage.module.css";

const MenuDetailPage = () => {
  const [num, setNum] = useState(1);
  const location = useLocation();
  const [item, setItem] = useState(null);
  const { handleAddMenu } = useContext(CartContext);

  const viewHeader = "menu-detail";
  const viewFooter = "view_cart";

  useEffect(() => {
    const state = location.state;
    if (state && state.item) {
      setItem(state.item);
    }
  }, [location.state]);

  const increaseNum = () => setNum(num + 1);
  const decreaseNum = () => num > 1 && setNum(num - 1);

  return (
    <div>
      <Header viewHeader={viewHeader} />
      <div className="content">
        <div>
          {item ? (
            <div>
              <div className={styles["item-info"]}>
                <img src={item.image_url} alt={item.title} />

                <div className={styles["item-info-text"]}>
                  <h2>{item.title}</h2>
                  <p>{item.price}₩</p>
                </div>
              </div>
              <div className={styles["item-tag"]}>
                <p>{item.tag}</p>
              </div>
              <div className={styles["item-button"]}>
                <div className={styles["item-button-num"]}>
                  <Minus onClick={decreaseNum} />
                  <p>{num}</p>
                  <Plus onClick={increaseNum} />
                </div>
                <div
                  className={styles["item-add"]}
                  onClick={() => handleAddMenu(item._id, num)}
                >
                  <p>주문 담기</p>
                </div>
              </div>
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
      <Footer viewFooter={viewFooter} />
    </div>
  );
};

export default MenuDetailPage;

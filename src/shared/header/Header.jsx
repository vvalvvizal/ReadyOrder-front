import React from "react";
import styles from "./Header.module.css";
import { useParams, useHistory } from "react-router-dom";
import { ReactComponent as Bell } from "../header/icon/bell.svg";
import { ReactComponent as Back } from "../header/icon/back.svg";
import { ReactComponent as Home } from "../header/icon/home.svg";
import { ReactComponent as Bill } from "../header/icon/bill.svg";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  let { uid, tableNum } = useParams();
  let history = useHistory();

  const handleBackClick = () => {
    history.goBack();
  };
  const handleHomeClick = () => {
    history.push(`/${uid}/order/menu/${tableNum}`);
  };
  let content;
  switch (props.viewHeader) {
    case "order":
      content = (
        <div className={styles.orderheader}>
          <div className={styles["ordered-content"]}>
            <Bell />
            <NavLink
              to={`/${uid}/orders/${tableNum}/bill`}
              style={{ textDecoration: "none" }}
            >
              <div className={styles["ordered-box"]}>
                <div className={styles["ordered-icon"]}>
                  <Bill />
                </div>
                <p>주문내역</p>
                <p></p>
              </div>
            </NavLink>
          </div>
          <h2>Mornin'Gun</h2>
          <div className={styles.table}>
            <p>{tableNum}번 테이블</p>
          </div>
        </div>
      );
      break;
    case "push-order":
      content = (
        <div className={styles["shadow-header"]}>
          <div className={styles["back"]} onClick={handleBackClick}>
            <Back />
          </div>
          <h2>장바구니</h2>
        </div>
      );
      break;
    case "management-menu":
      content = (
        <div className={styles["shadow-header"]}>
          <div className={styles["back"]} onClick={handleBackClick}>
            <Back />
          </div>
          <h2>Mornin'Gun</h2>
        </div>
      );
      break;
    case "create-menu":
      content = (
        <div className={styles["shadow-header"]}>
          <div className={styles["back"]} onClick={handleBackClick}>
            <Back />
          </div>
          <h2>Mornin'Gun</h2>
        </div>
      );
      break;
    case "recipe-order":
      content = (
        <div className={styles.billheader}>
          <div className={styles["back"]} onClick={handleHomeClick}>
            <Home />
          </div>
          <h2>주문내역</h2>
        </div>
      );
      break;
    case "menu-detail":
      content = (
        <div className={styles["menu-detail"]}>
          <div className={styles["back"]} onClick={handleBackClick}>
            <Back />
          </div>
          <div className={styles["ordered-content"]}>
            <Bell />
            <NavLink
              to={`/${uid}/orders/${tableNum}/bill`}
              style={{ textDecoration: "none" }}
            >
              <div className={styles["ordered-box"]}>
                <div className={styles["ordered-icon"]}>
                  <Bill />
                </div>
                <p>주문내역</p>
                <p></p>
              </div>
            </NavLink>
          </div>
        </div>
      );
      break;

    default:
      content = <div className={styles.header}></div>;
      break;
  }

  return <div>{content}</div>;
};

export default Header;

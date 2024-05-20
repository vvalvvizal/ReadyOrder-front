import React from "react";
import Menu from "../../menu/components/MenuRoot";
import Footer from "../../../shared/footer/Footer";
import Header from "../../../shared/header/Header";
import { NavLink } from "react-router-dom";
import styles from "./MenuPage.module.css";

const MenuPage = () => {
  const viewFooter = "view_cart";
  const viewHeader = "order";
  return (
    <div>
      <Header viewHeader={viewHeader} />
      <div className={styles.content}>
        <Menu userType={"customer"} />
      </div>
      <NavLink to="/order/cart">
        <Footer viewFooter={viewFooter} />
      </NavLink>
    </div>
  );
};

export default MenuPage;

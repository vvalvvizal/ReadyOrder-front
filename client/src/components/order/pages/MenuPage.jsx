import React from "react";
import Menu from "../../menu/components/Menu";
import Footer from "../../../shared/footer/Footer";
import { NavLink } from "react-router-dom";
import "./MenuPage.css";

const MenuPage = () => {
  const parents = "view_cart";
  return (
    <div>
      <div className="content">
        <div className="menu-category">
          <Menu />
        </div>
      </div>
      <NavLink to="/order/cart">
        <Footer parents={parents} />
      </NavLink>
    </div>
  );
};
export default MenuPage;

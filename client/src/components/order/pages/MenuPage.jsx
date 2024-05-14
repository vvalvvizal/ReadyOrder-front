import React from "react";
import Menu from "../../menu/components/MenuRoot";
import Footer from "../../../shared/footer/Footer";
import "./MenuPage.css";

const MenuPage = () => {
  const parents = "view_cart";

  return (
    <div>
      <div className="content">
        <Menu userType={"customer"} />
      </div>
      <Footer parents={parents} />
    </div>
  );
};

export default MenuPage;

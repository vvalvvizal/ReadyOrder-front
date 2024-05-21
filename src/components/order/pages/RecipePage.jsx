import React from "react";
import "./RecipePage.css";
import Header from "../../../shared/header/Header";
import Footer from "../../../shared/footer/Footer.jsx";
const RecipePage = () => {
  const viewHeader = "recipe-order";
  const viewFooter = "recipe_order";

  return (
    <div>
      <Header viewHeader={viewHeader} />
      <div className="content">
        <p>영수증</p>
      </div>
      <Footer viewFooter={viewFooter} />
    </div>
  );
};
export default RecipePage;

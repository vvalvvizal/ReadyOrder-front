import React from "react";
import "./RecipePage.css";
import Header from "../../../shared/header/Header";
const RecipePage = () => {
  const viewHeader = "recipe-order";
  return (
    <div>
      <Header viewHeader={viewHeader} />
      <div className="content">
        <p>영수증</p>
      </div>
    </div>
  );
};
export default RecipePage;

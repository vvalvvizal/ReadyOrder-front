import React, { useEffect, useState } from "react";
import "./BillPage.css";
import Header from "../../../shared/header/Header.jsx";
import Footer from "../../../shared/footer/Footer.jsx";
import BillRoot from "../components/BillRoot.jsx";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min.js";
const RecipePage = () => {
  const [tableNum, settableNum] = useState();
  const [total, setTotal] = useState();
  const location = useLocation();
  useEffect(() => {
    const state = location.state;
    if (state && state.tableNum) {
      settableNum(state.tableNum);
    }
  }, [location.state]);

  const viewHeader = "recipe-order";
  const viewFooter = "recipe_order";

  const handleTotal = (total) => {
    setTotal(total);
  };
  return (
    <div>
      <Header viewHeader={viewHeader} />
      <div className="content">
        <BillRoot tableNum={tableNum} handleTotal={handleTotal} />
      </div>
      <Footer viewFooter={viewFooter} total={total} />
    </div>
  );
};
export default RecipePage;

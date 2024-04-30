import React from "react";
import "./IntroPage.css";
import { ReactComponent as Logo } from "./logo/logo.svg";
const MainPage = () => {
  return (
    <div>
      <div className="navbar"></div>
      <div className="container">
        <div className="item">
          <Logo />
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};
export default MainPage;

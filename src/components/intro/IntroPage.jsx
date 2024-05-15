import React from "react";
import "./IntroPage.css";
import { ReactComponent as Logo } from "./util/logo.svg";
const IntroPage = () => {
  return (
    <div className="content">
      <div className="logo">
        <Logo />
      </div>
    </div>
  );
};
export default IntroPage;

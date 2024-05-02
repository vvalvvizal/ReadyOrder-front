import React from "react";
import "./ManagementPage.css";
import { ReactComponent as StoreIcon } from "./util/icon/store.svg";
import { ReactComponent as MenuIcon } from "./util/icon/menu.svg";
const MainPage = () => {
  const User = "모닝건";
  return (
    <div>
      <div className="textbox">
        <div className="hi">안녕하세요, </div>
        <div className="id">{User}</div>
      </div>
      <div className="buttonbox">
        <div className="management">
          <div className="store">
            <StoreIcon />
            <p>매장 관리</p>
          </div>
          <div className="menu">
            <MenuIcon />
            <p>메뉴 관리</p>
          </div>
        </div>
        <div className="makeQR">
          <p>QR코드 재생성</p>
        </div>
      </div>
    </div>
  );
};
export default MainPage;

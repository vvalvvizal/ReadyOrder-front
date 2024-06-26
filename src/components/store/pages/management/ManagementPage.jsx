import React from "react";
import { NavLink } from "react-router-dom";
import "./ManagementPage.css";
import { ReactComponent as StoreIcon } from "../../util/icon/store.svg";
import { ReactComponent as MenuIcon } from "../../util/icon/menu.svg";
import Header from "../../../../shared/header/Header";
const ManagementPage = () => {
  const User = "모닝건";
  const viewHeader = "main";
  return (
    <div>
      <Header viewHeader={viewHeader} />
      <div className="content">
        <div className="textbox">
          <div className="hi">안녕하세요, </div>
          <div className="id">{User}</div>
        </div>
        <div className="buttonbox">
          <div className="management">
            <NavLink to="/store/state" className="store-button">
              <StoreIcon />
              <p>매장 관리</p>
            </NavLink>

            <NavLink to="/store/menu" className="menu-button">
              <MenuIcon />
              <p>메뉴 관리</p>
            </NavLink>
          </div>
          <NavLink to="/store/qr" className="makeQR">
            <p>QR코드 재생성</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default ManagementPage;

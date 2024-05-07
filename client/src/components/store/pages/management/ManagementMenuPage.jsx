import React from "react";
import Menu from "../../../menu/components/Menu";
const ManagementMenuPage = () => {
  const parents = "management_menu";
  return (
    <div>
      <div className="content">
        <p>관리자 메뉴페이지</p>
        <Menu />
      </div>
    </div>
  );
};
export default ManagementMenuPage;

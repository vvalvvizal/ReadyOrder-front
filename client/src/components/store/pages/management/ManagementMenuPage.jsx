import React, { useState } from "react";
import Menu from "../../../menu/components/MenuRoot";
import Category from "../../components/category/CategoryRoot";
const ManagementMenuPage = () => {
  // const [menuItems, setMenuItems] = useState([]);

  // const handleUpdate = (updatedItems) => {
  //   // 삭제 후의 아이템 목록으로 상태를 업데이트합니다.
  //   setMenuItems(updatedItems);
  // };

  return (
    <div className="content">
      <div className="menuGroup">
        <Category />
      </div>
      <div>
        <Menu userType={"admin"} />
      </div>
    </div>
  );
};
export default ManagementMenuPage;

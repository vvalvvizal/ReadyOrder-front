import React, { useState } from "react";
import MenuItem from "../../order/components/MenuItem";
import ManagementMenuItem from "../../store/components/ManagementMenuItem";

const MenuList = (props) => {
  const { categories, menus } = props.items;
  // console.log(categories);
  if (!menus || menus.length === 0) {
    return (
      <div>
        <p>No Menu found</p>
      </div>
    );
  }

  const menuProps = props.userType;
  console.log(menuProps);

  return menuProps === "admin" ? (
    <div className="menu_list">
      <ManagementMenuItem items={menus} />
      <button onClick={props.handleDelete}>삭제</button>
    </div>
  ) : (
    <div className="menu_list">
      <MenuItem categories={categories} items={menus} />
    </div>
  );
};

export default MenuList;

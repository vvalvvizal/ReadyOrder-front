import React, { useState } from "react";
import MenuItem from "../../order/components/MenuItem";
import ManagementMenuItem from "../../store/components/ManagementMenuItem";
import style from "./MenuList.css";
import Category from "../../store/components/category/CategoryRoot";
import { ReactComponent as MenuAddPlus } from "../../store/util/icon/MenuAddPlus.svg";
import { NavLink } from "react-router-dom";
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
    <div className={style["menu_list"]}>
      <div className="top-content">
        <div className={style["category-select"]}>
          <Category />
        </div>
        <div className="delete-button" onClick={props.handleDelete}>
          <p>선택 삭제</p>
        </div>
      </div>
      <ManagementMenuItem items={menus} />
      <NavLink to="/store/menu/create" style={{ textDecoration: "none" }}>
        <div className="addMenu" onClick={props.handleCreate}>
          <MenuAddPlus />
          <p>메뉴 추가</p>
        </div>
      </NavLink>
    </div>
  ) : (
    <div className={style.menu_list}>
      <MenuItem categories={categories} items={menus} />
    </div>
  );
};

export default MenuList;

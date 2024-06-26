import React, { useState, useEffect } from "react";
import MenuItem from "../../order/components/MenuItem";
import ManagementMenuItem from "../../store/components/ManagementMenuItem";
import style from "./MenuList.css";
import Category from "../../store/components/category/CategoryRoot";
import { ReactComponent as MenuAddPlus } from "../../store/util/icon/MenuAddPlus.svg";
import { NavLink } from "react-router-dom";
import { ThreeDotsWave } from "../../../shared/loading/ReactLoading";
import Divider from "../../../shared/Divider/Divider";

const MenuList = (props) => {
  const menuProps = props.userType;
  useEffect(() => {
    console.log(menuProps);
  }, [menuProps]);

  const [category, setCategory] = useState("");
  const { categories, menus } = props.items;
  // console.log(categories);
  if (!menus || menus.length === 0) {
    return (
      <>
        <div className="emptybox">
          <ThreeDotsWave />
          <p className="emptyText">메뉴가 없습니다.</p>
        </div>
        {menuProps === "admin" && (
          <NavLink to="/store/menu/create" style={{ textDecoration: "none" }}>
            <div className="addMenu" onClick={props.handleCreate}>
              <MenuAddPlus />
              <p>메뉴 추가</p>
            </div>
          </NavLink>
        )}
      </>
    );
  }

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return menuProps === "admin" ? (
    <div className={style["menu_list"]}>
      <div className="top-content">
        <div className={style["category-select"]}>
          <Category onCategoryChange={handleCategoryChange} />
        </div>
        <div className="delete-button" onClick={props.handleDelete}>
          <p>선택 삭제</p>
        </div>
      </div>
      <Divider />
      <ManagementMenuItem
        items={menus}
        selectedCategory={category}
        handleCreate={props.handleCreate}
      />
      <NavLink
        to={{
          pathname: "/store/menu/create",
          state: { category: "신메뉴" },
        }}
        style={{ textDecoration: "none" }}
      >
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

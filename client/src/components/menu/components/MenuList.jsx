import React from "react";

import MenuItem from "./MenuItem";
const MenuList = (props) => {
  if (props.items.length == 0)
    return (
      <div>
        <h2>No Menu found</h2>
      </div>
    );
  return (
    <ul>
      {props.items.map((menu) => {
        return (
          <MenuItem
            id={menu.id}
            img={menu.img}
            name={menu.name}
            price={menu.price}
            tag={menu.tag}
          />
        );
      })}
    </ul>
  );
};
export default MenuList;

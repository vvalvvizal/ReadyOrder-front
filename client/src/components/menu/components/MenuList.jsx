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
    <div>
      {props.items.map((menu) => {
        return (
          <div className="menu_list">
            <MenuItem
              id={menu._id}
              img={menu.image_url}
              tag={menu.tag}
              name={menu.title}
              price={menu.price}
            />
          </div>
        );
      })}
    </div>
  );
};
export default MenuList;

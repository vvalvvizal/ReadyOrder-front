import React from "react";
import { Link } from "react-router-dom";
import "./MenuItem.css";
const UserItem = (props) => {
  return (
    <li className="menu-item">
      {/* <Link to={`/${props.id}/menu`}> */}
      <div className="menu-item-content">
        <div className="menu-item-name">{props.name}</div>
        <div className="menu-item-price">{props.price}</div>
        <div className="menu-item-tag">{props.tag}</div>
        <img src={props.img} />
      </div>
      {/* </Link> */}
    </li>
  );
};
export default UserItem;

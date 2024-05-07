import React from "react";
import { Link } from "react-router-dom";
import "./MenuItem.css";
const MenuItem = (props) => {
  return (
    <div className="item-content">
      <div className="item-textbox">
        <div className="item-title">{props.name}</div>
        <div className="item-tag-box">
          <p>{props.tag}</p>
        </div>
        <div className="item-price">
          <p>{props.price}₩</p>
        </div>
      </div>
      <div className="item-img">
        <img src={props.img} />
      </div>
    </div>
  );
};
export default MenuItem;

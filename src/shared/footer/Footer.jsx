import { ReactComponent as Cart } from "./util/cart.svg";
import React from "react";
import "./Footer.css";

const Foot = (props) => {
  let content;

  switch (props.parents) {
    case "view_cart":
      content = (
        <div className="order-view">
          <div className="cart-box">
            <Cart />
          </div>
          <p>장바구니 보기</p>
        </div>
      );
      break;
    case "push_order":
      content = (
        <div className="order-view">
          <div className="cart-box">
            <Cart />
          </div>
          <p>주문하기</p>
        </div>
      );
      break;
    case "sum_cost":
      content = (
        <div className="order-view">
          <p>총 금액 :</p>
        </div>
      );
      break;

    default:
      content = null;
      break;
  }

  return <div>{content}</div>;
};

export default Foot;

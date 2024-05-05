import React from "react";
import MenuList from "./MenuList";
import "./Menu.css";
const MenuPage = (props) => {
  const Menu = [
    {
      id: 0,
      name: "Gin & Tonic",
      tag: "#Jin #깔끔한 맛",
      price: "12,000 ₩",
      img: "",
    },
    {
      id: 1,
      name: "New York Sour",
      tag: "#Bourbon #비주얼 #레몬",
      price: "12,000 ₩",
      img: "",
    },
    {
      id: 2,
      name: "Brandy Alexander",
      tag: "#Cognac #부드러움 #카카오",
      price: "12,000 ₩",
      img: "",
    },
    {
      id: 3,
      name: "Love Heart",
      tag: "#Vodka #기념일 #스파클",
      price: "12,000 ₩",
      img: "",
    },
    {
      id: 4,
      name: "Lotus Espresso",
      tag: "#Rum #에스프레소",
      price: "12,000 ₩",
      img: "",
    },
  ];
  return <MenuList items={Menu} />;
};
export default MenuPage;

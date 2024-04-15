import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CartMenu } from "../cart-menu";
import { BiCartAlt } from "react-icons/bi";
import "./cart-block.css";
import { calcTotalPrice } from "../utils";


export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  return (
    <div className="cart-block">
      <BiCartAlt
        size={25}
        className="cart-block__icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 && (
        <span className="cart-block__total-price">{totalPrice} руб.</span>
      )}
      {isCartMenuVisible && <CartMenu items={items} onClick={() => null} />}
    </div>
  );
};

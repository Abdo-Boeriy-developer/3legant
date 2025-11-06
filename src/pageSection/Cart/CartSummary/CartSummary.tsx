"use client";
import React, { useContext, useState } from "react";
import style from "./cartSummary.module.css";
import { CartStore } from "@/Context/CartContext";
const CartSummary = () => {
  const [radio, setRadio] = useState<string>("free");
  const { cartData } = useContext(CartStore);

  const totalCartPrice = cartData.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);

  return (
    <div className={style.cartSummary}>
      <h2>Cart summary</h2>
      <ul className={style.cartList}>
        <li
          onClick={() => setRadio("free")}
          className={radio === "free" ? style.active : ""}
        >
          <div className={style.cartIcon}>
            <span></span>
            <h3>Free Shipping</h3>
          </div>
          <div className={style.cartPrice}>
            <h2>$0.00</h2>
          </div>
        </li>
        <li
          onClick={() => setRadio("express")}
          className={radio === "express" ? style.active : ""}
        >
          <div className={style.cartIcon}>
            <span></span>
            <h3>Express shipping</h3>
          </div>
          <div className={style.cartPrice}>
            <h2>+$15.00</h2>
          </div>
        </li>
        <li
          onClick={() => setRadio("pickUp")}
          className={radio === "pickUp" ? style.active : ""}
        >
          <div className={style.cartIcon}>
            <span></span>
            <h3>Pick Up</h3>
          </div>
          <div className={style.cartPrice}>
            <h2>%21.00</h2>
          </div>
        </li>
      </ul>
      <ul className={style.subTotal}>
        <li>
          <p>Total</p>
          <h3>$ {totalCartPrice}</h3>
        </li>
        <li className={style.total}>
          <h2>Subtotal</h2>
          <h2>
            $
            {radio === "free"
              ? totalCartPrice
              : radio === "express"
              ? totalCartPrice + 15
              : radio === "pickUp"
              ? totalCartPrice + 50
              : ""}
          </h2>
        </li>
      </ul>
      <button>Chekout</button>
    </div>
  );
};

export default CartSummary;

"use client";
import React, { useState } from "react";
import style from "./cartSummary.module.css";
const CartSummary = () => {
  const [radio, setRadio] = useState<string>("free");

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
          <p>Subtotal</p>
          <h3>$1234.00</h3>
        </li>
        <li className={style.total}>
          <h2>Subtotal</h2>
          <h2>$1234.00</h2>
        </li>
      </ul>
      <button>Chekout</button>
    </div>
  );
};

export default CartSummary;

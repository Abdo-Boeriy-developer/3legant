import React from "react";
import style from "./TextTopProductCart.module.css";
const TextTopProductCart = () => {
  return (
    <>
      <div className={style.textTop}>
        <div className={style.textTitle}>
          <h2>Product</h2>
        </div>
        <div className={style.listaName}>
          <h2>Quantity</h2>
          <h2>Price</h2>
          <h2>Total Price</h2>
        </div>
      </div>
    </>
  );
};

export default TextTopProductCart;

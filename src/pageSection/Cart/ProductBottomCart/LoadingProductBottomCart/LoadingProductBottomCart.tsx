import React from "react";
import style from "./LoadingProductBottomCart.module.css";
const LoadingProductBottomCart = () => {
  return (
    <div className={style.CartLoader}>
      <span className={style.loader}>L &nbsp; ading</span>
    </div>
  );
};

export default LoadingProductBottomCart;

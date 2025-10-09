import React from "react";
import style from "./offerLoading.module.css";
const OffersLoading = () => {
  return (
    <div className={style.offerLoading}>
      <span className={style.loader}></span>
    </div>
  );
};

export default OffersLoading;

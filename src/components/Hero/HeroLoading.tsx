import React from "react";
import style from "./heroLoading.module.css";
const HeroLoading = () => {
  return (
    <div className={style.swiper}>
      <span className={style.loader}>Loading...</span>
    </div>
  );
};

export default HeroLoading;

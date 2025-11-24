import React from "react";
import style from "./LoaddingCategories.module.css";
import loader from "../../../../public/animation/loader.json";
import card from "../../../../public/animation/cardLoading.json";
import Lottie from "lottie-react";
const LoaddingCategories = () => {
  return (
    <div className={style.LoaddingCategories}>
      <div className={style.categories}>
        <div className={` ${style.CategorieContainer}`}>
          <div className={style.largRoom}>
            <div className={style.largImage}></div>
          </div>
          <div className={style.SmRoom}>
            <div className={style.smImage}>
              <div className={style.image}></div>
            </div>
            <div className={style.smImage}>
              <div className={style.image}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoaddingCategories;

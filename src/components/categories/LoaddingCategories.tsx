import React from "react";
import style from "./LoaddingCategories.module.css";
const LoaddingCategories = () => {
  return (
    <div className={style.LoaddingCategories}>
      <div className={style.categories}>
        <div className={` ${style.CategorieContainer}`}>
          <div className={style.largRoom}>
            <div className={style.largImage}>
              <div className={style.living}></div>
              <div className={style.livinge}></div>
            </div>
          </div>
          <div className={style.SmRoom}>
            <div className={style.smImage}>
              <div className={style.smLiving}></div>
              <div className={style.smLivinge}></div>
            </div>
            <div className={style.smImage}>
              <div className={style.smLivinge}></div>
              <div className={style.smLiving}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoaddingCategories;

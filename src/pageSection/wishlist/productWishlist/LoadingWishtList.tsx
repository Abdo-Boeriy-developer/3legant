import React from "react";
import style from "./loadingWisthList.module.css";
const LoadingWishtList = () => {
  return (
    <div className={style.LoadingWishtList}>
      <span className={style.loader}>Loading...</span>
    </div>
  );
};

export default LoadingWishtList;

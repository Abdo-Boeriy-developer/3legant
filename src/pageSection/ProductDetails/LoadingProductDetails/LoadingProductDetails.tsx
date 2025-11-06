import React from "react";
import style from "./LoadingProductDetails.module.css";
import Lottie from "lottie-react";
import coding from "../../../../public/animation/Coding.json";
const LoadingProductDetails = () => {
  return (
    <div className={style.LoadingProductDetails}>
      <Lottie className={style.lottie} animationData={coding} />
    </div>
  );
};

export default LoadingProductDetails;

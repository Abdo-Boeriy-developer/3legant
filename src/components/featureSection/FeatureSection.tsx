import React from "react";
import style from "./FeatureSection.module.css";
import { CiDeliveryTruck } from "react-icons/ci";
const FeatureSection = () => {
  return (
    <div className={style.featureSection}>
      <div className={style.sectionContainer}>
        <div className={style.section_box}>
          <CiDeliveryTruck />
          <h2>Free Shipping</h2>
          <p>Order above $200</p>
        </div>
        <div className={style.section_box}>
          <CiDeliveryTruck />
          <h2>Free Shipping</h2>
          <p>Order above $200</p>
        </div>
        <div className={style.section_box}>
          <CiDeliveryTruck />
          <h2>Free Shipping</h2>
          <p>Order above $200</p>
        </div>
        <div className={style.section_box}>
          <CiDeliveryTruck />
          <h2>Free Shipping</h2>
          <p>Order above $200</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;

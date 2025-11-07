import React from "react";
import style from "./FeatureSection.module.css";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";
import { MdLockOutline } from "react-icons/md";
import { BsTelephoneOutbound } from "react-icons/bs";
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
          <CiMoneyBill />
          <h2>Money-back</h2>
          <p>30 days guarantee</p>
        </div>
        <div className={style.section_box}>
          <MdLockOutline />
          <h2>Secure Payments</h2>
          <p>Secured by Stripe</p>
        </div>
        <div className={style.section_box}>
          <BsTelephoneOutbound />
          <h2>24/7 Support</h2>
          <p>Phone and Email Support</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;

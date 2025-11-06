import React from "react";
import style from "./properity.module.css";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";
const Properity = () => {
  return (
    <div className={style.properity}>
      <div className={`container ${style.proContainer}`}>
        <div className={style.box}>
          <CiDeliveryTruck />
          <h2>Free Shipping</h2>
          <p>Order above $200</p>
        </div>
        <div className={style.box}>
          <CiMoneyBill />
          <h2>Money-back </h2>
          <p>30 days guarantee</p>
        </div>
        <div className={style.box}>
          <CiDeliveryTruck />
          <h2>Secure Payments</h2>
          <p>Secured by Stripe</p>
        </div>
        <div className={style.box}>
          <CiDeliveryTruck />
          <h2>24/7 Support</h2>
          <p>Phone and Email support</p>
        </div>
      </div>
    </div>
  );
};

export default Properity;

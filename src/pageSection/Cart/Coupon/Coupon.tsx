import React from "react";
import style from "./coupon.module.css";
import { LuTicketPercent } from "react-icons/lu";
const Coupon = () => {
  return (
    <div className={style.coupon}>
      <h2>Have a Coupon ?</h2>
      <p>Add your code for an instant cart dicount</p>
      <div className={style.input}>
        <LuTicketPercent />
        <input type="text" placeholder="Coupon Code" />
        <button>Apply</button>
      </div>
    </div>
  );
};

export default Coupon;

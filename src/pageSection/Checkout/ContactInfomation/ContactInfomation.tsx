import React from "react";
import style from "./contactInformation.module.css";
import ShippingAddress from "../ShippingAddress/ShippingAddress";
import PaymentMethod from "../PaymentMethod/PaymentMethod";
const ContactInfomation = () => {
  return (
    <div className={style.contact}>
      <form className={style.contactContainer}>
        {/* contact inforamtion */}
        <div className={style.contactInfomation}>
          <h2>Contact Infomation</h2>
          <div className={style.inputName}>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" placeholder="First Name" />
            </div>
            <div>
              <label htmlFor="LastName">Last Name</label>
              <input type="text" id="LastName" placeholder="Last Name" />
            </div>
          </div>

          <div className={style.firstInput}>
            <label htmlFor="phone">Phone Number</label>
            <input type="number" id="phone" placeholder="Phone number" />
          </div>

          <div className={style.firstInput}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Your email" />
          </div>
        </div>
        {/* Shipping Address */}
        <ShippingAddress />
        {/* Payment Method */}
        <PaymentMethod />
      </form>
    </div>
  );
};

export default ContactInfomation;

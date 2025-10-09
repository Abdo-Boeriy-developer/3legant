import React from "react";
import style from "./ShippingAddress.module.css";
const ShippingAddress = () => {
  return (
    <div className={style.shippingAddress}>
      <div className={style.shippingContainer}>
        <h2>Shipping Address</h2>
        <div className={style.firstInput}>
          <label htmlFor="street">Street address *</label>
          <input type="text" id="street" placeholder="Street Address" />
        </div>
        <div className={style.firstInput}>
          <label htmlFor="selected">Street address *</label>
          <select name="" id="selected">
            <option value="egypt">Egypt</option>
            <option value="egypt">Egypt</option>
            <option value="egypt">Egypt</option>
          </select>
        </div>
        <div className={style.firstInput}>
          <label htmlFor="townCity">Town / City *</label>
          <input type="text" id="townCity" placeholder="Town / City" />
        </div>
        <div className={style.stateCode}>
          <div>
            <label htmlFor="state">State</label>
            <input type="text" id="state" placeholder="State" />
          </div>
          <div>
            <label htmlFor="zipCode">Zip</label>
            <input type="text" id="zipCode" placeholder="Zip Code" />
          </div>
        </div>
        <div className={style.check}>
          <input id="checbox" type="checkbox" />
          <label htmlFor="checbox">
            Use a different billing address (optional)
          </label>
        </div>
      </div>
    </div>
  );
};

export default ShippingAddress;

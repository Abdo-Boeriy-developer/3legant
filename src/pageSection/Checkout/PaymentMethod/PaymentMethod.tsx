"use client";
import React, { useState } from "react";
import style from "./payment.module.css";
import { FaAmazonPay } from "react-icons/fa6";
import { PiCreditCardLight } from "react-icons/pi";
const PaymentMethod = () => {
  const [card, setCard] = useState<string>("card");
  return (
    <div className={style.payment}>
      <div className={style.containerPayment}>
        <h2>Payment Method</h2>
        <div className={style.creditCard}>
          <ul>
            <li
              onClick={() => setCard("card")}
              className={card === "card" ? style.active : ""}
            >
              <div className={style.check}>
                <span></span>
                <h3>Pay by Card Credit</h3>
              </div>
              <div className={style.icon}>
                <PiCreditCardLight />
              </div>
            </li>
            <li
              onClick={() => setCard("paypal")}
              className={card === "paypal" ? style.active : ""}
            >
              <div className={style.check}>
                <span></span>
                <h3>Paypal</h3>
              </div>
              <div className={style.icon}>
                <FaAmazonPay />
              </div>
            </li>
          </ul>
        </div>
        <div className={style.firstInput}>
          <label htmlFor="cardNumber">Card Number</label>
          <input
            id="cardNumber"
            type="number"
            placeholder="1234 1234 1234"
            min={14}
          />
        </div>
        <div className={style.mustInput}>
          <div>
            <label htmlFor="mm">expiration date</label>
            <input id="mm" type="text" placeholder="MM/YY" />
          </div>
          <div>
            <label htmlFor="cvc">cv</label>
            <input id="cvc" type="text" placeholder="CVC code" />
          </div>
        </div>
      </div>
      <div className={style.placeOlder}>
        <button>Place Order</button>
      </div>
    </div>
  );
};

export default PaymentMethod;

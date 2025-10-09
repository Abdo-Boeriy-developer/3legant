import React from "react";
import style from "./orderComplete.module.css";
import ShoppingTop from "@/pageSection/Cart/ShoppingTop/ShoppingTop";
const page = () => {
  return (
    <div className={style.orderComplete}>
      <ShoppingTop text="Complete!" />
      <div className={style.orederCompleteContainer}>
        <div className={style.textTop}>
          <h3>Thank you! 🎉</h3>
          <h2>
            Your order has been <br />
            reccevied
          </h2>
        </div>
        <div className={style.orderProduct}>
          <div className={style.imgOrder}>
            <img src="/product2-removebg-preview.png" alt="" />
            <span>2</span>
          </div>
          <div className={style.imgOrder}>
            <img src="/product2-removebg-preview.png" alt="" />
            <span>2</span>
          </div>
          <div className={style.imgOrder}>
            <img src="/product2-removebg-preview.png" alt="" />
            <span>2</span>
          </div>
        </div>
        <div className={style.date}>
          <ul>
            <li>
              <h2>Order Code :</h2>
              <h3>#023_45678</h3>
            </li>
            <li>
              <h2>Date :</h2>
              <h3>October 19, 2023</h3>
            </li>
            <li>
              <h2>Total :</h2>
              <h3>$1,345.00</h3>
            </li>
            <li>
              <h2>Payment method :</h2>
              <h3>Credit Card</h3>
            </li>
          </ul>
        </div>
        <div className={style.purchase}>
          <button>Purchase history</button>
        </div>
      </div>
    </div>
  );
};

export default page;

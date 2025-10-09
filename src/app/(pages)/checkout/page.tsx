import React from "react";
import style from "./chekout.module.css";
import ShoppingTop from "@/pageSection/Cart/ShoppingTop/ShoppingTop";
import ContactInfomation from "@/pageSection/Checkout/ContactInfomation/ContactInfomation";
import OrderSummary from "@/pageSection/Checkout/OrderSummary/OrderSummary";
const page = () => {
  return (
    <>
      <div className={style.checkout}>
        <div className="container">
          <ShoppingTop text="Check Out" />
          <div className={style.contact_orderSummary}>
            {/* contact Information */}
            <div className={style.contact}>
              <ContactInfomation />
            </div>
            <div className={style.orderSummary}>
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

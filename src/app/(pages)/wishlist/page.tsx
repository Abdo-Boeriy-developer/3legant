import AccountSideBar from "@/pageSection/MyAccount/AccountSideBar/AccountSideBar";
import TextTopAccount from "@/pageSection/MyAccount/textTopAccount/TextTopAccount";
import React from "react";
import style from "./wishlist.module.css";
import ProductWishlist from "@/pageSection/wishlist/productWishlist/ProductWishlist";
const page = () => {
  return (
    <>
      <div className={style.wishlist}>
        <TextTopAccount />
        <div className={`container ${style.wisthListContainer}`}>
          <div className={style.accountSideBar}>
            <AccountSideBar />
          </div>
          <div className={style.productwishtlist}>
            <ProductWishlist />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

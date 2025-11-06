import React from "react";
import style from "./myAccount.module.css";
import AccountSideBar from "@/pageSection/MyAccount/AccountSideBar/AccountSideBar";
import AccountDetails from "@/pageSection/MyAccount/AccountDetails/AccountDetails";
import TextTopAccount from "@/pageSection/MyAccount/textTopAccount/TextTopAccount";
const page = () => {
  return (
    <div>
      <TextTopAccount />
      <div className={`container ${style.myAccount}`}>
        <div className={style.accountSideBar}>
          <AccountSideBar />
        </div>
        <div className={style.myAccountDetails}>
          <AccountDetails />
        </div>
      </div>
    </div>
  );
};

export default page;

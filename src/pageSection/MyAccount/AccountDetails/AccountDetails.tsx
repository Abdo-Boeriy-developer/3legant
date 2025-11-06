import React from "react";
import style from "./accountdetails.module.css";
import AccountDetailsInput from "./AccountDetailsInput";
import AccountDetailsPassword from "./AccountDetailsPassword";
import ButtonDetails from "./ButtonDetails";
const AccountDetails = () => {
  return (
    <div className={style.accountDetails}>
      <form className={style.accountDetailsContainer}>
        {/* account details input */}
        <AccountDetailsInput />
        {/* account details password */}
        <AccountDetailsPassword />
        {/* change button */}
        <ButtonDetails />
      </form>
    </div>
  );
};

export default AccountDetails;

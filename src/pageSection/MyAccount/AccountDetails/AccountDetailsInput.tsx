import React from "react";
import style from "./AccountDetailsInput.module.css";
const AccountDetailsInput = () => {
  return (
    <div className={style.accountDetailsInput}>
      <h2>Account Details</h2>
      <div>
        <label htmlFor="firstName">First anem *</label>
        <input type="text" placeholder="First name" id="firstName" />
      </div>
      <div>
        <label htmlFor="lastName">Last anem *</label>
        <input type="text" placeholder="Last name" id="lastName" />
      </div>
      <div>
        <label htmlFor="displayName">Display anem *</label>
        <input type="text" placeholder="First name" id="displayName" />
        <p>
          This will be how your name will be displayed in the account section
          and in reviews
        </p>
      </div>
      <div>
        <label htmlFor="email">Email *</label>
        <input type="email" placeholder="Email" id="email" />
      </div>
    </div>
  );
};

export default AccountDetailsInput;

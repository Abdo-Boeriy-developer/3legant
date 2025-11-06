import React from "react";
import style from "./AccountDetailsPassword.module.css";
const AccountDetailsPassword = () => {
  return (
    <div className={style.AccountDetailsPassword}>
      <h2>Passwrod</h2>
      <div>
        <label htmlFor="oldPasswrod">old password </label>
        <input type="text" placeholder="old Passwrod" id="oldPasswrod" />
      </div>
      <div>
        <label htmlFor="newPassord">new password</label>
        <input type="text" placeholder="New Password" id="newPassord" />
      </div>

      <div>
        <label htmlFor="repeat">repeat new password</label>
        <input type="email" placeholder="Repeat new Passwrod" id="repeat" />
      </div>
    </div>
  );
};

export default AccountDetailsPassword;

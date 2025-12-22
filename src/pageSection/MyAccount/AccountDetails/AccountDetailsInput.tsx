"use client";
import React, { useEffect } from "react";
import style from "./AccountDetailsInput.module.css";
import Cookies from "js-cookie";
import { axiosInstans } from "@/utils/axios";
import axios from "axios";
const AccountDetailsInput = () => {
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axiosInstans("users/me");
        console.log("data", data.data);
      } catch (error) {
        console.error(" Error fetching ", error);
      }
    };
    getData();
  }, []);

  return (
    <div className={style.accountDetailsInput}>
      <h2>Account Details</h2>
      <div>
        <label htmlFor="firstName">Full Name *</label>
        <input
          type="text"
          placeholder="First name"
          id="firstName"
          defaultValue={"Abdo Boeriy"}
        />
      </div>
      {/* <div>
        <label htmlFor="lastName">Last anem *</label>
        <input type="text" placeholder="Last name" id="lastName" />
      </div> */}
      {/* <div>
        <label htmlFor="displayName">Display anem *</label>
        <input type="text" placeholder="First name" id="displayName" />
        <p>
          This will be how your name will be displayed in the account section
          and in reviews
        </p>
      </div> */}
      <div>
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          defaultValue={"Admin@gmail.com"}
        />
      </div>
    </div>
  );
};

export default AccountDetailsInput;

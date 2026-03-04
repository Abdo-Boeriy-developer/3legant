"use client";
import React, { useEffect, useState } from "react";
import style from "./AccountDetailsInput.module.css";
import { axiosInstans } from "@/utils/axios";

type userDataType = {
  confirmPassword: string;
  email: string;
  fullName: string;
  password: string;
};

const AccountDetailsInput = () => {
  const [userData, setUserData] = useState<userDataType>();

  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) {
      setUserData(JSON.parse(data));
    }
  }, []);

  console.log(userData);

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

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.id]: e.target.value,
  //   });
  // };

  return (
    <div className={style.accountDetailsInput}>
      <h2>Account Details</h2>
      <div>
        <label htmlFor="firstName">Full Name *</label>
        <input
          type="text"
          placeholder="First name"
          id="firstName"
          defaultValue={userData?.fullName}
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
          defaultValue={userData?.email}
        />
      </div>
    </div>
  );
};

export default AccountDetailsInput;

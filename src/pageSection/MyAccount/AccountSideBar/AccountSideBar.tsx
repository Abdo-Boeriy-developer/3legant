"use client";
import React, { useState } from "react";
import style from "./accountsideBar.module.css";
import { IoCameraOutline } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

// interface eventType {
//   event: React.ChangeEvent<HTMLInputElement>;
// }

const AccountSideBar = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const params = usePathname();

  const changeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files ? event.target.files[0] : null;

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    }
  };
  return (
    <div className={style.accountSideBar}>
      <div className={style.containerAccountSideBar}>
        <div className={style.imageProfile}>
          <div className={style.imgUser}>
            <img
              src={`${imageUrl ? imageUrl : "/imageUser-removebg-preview.png"}`}
              alt=""
            />
            <div className={style.camera}>
              <label htmlFor="cameraouteline">
                <IoCameraOutline />
              </label>
              <input
                type="file"
                id="cameraouteline"
                hidden
                onChange={changeImage}
              />
            </div>
          </div>
          <h2>Sofia Havertz</h2>
        </div>
        <div className={style.linksAccount}>
          <ul>
            <li className={params === "/myAccount" ? style.active : ""}>
              <Link href={"/myAccount"}>Account</Link>
            </li>
            <li className={params === "/address" ? style.active : ""}>
              <Link href={"/address"}>Address</Link>
            </li>
            <li className={params === "/orders" ? style.active : ""}>
              <Link href={"/orders"}>Orders</Link>
            </li>
            <li className={params === "/wishlist" ? style.active : ""}>
              <Link href={"/wishlist"}>Wishlist</Link>
            </li>
            <li className={params === "/logout" ? style.active : ""}>
              <Link href={""}>Log Out</Link>
            </li>
          </ul>
        </div>
        <select className={style.select}>
          <option value="Account">
            <Link href={"/myAccount"}>Account</Link>
          </option>
          <option value="Address">
            <Link href={"/address"}>Address</Link>
          </option>
          <option value="Orders">
            <Link href={"/orders"}>Orders</Link>
          </option>
          <option value="Wishlist">
            <Link href={"/wishlist"}>Wishlist</Link>
          </option>
          <option value="LogOut">
            <Link href={""}>Log Out</Link>
          </option>
          <h1>abdo</h1>
        </select>
      </div>
    </div>
  );
};

export default AccountSideBar;

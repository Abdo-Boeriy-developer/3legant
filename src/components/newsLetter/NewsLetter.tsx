import React from "react";
import style from "./newsletter.module.css";
// import icons
import { CiMail } from "react-icons/ci";
import Link from "next/link";
const NewsLetter = () => {
  return (
    <div className={style.newsletter}>
      <div className={style.newsContainer}>
        <div className={style.imageRight}>
          <img src="/join2.png" alt="" />
        </div>
        <div className={style.textCenter}>
          <h2>Join Our Newsletter</h2>
          <p>Sign up for deals, new products and promotions</p>
          <div className={style.signup}>
            <CiMail />
            <input type="email" placeholder="Email address" />
            <Link href={""}>Signup</Link>
          </div>
        </div>
        <div className={style.imageLeft}>
          <img src="/join3.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

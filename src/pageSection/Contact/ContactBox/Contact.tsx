import React from "react";
import style from "./contact.module.css";
import { FaVectorSquare } from "react-icons/fa";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import { IoMailOutline } from "react-icons/io5";
const ContactBox = () => {
  return (
    <div className={style.contact}>
      <h2 className={style.title}>Contact Us</h2>
      <div className={style.contact_box}>
        <div className={style.box}>
          <FaVectorSquare />
          <p>Address</p>
          <h3>234 Hai Trieu, Ho Chi Minh City, Viet Nam</h3>
        </div>
        <div className={style.box}>
          <HiOutlinePhoneMissedCall />
          <p>Contact Us</p>
          <h3>+84 234 567 890</h3>
        </div>
        <div className={style.box}>
          <IoMailOutline />
          <p>email</p>
          <h3>hello@3legant.com</h3>
        </div>
      </div>
      <div className={style.inputs_map}></div>
    </div>
  );
};

export default ContactBox;

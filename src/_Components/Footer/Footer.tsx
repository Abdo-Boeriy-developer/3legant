"use client";
import React, { useMemo, useState } from "react";
import style from "./footer.module.css";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { TbBrandYoutube } from "react-icons/tb";
import { usePathname } from "next/navigation";
const Footer = () => {
  const pathName = usePathname();
  const [isVisable, setIsVisaple] = useState(true);
  useMemo(() => {
    if (
      pathName === "/signup" ||
      pathName === "/login" ||
      pathName === "/forgotpasswrod" ||
      pathName === "/verifyPasswrodOtp" ||
      pathName === "/resetPasswrod"
    ) {
      setIsVisaple(false);
      return;
    } else {
      setIsVisaple(true);
    }
  }, [pathName]);
  return (
    <>
      {isVisable ? (
        <div className={style.footer}>
          <div className={`container ${style.footerContainer}`}>
            <div className={style.logoFooter}>
              <div className={style.logo}>
                <h2>3legant.</h2>
                <h3></h3>
                <p>Gift & Decoration Store</p>
              </div>
              <div className={style.footerLink}>
                <ul>
                  <li>
                    <Link href={"/"}>Home </Link>
                  </li>
                  <li>
                    <Link href={"/shop"}>Shop </Link>
                  </li>
                  <li>
                    <Link href={"/product"}>Product </Link>
                  </li>
                  <li>
                    <Link href={"/blog"}>Blog </Link>
                  </li>
                  <li>
                    <Link href={"/contactUs"}>Contact Us </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className={style.footer_bottom}>
              <div className={style.text}>
                <h2>Copyright &copy; 2025 3legant. All rights reserved</h2>
                <div className={style.privacy}>
                  <h3>Privacy Policy</h3>
                  <h3>Terms of Use</h3>
                </div>
              </div>
              <div className={style.scohil}>
                <FaInstagram />
                <SlSocialFacebook />
                <TbBrandYoutube />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Footer;

"use client";
import React, { useContext } from "react";
import style from "./HeaderMenuMobile.module.css";
import { RiCloseLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { headerLink } from "./headerLInks";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { SlSocialFacebook } from "react-icons/sl";
import { CiYoutube } from "react-icons/ci";
import { StoreContext } from "@/Context/ContextProvider";
const HeaderMenuMobile = () => {
  const { setOpenMenu, openMenu } = useContext(StoreContext);
  return (
    <>
      <div>
        <div className={`${style.headerMenu} ${openMenu ? style.active : ""} `}>
          <div className={`container ${style.container}`}>
            <div className={style.logo_links}>
              <div className={style.logo}>
                <h2>3legant.</h2>
                <h3 onClick={() => setOpenMenu(false)}>
                  <RiCloseLine />
                </h3>
              </div>
              <div className={style.searchBox}>
                <button>
                  <CiSearch />
                </button>
                <input type="text" placeholder="Search" />
              </div>
              <div className={style.menuLinks}>
                <ul>
                  {headerLink.map((link) => (
                    <li key={link.name}>
                      <Link href={link.path}>{link.name} </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={style.cart_wishlist_signin}>
              <div className={style.cart}>
                <ul>
                  <li>
                    <h2>Cart</h2>
                    <div className={style.shoppingCart}>
                      <HiOutlineShoppingBag />
                      <h3>0</h3>
                    </div>
                  </li>
                  <li>
                    <h2>Wishlist</h2>
                    <div className={style.shoppingCart}>
                      <FaRegHeart />
                      <h3>0</h3>
                    </div>
                  </li>
                </ul>
              </div>
              <div className={style.signIn}>
                <button>Sign In</button>
              </div>
              <div className={style.schoil}>
                <LuInstagram />
                <SlSocialFacebook />
                <CiYoutube />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderMenuMobile;

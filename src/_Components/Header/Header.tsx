"use client";
import React, { useContext } from "react";
import style from "./header.module.css";
import { headerLink } from "./headerLInks";
import Link from "next/link";
// import icons from react icons
import { CiSearch } from "react-icons/ci";
import { HiOutlineUserCircle } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CgMenu } from "react-icons/cg";
// import hook
import { usePathname } from "next/navigation";
import HeaderMenuMobile from "./HeaderMenuMobile";
import { StoreContext } from "@/Context/ContextProvider";
const Header = () => {
  const pathName = usePathname();
  const { setOpenMenu } = useContext(StoreContext);
  return (
    <>
      <header className={style.header}>
        <div className={`container ${style.container}`}>
          <div className={style.logo}>
            <div className={style.menu} onClick={() => setOpenMenu(true)}>
              <CgMenu />
            </div>
            <h2>3legant.</h2>
          </div>
          <div className={style.links}>
            <ul>
              {headerLink.map((link) => (
                <li
                  key={link.name}
                  className={`${pathName === link.path ? style.active : ""}`}
                >
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={style.icons}>
            <CiSearch />
            <HiOutlineUserCircle className={style.noneResponsive} />
            <Link href={"/cart"}>
              <HiOutlineShoppingBag className={style.noneResponsive} />
            </Link>
            <h2>0</h2>
          </div>
        </div>
        <HeaderMenuMobile />
      </header>
    </>
  );
};

export default Header;

"use client";
import React, { useContext, useEffect, useMemo, useState } from "react";
import style from "./header.module.css";
import { headerLink } from "../headerLInks";
import Link from "next/link";
// import icons from react icons
import { CiSearch } from "react-icons/ci";
import { HiOutlineUserCircle } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdLogin } from "react-icons/md";
import { CgMenu } from "react-icons/cg";
// import hook
import { usePathname } from "next/navigation";
import HeaderMenuMobile from "../headerMobile/HeaderMenuMobile";
import { StoreContext } from "@/Context/ContextProvider";
import { CartStore } from "@/Context/CartContext";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
const Header = () => {
  const pathName = usePathname();
  const { setOpenMenu, isLogin, setIsLogin } = useContext(StoreContext);
  const { cartData, getCartDataApi, setIsOpenFlayCart, isOpenFlayCart } =
    useContext(CartStore);
  const totalQuantity = cartData.reduce((acc, item) => acc + item.quantity, 0);
  const [isVisable, setIsVisaple] = useState(false);

  useMemo(() => {
    if (
      pathName === "/signup" ||
      pathName === "/login" ||
      pathName === "/forgotpasswrod" ||
      pathName === "/verifyPasswrodOtp" ||
      pathName === "/resetPasswrod"
    ) {
      setIsVisaple(false);
    } else {
      setIsVisaple(true);
    }
  }, [pathName]);

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const chackCookes = Cookies.get("authorization");
  // useEffect(() => {
  //   const checkToken = setInterval(() => {
  //     setIsLoggedIn(!!chackCookes);
  //   }, 500);
  //   return () => clearInterval(checkToken);
  // }, []);
  const handleLotout = () => {
    // setIsLoggedIn(true);
    // const checkToken = Cookies.remove("authorization");
    if (chackCookes) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  return (
    <>
      {isVisable && (
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
                {headerLink.map((link, index) => (
                  <li
                    key={link.name || index}
                    className={`${pathName === link.path ? style.active : ""}`}
                  >
                    <Link href={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={style.icons}>
              <CiSearch />
              {isLogin ? (
                <h1
                  className="cursor-pointer text-red-600"
                  onClick={() => handleLotout()}
                >
                  LogOut
                </h1>
              ) : (
                <Link href={"/signup"}>
                  <MdLogin className={style.noneResponsive} />
                </Link>
              )}

              <Link href={"/myAccount"}>
                <HiOutlineUserCircle className={style.noneResponsive} />
              </Link>
              <Link
                href={""}
                onClick={() => {
                  if (pathName === "/cart") {
                    toast.error("You are already on  the cart page!");
                  } else {
                    setIsOpenFlayCart(true);
                  }
                }}
              >
                <HiOutlineShoppingBag className={`${style.noneResponsive} `} />
              </Link>
              <h2>{totalQuantity}</h2>
            </div>
          </div>
          <HeaderMenuMobile />
        </header>
      )}
    </>
  );
};

export default Header;

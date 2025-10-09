"use client";
import React from "react";
import style from "./hreoShop.module.css";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { usePathname } from "next/navigation";
const HeroShop = () => {
  const pathName = usePathname();
  return (
    <div className={style.heroShop}>
      <div className={style.heroContainer}>
        <img src="/heroShop.jpg" alt="" />
        <div className={style.textHero}>
          <div className={style.path}>
            <Link
              href={"/"}
              className={pathName === "/" ? style.activeHome : ""}
            >
              Home
            </Link>
            <MdKeyboardArrowRight />
            <Link
              href={"/shop"}
              className={pathName === "/shop" ? style.activeHome : ""}
            >
              Shop
            </Link>
          </div>
          <h1>Shop Page</h1>
          <p>Lets design the place you always imagined.</p>
        </div>
      </div>
    </div>
  );
};

export default HeroShop;

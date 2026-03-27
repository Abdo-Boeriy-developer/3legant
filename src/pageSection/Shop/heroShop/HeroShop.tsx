"use client";
import React from "react";
import style from "./hreoShop.module.css";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { usePathname } from "next/navigation";
const HeroShop = ({
  shop,
  route,
  pageTitle,
  Paragraph,
}: {
  shop: string;
  route: string;
  pageTitle: string;
  Paragraph: string;
}) => {
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
              href={`${route}`}
              className={pathName === route ? style.activeHome : ""}
            >
              {shop}
            </Link>
          </div>
          <h1>{pageTitle}</h1>
          <p>{Paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroShop;

import React from "react";
import style from "./articles.module.css";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
const Articles = () => {
  return (
    <div className={style.articles}>
      <div className="container">
        <div className={style.textTop}>
          <h2>Articles</h2>
          <Link href={""}>
            More Articles
            <HiOutlineArrowRight />
          </Link>
        </div>
        <div className={style.articlesBox}>
          <div className={style.box}>
            <img src="/article1.jpg" alt="" />
            <h2>7 ways to decor your home</h2>
            <Link href={""}>
              Read More
              <HiOutlineArrowRight />
            </Link>
          </div>
          <div className={style.box}>
            <img src="/article2.jpg" alt="" />
            <h2>Kitchen organization</h2>
            <Link href={""}>
              Read More
              <HiOutlineArrowRight />
            </Link>
          </div>
          <div className={style.box}>
            <img src="/article3.jpg" alt="" />
            <h2>Decor your bedroom</h2>
            <Link href={""}>
              Read More
              <HiOutlineArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;

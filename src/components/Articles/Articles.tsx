import React from "react";
import style from "./articles.module.css";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import Image from "next/image";
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
            <Image
              src="/article1.jpg"
              alt=""
              width={500}
              height={500}
              loading="lazy"
            />
            <h2>7 ways to decor your home</h2>
            <Link href={""}>
              Read More
              <HiOutlineArrowRight />
            </Link>
          </div>
          <div className={style.box}>
            <Image
              src="/article2.jpg"
              alt=""
              width={500}
              height={500}
              loading="lazy"
            />
            <h2>Kitchen organization</h2>
            <Link href={""}>
              Read More
              <HiOutlineArrowRight />
            </Link>
          </div>
          <div className={style.box}>
            <Image
              src="/article3.jpg"
              alt=""
              width={500}
              height={500}
              loading="lazy"
            />
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

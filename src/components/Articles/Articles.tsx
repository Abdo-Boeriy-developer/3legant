import React from "react";
import style from "./articles.module.css";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import Image from "next/image";

interface ArticleType {
  thumbnail: string;
  title: string;
}

const Articles = async () => {
  const res = await fetch(
    "https://3legent-backend.vercel.app/api/v1/home/featured-blogs",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  const article: ArticleType[] = data.data;

  return (
    <div className={style.articles}>
      <div className="container">
        {/* Top Text */}
        <div className={style.textTop}>
          <h2>Articles</h2>
          <Link href={"#"}>
            More Articles
            <HiOutlineArrowRight />
          </Link>
        </div>

        {/* Container Box  */}

        <div className={style.articlesBox}>
          {/* Box */}
          {article.map((item: ArticleType) => (
            <div className={style.box}>
              <Image
                // src="/article1.jpg"
                src={item.thumbnail}
                alt="Article1"
                width={500}
                height={500}
                loading="lazy"
                sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
              />
              <h2>{item.title}</h2>
              <Link href={""}>
                Read More
                <HiOutlineArrowRight />
              </Link>
            </div>
          ))}
          {/* 
          <div className={style.box}>
            <Image
              src="/article1.jpg"
              alt="Article1"
              width={500}
              height={500}
              loading="lazy"
              sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
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
              alt="Article2"
              width={500}
              height={500}
              loading="lazy"
              sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
            />
            <h2>Kitchen organization</h2>
            <Link href={"#"}>
              Read More
              <HiOutlineArrowRight />
            </Link>
          </div>
          <div className={style.box}>
            <Image
              src="/article3.jpg"
              alt="Article3"
              width={500}
              height={500}
              loading="lazy"
              sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
            />
            <h2>Decor your bedroom</h2>
            <Link href={"#"}>
              Read More
              <HiOutlineArrowRight />
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Articles;

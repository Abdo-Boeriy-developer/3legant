import React from "react";
import style from "./Banner.module.css";
import Link from "next/link";
const Banner = () => {
  return (
    <div className={style.banner}>
      <div className={style.bannerContainer}>
        <div className={style.imageBanner}>
          <img src="/9f9efb2e4439d804a7b6bed916b72b3bda48939a.jpg" alt="" />
        </div>
        <div className={style.bannerText}>
          <h2 className={style.sale}>sale up to 35% off</h2>
          <h2 className={style.title}>
            hundreds of <br />
            new lower prices!
          </h2>
          <p>
            it's more affordable than ever to every <br />
            room in your home a stylish makeover
          </p>
          <Link href="">Shop Now </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

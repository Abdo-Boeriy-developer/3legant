import React from "react";
import style from "./Banner.module.css";
import Link from "next/link";
import Image from "next/image";
const Banner = () => {
  return (
    <div className={style.banner}>
      <div className={style.bannerContainer}>
        <div className={style.imageBanner}>
          <Image src="/contactus.jpg" alt="contactus" width={500} height={0} />
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
          <Link href="#">Shop Now </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

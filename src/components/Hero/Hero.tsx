"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from "./hero.module.css";
// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import HeroLoading from "./HeroLoading";

const Hero = () => {
  const [heroData, setHeroData] = useState<string[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const HeroApi = async () => {
      try {
        const respones = await fetch("http://localhost:3000/api/getHero");
        const data = await respones.json();
        if (data) {
          setHeroData(data);
        }
      } catch (error) {
        console.log("Error", error);
      } finally {
        setLoading(false);
      }
    };
    HeroApi();
  }, []);

  return (
    <>
      {loading ? (
        <HeroLoading />
      ) : (
        <Swiper
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className={`mySwiper ${style.swiper}`}
        >
          {heroData?.map((img, index) => (
            <SwiperSlide className={style.swiperSlide} key={index}>
              <img src={img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default Hero;

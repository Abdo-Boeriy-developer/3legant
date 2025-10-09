"use client";
import React, { useContext } from "react";
import style from "./NewArrivalsProducts.module.css";
import Link from "next/link";
// import icons
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";

// import icons
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { StoreContext } from "@/Context/ContextProvider";
const NewArrivalsProducts = () => {
  const { arrivalsProducts } = useContext(StoreContext);
  return (
    <div className={style.newArrivalsProducts}>
      <div className={style.productTop}>
        <h2>
          New <br /> Arrivals
        </h2>
        <Link href={""}>
          More Products <FaArrowRightLong />{" "}
        </Link>
      </div>
      <div className={style.productContainer}>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 500,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={`mySwiper ${style.swiper}`}
        >
          {/* {arrivalsProducts.map((product) => ( */}
          <SwiperSlide className={style.slide}>
            <div className={style.SlideCon}>
              <div className={style.product}>
                <div className={style.new_whislist}>
                  <div className={style.new}>
                    <h2>New</h2>
                    <h3>-50%</h3>
                  </div>
                  <div className={style.wishlist}>
                    <CiHeart />
                  </div>
                </div>
                <div className={style.image}>
                  <img
                    src="/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg"
                    // src={product.images[1]}
                    alt=""
                  />
                </div>
                <div className={style.addToCart}>
                  <button>Add To Cart</button>
                </div>
              </div>
            </div>
            <div className={style.reting_title_price}>
              <div className={style.reting}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h2 className={style.title}>Loveseat Sofa</h2>
              <div className={style.price}>
                <h2>$199.00</h2>
                <p>$400.00</p>
              </div>
            </div>
          </SwiperSlide>

          {/* ))} */}
        </Swiper>
      </div>
    </div>
  );
};

export default NewArrivalsProducts;

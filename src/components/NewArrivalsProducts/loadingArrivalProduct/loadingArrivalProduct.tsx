import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import card from "../../../../public/animation/cardLoading.json";
import Lottie from "lottie-react";
import style from "./loadingArrivalProduct.module.css";
const LoadingArrivalProduct = () => {
  return (
    <div>
      <div>
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 }, // الموبايل
            640: { slidesPerView: 2, spaceBetween: 15 }, // شاشات صغيرة
            1024: { slidesPerView: 3, spaceBetween: 20 }, // التابلت أو لابتوب صغير
            1280: { slidesPerView: 4, spaceBetween: 30 }, // الشاشات الكبيرة
          }}
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
          <SwiperSlide className={style.slide}>
            <div className={style.loaders}>
              <Lottie animationData={card} className={style.loader} />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.slide}>
            <div className={style.loaders}>
              <Lottie animationData={card} className={style.loader} />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.slide}>
            <div className={style.loaders}>
              <Lottie animationData={card} className={style.loader} />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.slide}>
            <div className={style.loaders}>
              <Lottie animationData={card} className={style.loader} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default LoadingArrivalProduct;

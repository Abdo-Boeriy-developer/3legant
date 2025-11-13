"use client";
import { useContext } from "react";
import React, { useEffect, useState } from "react";
import style from "./NewArrivalsProducts.module.css";
import Link from "next/link";
// import icons
import { Swiper, SwiperSlide } from "swiper/react";
import Cookies from "js-cookie";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";

// import icons
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { ArrivalsProduct } from "@/Types/arrivalsProductsType";
import AddToCartAction from "@/Services/AdddtocartActon/AddToCartAction";
import AddToWishlist from "@/Services/AddToWishlist/AddToWishlist";
import { CartStore } from "@/Context/CartContext";
import LoadingArrivalProduct from "./loadingArrivalProduct/loadingArrivalProduct";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";
const NewArrivalsProducts = () => {
  const route = useRouter();
  const [products, setProducts] = useState<ArrivalsProduct[]>([]);
  const { isWishlistData, getWisthListAi, getCartDataApi, cartData } =
    useContext(CartStore);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const newArrayProductApi = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/getArrayProduct");
        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        console.log("Error", error);
      } finally {
        setLoading(false);
      }
    };
    newArrayProductApi();
  }, []);

  const handleAddToWishlist = async (productId: string) => {
    const token = Cookies.get("authorization");
    if (token) {
      await AddToWishlist(productId);
      await getWisthListAi();
    } else {
      toast.error(
        <div className="text-sm">
          Your need to sign in before adding and start shopping Wisth us!
          <button
            className="text-red-400 text-sm cursor-pointer text-center mt-2 pl-2"
            onClick={() => route.push("/login")}
          >
            SingUP
          </button>
        </div>
      );
    }
  };
  return (
    <>
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
            spaceBetween={30}
            slidesPerView={4}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 10 }, // الموبايل
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
            {loading ? (
              <LoadingArrivalProduct />
            ) : (
              products.map((pro) => {
                const isInWisthlist = isWishlistData.some(
                  (p) => p._id === pro._id
                );
                const isInCart = cartData.find(
                  (p) => p.product._id === pro._id
                );
                return (
                  <SwiperSlide className={style.slide}>
                    <div className={style.slideBox}>
                      <div className={style.SlideCon}>
                        <div className={style.product}>
                          <div className={style.new_whislist}>
                            <div className={style.new}>
                              <h2>New</h2>
                              <h3>-50%</h3>
                            </div>
                            <div className={`  ${style.wishlist}`}>
                              {isInWisthlist ? (
                                <FaHeart className={style.inWisthlist} />
                              ) : (
                                <CiHeart
                                  onClick={() => handleAddToWishlist(pro._id)}
                                />
                              )}
                            </div>
                          </div>
                          <div className={style.image}>
                            <Link href={`/productDetails/${pro._id}`}>
                              <Image
                                src={pro.images[0]}
                                alt=""
                                width={500}
                                height={500}
                                loading="lazy"
                              />
                            </Link>
                            <div
                              className={`${style.addtocart} ${
                                isInCart ? "cursor-no-drop" : ""
                              }`}
                            >
                              <AddToCartAction productId={pro._id} />
                            </div>
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
                        <h2 className={style.title}>{pro.title}</h2>
                        <div className={style.price}>
                          <h2>{pro.price}</h2>
                          <p>$400.00</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })
            )}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default NewArrivalsProducts;

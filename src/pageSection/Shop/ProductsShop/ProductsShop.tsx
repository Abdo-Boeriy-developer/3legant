"use client";
import React, { useContext, useEffect, useMemo, useState } from "react";
import style from "./ProductsShop.module.css";
import { HiViewGrid } from "react-icons/hi";
import { BiSolidGrid } from "react-icons/bi";
import { CiGrid2H, CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import clsx from "clsx";
import { IoStarSharp } from "react-icons/io5";
import ProductShopLoading from "./productShopLoading";
import { StoreContext } from "@/Context/ContextProvider";
import AddToCartAction from "../../../Services/AdddtocartActon/AddToCartAction";
import Link from "next/link";
import { CartStore } from "@/Context/CartContext";
import AddToWishlist from "@/Services/AddToWishlist/AddToWishlist";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
interface Product {
  title: string;
  description: string;
  price: number;
  images: string[];
  _id: string;
  quantity: string;
}
const ProductsShop = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<Product[]>([]);
  const { sortBy, setSortBy, selectedPriceRange, selectedCategory } =
    useContext(StoreContext);
  const { isWishlistData, getWisthListAi } = useContext(CartStore);
  const route = useRouter();

  const getProductShop = async () => {
    try {
      const url = (() => {
        const base = `/api/shopProduct`;

        switch (true) {
          case selectedPriceRange.min === null &&
            selectedPriceRange.max === null:
            return base;
            break;
          case selectedPriceRange.min !== null &&
            selectedPriceRange.max === null:
            return `${base}?minPrice=${selectedPriceRange.min}`;
            break;
          case selectedPriceRange.min === null &&
            selectedPriceRange.max !== null:
            return `${base}?maxPrice=${selectedPriceRange.max}`;
            break;
          case selectedPriceRange.min !== null &&
            selectedPriceRange.max !== null:
            return `${base}?minPrice=${selectedPriceRange.min}&maxPrice=${selectedPriceRange.max}`;
            break;
          default: {
            return base;
          }
        }
      })();

      const category = (() => {
        const baseUrl = url;
        switch (true) {
          case selectedCategory === null || selectedCategory === "All Rooms":
            return baseUrl;
            break;
          case baseUrl.includes("?"):
            return `${baseUrl}&category=${encodeURIComponent(
              selectedCategory
            )}`;
            break;
          case selectedCategory !== null:
            return `${baseUrl}?category=${encodeURIComponent(
              selectedCategory
            )}`;
          default: {
            return baseUrl;
          }
        }
      })();

      const respones = await fetch(category);
      const data = await respones.json();

      setProduct(data.data);
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    getProductShop();
  }, [selectedPriceRange, selectedCategory]);

  const handleWisthList = async (productId: string) => {
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
      <div className={style.productShop}>
        <div className={style.textTop_Sort}>
          <h2>
            {selectedCategory === null ? "All Products" : selectedCategory}
          </h2>
          <div className={style.sortBy}>
            <div className={style.option}>
              <h2>Sort by</h2>
              <RiArrowDropDownLine />
            </div>
            <ul>
              <li
                onClick={() => setSortBy("all")}
                className={sortBy === "all" ? style.active : ""}
              >
                <BiSolidGrid />
              </li>
              <li
                onClick={() => setSortBy("tow")}
                className={sortBy === "tow" ? style.active : ""}
              >
                <HiViewGrid />
              </li>
              <li
                onClick={() => setSortBy("one")}
                className={sortBy === "one" ? style.active : ""}
              >
                <CiGrid2H />
              </li>
            </ul>
          </div>
        </div>
        {loading ? (
          <ProductShopLoading />
        ) : (
          <>
            <div className={clsx(style.sortProduct)}>
              {product?.length > 0 ? (
                product?.map((product, index) => {
                  const isInWisthList = isWishlistData.some(
                    (p) => p._id === product._id
                  );

                  return (
                    <>
                      <div
                        key={product._id || index}
                        className={clsx(
                          style.product,
                          sortBy === "all" ? style.product : "",
                          sortBy === "tow" ? style.tow : "",
                          sortBy === "one" ? style.one : ""
                        )}
                      >
                        <div className={style.image}>
                          <Link href={`/productDetails/${product._id}`}>
                            <img src={product.images[0]} alt={product.title} />
                          </Link>
                          <div className={style.new}>
                            <h2>NEW</h2>
                            <h3>-50%</h3>
                          </div>
                          <div className={style.wisthList}>
                            {isInWisthList ? (
                              <FaHeart className={style.isInWisthListe} />
                            ) : (
                              <CiHeart
                                onClick={() => handleWisthList(product._id)}
                              />
                            )}
                          </div>
                          <div className={style.addToCart}>
                            <AddToCartAction productId={product._id} />
                          </div>
                        </div>
                        <div className={style.title_price}>
                          <div className={style.stars}>
                            <IoStarSharp />
                            <IoStarSharp />
                            <IoStarSharp />
                            <IoStarSharp />
                            <IoStarSharp />
                          </div>
                          <h2>{product.title}</h2>
                          <div className={style.price}>
                            <h2>${product.price}</h2>
                            <p>$400.00</p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              ) : (
                <div className={style.noProduct}>
                  <h3>
                    No products found in this category :{" "}
                    <span>{selectedCategory}</span> 😢
                  </h3>
                </div>
              )}
            </div>
          </>
        )}

        <div className={style.showMore}>
          <button>Show More</button>
        </div>
      </div>
    </>
  );
};

export default ProductsShop;

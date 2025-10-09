"use client";
import React, { useContext, useEffect, useState } from "react";
import style from "./ProductsShop.module.css";

import { HiViewGrid } from "react-icons/hi";
import { BiSolidGrid } from "react-icons/bi";
import { CiGrid2V } from "react-icons/ci";
import { CiGrid2H } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import clsx from "clsx";
import { IoStarSharp } from "react-icons/io5";
import ProductShopLoading from "./productShopLoading";
import { StoreContext } from "@/Context/ContextProvider";
import AddToCartAction from "./AddToCartAction";
interface Product {
  title: string;
  description: string;
  price: number;
  images: string[];
  _id: string;
  // Add other fields as needed
}
const ProductsShop = () => {
  // const [sortBy, setSortBy] = useState<string>("all");
  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<Product[]>([]);
  const { sortBy, setSortBy } = useContext(StoreContext);
  useEffect(() => {
    const getProductShop = async () => {
      try {
        const respones = await fetch("http://localhost:3000/api/productShop");
        const data = await respones.json();
        console.log(data[0].description);
        setProduct(data);
      } catch (error) {
        console.log("Error", error);
      } finally {
        setLoading(false);
      }
    };
    getProductShop();
  }, []);

  return (
    <>
      <div className={style.productShop}>
        <div className={style.textTop_Sort}>
          <h2>Living Room</h2>
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
          <div className={clsx(style.sortProduct)}>
            {product.map((product) => (
              <div
                className={clsx(
                  style.product,
                  sortBy === "all" ? style.product : "",
                  sortBy === "tow" ? style.tow : "",
                  sortBy === "one" ? style.one : ""
                )}
                key={product._id}
              >
                <div className={style.image}>
                  <img src={product.images[0]} alt={product.title} />
                  <div className={style.new}>
                    <h2>NEW</h2>
                    <h3>-50%</h3>
                  </div>
                  <AddToCartAction productId={product._id} />
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
            ))}
          </div>
        )}

        <div className={style.showMore}>
          <button>Show More</button>
        </div>
      </div>
    </>
  );
};

export default ProductsShop;

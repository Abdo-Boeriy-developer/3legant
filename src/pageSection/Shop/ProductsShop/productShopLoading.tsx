"use client";

import React, { useState } from "react";
import style from "./ProductsShop.module.css";
import clsx from "clsx";
const ProductShopLoading = () => {
  const [sortBy] = useState<string>("all");

  return (
    <div className={clsx(style.sortProduct)}>
      <div
        className={clsx(
          style.product,
          sortBy === "all" ? style.product : "",
          sortBy === "tow" ? style.tow : "",
          sortBy === "one" ? style.one : ""
        )}
      >
        <div className={style.image}>
          <span className={style.loader}>Loading</span>
          <div className={style.new}></div>
        </div>
        <div className={style.title_price}>
          <div className={style.stars}></div>
        </div>
      </div>
    </div>
  );
};

export default ProductShopLoading;

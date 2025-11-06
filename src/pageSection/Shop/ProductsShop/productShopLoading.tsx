"use client";

import React, { useState } from "react";
import style from "./ProductsShop.module.css";
const ProductShopLoading = () => {
  return (
    <div className={style.loading}>
      <span className={style.loader}>L &nbsp; ading</span>
    </div>
  );
};

export default ProductShopLoading;

import React from "react";
import Filter from "../filter/Filter";
import style from "./filter_product.module.css";
import ProductsShop from "../ProductsShop/ProductsShop";
const Filter_products = () => {
  return (
    <div className={style.filter_product}>
      <Filter />
      <ProductsShop />
    </div>
  );
};

export default Filter_products;

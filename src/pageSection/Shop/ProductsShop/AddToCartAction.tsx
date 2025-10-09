"use client";
import React, { useEffect } from "react";
import style from "./ProductsShop.module.css";
import { addToCart } from "@/ServerAction/AddToCartWidthQuantity/AddToCartWidthQuantity";

import { ArrivalsProduct } from "@/Types/arrivalsProductsType";

const AddToCartAction = ({ productId }: { productId: string }) => {
  const quantity: number = 1;
  const addtocart = async () => {
    try {
      const response = await addToCart({ productId, quantity });
      if (response) {
        const data: ArrivalsProduct = await response.json();
        console.log(data);
      } else {
        console.log("Response is undefined");
      }
    } catch (error) {
      console.log(error, "Error");
    }
  };

  return (
    <div className={style.addToCart}>
      <button onClick={addtocart}>AddToCart</button>
    </div>
  );
};

export default AddToCartAction;

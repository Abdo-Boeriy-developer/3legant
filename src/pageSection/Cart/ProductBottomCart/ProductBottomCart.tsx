"use client";
import React, { useContext, useEffect, useState } from "react";
import { FiDelete, FiPlus } from "react-icons/fi";
import { TiMinus } from "react-icons/ti";
import { VscClose } from "react-icons/vsc";
import style from "./ProductBottomCart.module.css";
import { CartStore } from "@/Context/CartContext";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import axios from "axios";

import Image from "next/image";
interface ProductType {
  productId: string;
  quantity: number;
}

const ProductBottomCart = () => {
  const { cartData, loading } = useContext(CartStore);

  const updateItemcart = async ({ productId, quantity }: ProductType) => {
    const token = Cookies.get("authorization");
    try {
      const response = await axios.post(
        `https://3legent-backend.vercel.app/api/v1/cart`,
        { productId, quantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("response", response.data);

      if (response.data === "success") {
        toast.success("Successifly");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      {loading ? (
        <div className={style.loading}>
          <Image src={"/empty_box.webp"} alt="" width={250} height={300} />
          <h1>There are no product on the cart 😢</h1>
        </div>
      ) : cartData.length > 0 ? (
        cartData.map((pro) => {
          const itemTotal = Number(pro.product.price) * pro.quantity || 0;
          return (
            <>
              <div key={pro.product._id} className={style.productBottom}>
                <div className={style.iamgeProduct}>
                  <div className={style.img}>
                    <img src={pro.product.images[0]} alt="" />
                  </div>
                  <div className={style.textImageProduct}>
                    <h2>{pro.product.title}</h2>
                    <p>Color : {pro.product.versions[0].title}</p>
                    <button className={style.remove}>
                      <FiDelete />
                      Remove
                    </button>
                    <div className={style.quantity}>
                      <button>
                        <TiMinus />
                      </button>
                      <h2>{pro.quantity}</h2>
                      <button
                        onClick={() =>
                          updateItemcart({
                            productId: pro.product._id,
                            quantity: pro.quantity + 1,
                          })
                        }
                      >
                        <FiPlus />
                      </button>
                    </div>
                  </div>
                </div>
                <div className={style.price_quantity_total}>
                  <div className={style.quantity}>
                    <button>
                      <TiMinus />
                    </button>
                    <h2>{pro.quantity}</h2>
                    <button>
                      <FiPlus />
                    </button>
                  </div>
                  <div className={style.price}>
                    <h2>$ {pro.product.price}</h2>
                  </div>
                  <div className={style.total}>
                    <h2>$ {itemTotal}</h2>
                    <div className={style.mediaRemove}>
                      <VscClose />
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })
      ) : (
        <div className={style.loading}>
          <Image src={"/empty_box.webp"} alt="" width={250} height={300} />
          <h1>There are no product on the cart 😢</h1>
        </div>
      )}
    </>
  );
};

export default ProductBottomCart;

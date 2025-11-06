"use client";
import React, { useContext, useState } from "react";
import style from "./ClearCart.module.css";
import axios from "axios";
import toast from "react-hot-toast";
import { CartStore } from "@/Context/CartContext";
import Cookies from "js-cookie";
const ClearCart = () => {
  const { cartData, getCartDataApi } = useContext(CartStore);

  const [loading, setLoading] = useState(false);

  const clearCartApi = async () => {
    const token = Cookies.get("authorization");
    try {
      setLoading(true);
      const response = await axios.delete(
        "https://3legent-backend.vercel.app/api/v1/cart/clear",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.status === "success") {
        toast.success(response.data.message);
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  const handleClearCart = async () => {
    await clearCartApi();
    await getCartDataApi();
  };

  return (
    <>
      {cartData.length > 0 ? (
        <div className={style.clearCart} onClick={() => handleClearCart()}>
          <button type="button">{loading ? "Loading..." : "Clear Cart"}</button>
        </div>
      ) : null}
    </>
  );
};

export default ClearCart;

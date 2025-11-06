"use client";

import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
interface AddToCartParams {
  productId: string;
  quantity: number;
}

export const addToCart = async ({ productId, quantity }: AddToCartParams) => {
  const token = Cookies.get("authorization");
  try {
    const data = await axios.post(
      "https://3legent-backend.vercel.app/api/v1/cart",
      {
        productId,
        quantity,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (data.data.status == "success") {
      toast.success(`Product added to cart `);
    }
    return data.data;
  } catch (error) {
    console.log(" error:", error);
  }
};

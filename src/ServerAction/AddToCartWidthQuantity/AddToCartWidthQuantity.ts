"use client";

import { axiosInstans } from "@/utils/axios";
import toast from "react-hot-toast";
interface AddToCartParams {
  productId: string;
  quantity: number;
}

export const addToCart = async ({ productId, quantity }: AddToCartParams) => {
  try {
    const data = await axiosInstans.post(
      "cart",
      {
        productId,
        quantity,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (data.data.status == "success") {
      toast.success(`Product added to cart `);
    }
    return data.data;
  } catch (error) {
    console.log(" error:", error);
  }
};

"use client";
import { axiosInstans } from "@/utils/axios";
import toast from "react-hot-toast";

const AddToWishlist = async (productId: any) => {
  try {
    const response = await axiosInstans.post(
      `wishlist`,
      { productId },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    // console.log("response", response.data);
    if (response.data.status === "success") {
      toast.success("Product added to wishlist 🎉");
    }
  } catch (error) {
    // console.log("error", error);
  }

  return null;
};

export default AddToWishlist;

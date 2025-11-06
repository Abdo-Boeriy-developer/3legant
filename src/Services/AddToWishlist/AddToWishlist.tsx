"use client";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const AddToWishlist = async (productId: any) => {
  try {
    const toekn = Cookies.get("authorization");
    const response = await axios.post(
      `https://3legent-backend.vercel.app/api/v1/wishlist`,
      { productId },
      {
        headers: {
          Authorization: `Bearer ${toekn}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("response", response.data);
    if (response.data.status === "success") {
      toast.success("Product added to wishlist 🎉");
    }
  } catch (error) {
    console.log("error", error);
  }

  return null;
};

export default AddToWishlist;

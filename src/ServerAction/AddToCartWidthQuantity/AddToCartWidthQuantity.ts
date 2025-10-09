"use client";

import axios from "axios";

interface AddToCartParams {
  productId: string;
  quantity: number;
}

export const addToCart = async ({ productId, quantity }: AddToCartParams) => {
  try {
    const data = await axios.post(
      "https://3legent-backend.vercel.app/api/v1/cart",
      {
        productId,
        quantity,
      },
      {
        withCredentials: true,
        // headers: {
        //   cookies:
        //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGQ2YWUwMjA5MTQ4NWU5OGE4ODUwYjgiLCJlbWFpbCI6ImFkbWluMUBtYWlsLmNvbSIsImlhdCI6MTc1OTY5MjU0MywiZXhwIjoxNzYwMjk3MzQzfQ.6pRVtAqYmT81IeLhwSNtkNN0dUw4fkzBHIqbSmIokYg",
        //   "Content-Type": "application/json",
        // },
      }
    );

    console.log(data.data);
    return data.data;
  } catch (error) {
    console.log(" error:", error);
  }
};

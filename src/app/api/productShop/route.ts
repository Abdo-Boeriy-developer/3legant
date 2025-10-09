import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const data = await axios.get(
      "https://3legent-backend.vercel.app/api/v1/products"
    );
    return NextResponse.json(data.data.data.products);
  } catch (error) {
    console.log("Error", error);
  }
};

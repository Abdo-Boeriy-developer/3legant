import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const productid = req.nextUrl.searchParams.get("productid");
  try {
    const response = await axios.get(
      `https://3legent-backend.vercel.app/api/v1/products/${productid}`
    );

    console.log("response", response);
    return NextResponse.json(response.data);
  } catch (error: any) {
    console.log("error", error);
    return NextResponse.json(
      { message: "Failed to fetch product details", error: String(error) },
      { status: 500 }
    );
  }
}

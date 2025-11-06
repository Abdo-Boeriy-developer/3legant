import axios from "axios";
import { Params } from "next/dist/server/request/params";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.search;
  // console.log('searchParams', searchParams)
  try {
    const response = await axios.get(
      `https://3legent-backend.vercel.app/api/v1/products?${searchParams}`
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("Error", error);
  }
}

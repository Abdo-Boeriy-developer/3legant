import { axiosInstans } from "@/utils/axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await axiosInstans("home/latest-products");
    return NextResponse.json(response.data);
  } catch (error) {
    console.log("Error", error);
  }
}

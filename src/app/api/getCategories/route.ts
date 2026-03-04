import { axiosInstans } from "@/utils/axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await axiosInstans("home/featured-categories");
    return NextResponse.json(response.data);
  } catch (error) {
    console.log("error", error);
  }
}

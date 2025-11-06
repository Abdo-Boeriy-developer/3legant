import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await axios.get(
      "https://3legent-backend.vercel.app/api/v1/home/featured-categories"
    );
    return NextResponse.json(response.data);
  } catch (error) {
    console.log("error", error);
  }
}

import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const data = await axios.get(
      "https://3legent-backend.vercel.app/api/v1/general"
    );
    return NextResponse.json(data.data.data.heroImage);
  } catch (error) {
    console.log("Error", error);
  }
};

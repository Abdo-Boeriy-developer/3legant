import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const response = await axios.get(
      "https://3legent-backend.vercel.app/api/v1/general"
    );
    return NextResponse.json(response.data);
  } catch (error) {
    console.log("Error", error);
  }
};

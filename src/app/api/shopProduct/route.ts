import { axiosInstans } from "@/utils/axios";
import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
//   const searchParams = req.nextUrl.search;
//   // console.log('searchParams', searchParams)
//   try {
//     const response = await axiosInstans(`products?${searchParams}`);
//     return NextResponse.json(response.data);
//   } catch (error) {
//     console.log("Error", error);
//   }
// }

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.search;

  try {
    const response = await axiosInstans(`products${searchParams}`);

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.log("FULL ERROR:", error.response?.data);
    console.log("STATUS:", error.response?.status);
    console.log("MESSAGE:", error.message);

    return NextResponse.json(
      error.response?.data || { message: error.message },
      { status: 500 },
    );
    500;
  }
}

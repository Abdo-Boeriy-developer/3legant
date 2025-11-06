// import axios from "axios";
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
//   const productid = req.nextUrl.searchParams.get("productid");
//   try {
//     const response = await axios.get(
//       `https://3legent-backend.vercel.app/api/v1/products/${productid}`
//     );

//     console.log("response", response);
//     return NextResponse.json(response.data);
//   } catch (error: any) {
//     console.log("error", error);
//     return NextResponse.json(
//       { message: "Failed to fetch product details", error: String(error) },
//       { status: 500 }
//     );
//   }
// }
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  const productid = req.nextUrl.searchParams.get("productid");

  try {
    const response = await axios.get(
      `https://3legent-backend.vercel.app/api/v1/products/${productid}`
    );

    console.log("response", response.data);
    return NextResponse.json(response.data);
  } catch (err: unknown) {
    console.error("error", err);

    // إذا الخطأ من axios
    if (axios.isAxiosError(err)) {
      return NextResponse.json(
        {
          message: "Failed to fetch product details",
          error: err.response?.data || err.message,
        },
        { status: err.response?.status || 500 }
      );
    }

    // أي خطأ آخر
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

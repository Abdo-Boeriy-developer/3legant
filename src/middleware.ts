import { NextRequest, NextResponse } from "next/server";

const prodectedPage = [
  "/cart",
  "/wishlist",
  "/myAccount",
  "/address",
  "/orders",
];

export function middleware(req: NextRequest) {
  const token = req.cookies.get("authorization")?.value;

  if (prodectedPage.includes(req.nextUrl.pathname)) {
    if (!token) {
      const loginUrl = new URL("/login", req.url);
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/cart", "/wishlist", "/myAccount", "/address", "/orders"],
};

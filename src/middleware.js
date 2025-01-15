import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token") || { value: "" };
  const payload = jwt.decode(token?.value);

  if (payload?.role === "user" && pathname === "/admin") {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (pathname === "/admin" && !token?.value) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (pathname === "/admin/product" && !token?.value) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (pathname === "/admin/post" && !token?.value) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (pathname === "/admin/category" && !token?.value) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (token?.value && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/login",
    "/register",
    "/admin",
    "/admin/product",
    "/admin/post",
    "/admin/category",
  ],
};

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

// This function can be marked async if using await inside
export async function middleware(request: NextRequest) {
  let cookie = request.cookies.get("token");

  const isAuthRoute = request.nextUrl.pathname.startsWith("/auth");
  if (isAuthRoute && !cookie) {
    return NextResponse.next();
  } else if (isAuthRoute && cookie) {
    return NextResponse.redirect(new URL("/", request.nextUrl.origin));
  }

  if (!cookie) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  const resp = await fetch(`${API_URL}/auth/renew`, {
    method: "GET",
    headers: {
      token: cookie.value as string,
      "api-key": API_KEY as string,
    },
  });

  const data = await resp.json();

  const response = NextResponse.next();
  response.cookies.set("token", data.token);

  return response;
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};

import {  NextRequest, NextResponse } from "next/server";
import { CommunityEssential } from "./interfaces/";

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

  //Dejo esto como any porque me tira error aunque lo tipe. No sé por qué.
  const requestDecrypt: any = await fetch(`${API_URL}/auth/decrypt`, {
    method: "GET",
    headers: {
      token: cookie.value as string,
      "api-key": API_KEY as string,
    },
  });
  const foundUserData = await requestDecrypt.json();
  //Este caso no deberia de ser posible.
  if (!foundUserData) return NextResponse.redirect(new URL("/auth/login", request.url));
  
  //Que dios me perdone pero no tipo nada hoy
  let SAFE_USER_DATA: any = {
    fullName: foundUserData.user.fullname,
    email: foundUserData.user.email,
    username: foundUserData.user.username,
    type: foundUserData.user.type,
    community: null

  }

  if (foundUserData.user.community) {
    const community: CommunityEssential = {
      name: foundUserData.user.community.name,
      displayname: foundUserData.user.community.displayname,
      description: foundUserData.user.community.description
    }
    SAFE_USER_DATA["community"] = community;
  }
  
  response.cookies.set("user", JSON.stringify(SAFE_USER_DATA));



  return response;
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};

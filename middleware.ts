import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked async if using await inside
export function middleware(request: NextRequest) {
    if(request.nextUrl.pathname.startsWith('/auth')){
        return NextResponse.next();
    }

    let cookie = request.cookies.get('token');

    if(!cookie){
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    return NextResponse.next();
}
 
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|auth).*)',
}
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const session = 'Thiago';

    if(!session){
        const requestedPage = pathname;
        const url = request.nextUrl.clone();
        url.pathname = '/auth/login';
        
        return NextResponse.redirect(url);
    }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|auth).*)', // Match all routes except the ones starting with api, _next/static, _next/image, favicon.ico, auth
}
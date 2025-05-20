import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const cookie = request.cookies.get('auth');

    if (cookie?.name === 'auth' && cookie.value !== '0') {
        if (request.nextUrl.pathname === '/login') return NextResponse.redirect(new URL('/', request.url));

        return NextResponse.next();
    }

    if (request.nextUrl.pathname.startsWith('/login')) return NextResponse.next();

    return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
}
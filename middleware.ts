import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Páginas públicas (auth)
  const publicPaths = ['/', '/login'];

  // Se está tentando acessar rota protegida sem autenticação
  if (
    !publicPaths.includes(path) &&
    path.startsWith('/(protected)') &&
    !request.cookies.has('auth-token')
  ) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Se está na página de auth com autenticação
  if (
    publicPaths.includes(path) &&
    request.cookies.has('auth-token')
  ) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

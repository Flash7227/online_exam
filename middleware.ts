import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers';

export function middleware(request: NextRequest) {
  const name = request.cookies.get('name')?.value;
  const token = request.cookies.get('token')?.value;
  // console.log(name, token);
    if (!request.nextUrl.pathname.startsWith('/login')) {
      if(!name || !token){
        request.cookies.delete('name');
        request.cookies.delete('token');
        return Response.redirect(new URL('/login', request.url))
      }
    }

  // if (currentUser && !request.nextUrl.pathname.startsWith('/dashboard')) {
  //   return Response.redirect(new URL('/dashboard', request.url))
  // }
 
  // if (!currentUser && !request.nextUrl.pathname.startsWith('/login')) {
  //   return Response.redirect(new URL('/login', request.url))
  // }
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
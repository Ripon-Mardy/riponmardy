import { NextResponse } from "next/server";

export function middleware(req) {
  const path = req.nextUrl.pathname;

  const token = req.cookies.get('token')?.value;

  const isProtected = path.startsWith('/admin');

  if(isProtected && !token) {
    const loginURL = new URL('/admin', req.url);
    return NextResponse.redirect(loginURL)
  }

  // return NextResponse.next()
}

export const config = {
  matcher: ["/admin/dashboard:path*"],
};
import { NextResponse } from "next/server";

export function middleware(request) {
  const host = request.headers.get("host") || "";

  if (host.startsWith("www.")) {
    const nonWwwHost = host.replace(/^www\./, "");
    const { pathname, search } = request.nextUrl;
    const redirectUrl = `https://${nonWwwHost}${pathname}${search}`;
    return NextResponse.redirect(redirectUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};

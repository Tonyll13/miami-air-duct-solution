import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const p = req.nextUrl.pathname;

  if (
    p.startsWith("/privacy-policy") ||
    p.startsWith("/terms-of-service") ||
    p.startsWith("/227-2")
  ) {
    const res = NextResponse.next();
    res.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/privacy-policy/:path*",
    "/terms-of-service/:path*",
    "/227-2/:path*",
  ],
};

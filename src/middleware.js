import { NextResponse } from "next/server";
import { getSession } from "./services/authService";

export async function middleware(req) {
  const { user } = await getSession();
  const { pathname, searchParams } = req.nextUrl;

  const redirectUrl = searchParams.get("redirect") || "/";

  const authRoutes = ["/login", "/register"];
  const isAuthRoute = authRoutes.includes(pathname);
  const isDashboardRoute = pathname.startsWith("/dashboard");

  if (user && isAuthRoute) {
    return NextResponse.redirect(new URL(redirectUrl, req.url));
  }

  if (!user && isDashboardRoute) {
    return NextResponse.redirect(
      new URL(`/login?redirect=${pathname}`, req.url)
    );
  }

  return NextResponse.next();
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
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};

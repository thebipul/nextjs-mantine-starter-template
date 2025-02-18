import createMiddleware from "next-intl/middleware";
import { type NextRequest, NextResponse } from "next/server";
import { type Locale, routing } from "./i18n/routing";

const handleI18nRouting = createMiddleware({
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = routing.locales.some((locale) =>
    pathname.startsWith(`/${locale}`),
  );

  if (!hasLocale) {
    const acceptLanguage = request.headers.get("accept-language") || "en";
    let preferredLocale = acceptLanguage.split(",")[0].split("-")[0] as Locale;

    if (!routing.locales.includes(preferredLocale)) {
      preferredLocale = routing.defaultLocale;
    }

    const redirectUrl = new URL(
      `/${preferredLocale}${pathname}`,
      request.nextUrl.origin,
    );
    return NextResponse.redirect(redirectUrl);
  }

  return handleI18nRouting(request);
}

export const config = {
  matcher: ["/((?!_next|_vercel|.*\\..*).*)"],
};

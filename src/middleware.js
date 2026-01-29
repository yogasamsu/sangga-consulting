import { NextResponse } from 'next/server'

let locales = ['en', 'id']
let defaultLocale = 'id' // Default to Indonesia as requested or implied context, but usually English is default. User said "Harus 2 bahasa > english and Indonesia". I'll default to 'id' since it's an Indonesian company.

// Get the preferred locale, similar to the above or using a library
function getLocale(request) {
    // Simple check for now
    return defaultLocale
}

export function middleware(request) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    // Redirect if there is no locale
    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    // e.g. incoming request is /products
    // The new URL is now /en/products
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        // Skip all internal paths (_next) and the studio route
        '/((?!_next|favicon.ico|api|studio|.*\\..*).*)',
    ],
}

import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ua'],
 
  // Used when no locale matches
  defaultLocale: 'en',
  localePrefix: 'always'
});
 
export const config = {
  matcher: ['/', '/(ua|en)/:path*',
  '/((?!api|_next|_vercel|.*\\..*).*)',
  '/([\\w-]+)?/users/(.+)']
};
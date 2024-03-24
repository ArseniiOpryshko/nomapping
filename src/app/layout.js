import {unstable_setRequestLocale} from 'next-intl/server';

const locales = ['en', 'ua'];
 
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default function LocaleLayout({children, params: {locale}}) {
  unstable_setRequestLocale(locale);
  return children;
}

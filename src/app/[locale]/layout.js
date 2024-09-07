import { Work_Sans, Roboto } from "next/font/google";
import "@/styles/globals.css";
import MainLayout from "@/components/main_layout/MainLayout";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import getDomain from "@/configs/baseDomain";

const inter = Work_Sans({styles: "300,400,500,600,700,800", subsets: ["latin"] });

const pt = Roboto({weight: ["400", "500", "900", "700", "900"], styles: "300,400,500,600,700,800", subsets: ["cyrillic"] });

export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: {
      default: "Nomapping",
      template: "%s - Nomapping"
    },
    description: t('index_desc'),
    metadataBase: new URL(`${getDomain()}`),
    // verification:{
    //   google: "google-site-verification=jkPQzr4O_rRY2JPiIcva6MVn9619-nGK8rHXol9n4vE"
    // }
  };
}

export default function RootLayout({children, params: {locale}}) {
  return (
    <html style={{scrollBehavior: "smooth"}} lang={locale=="en"?locale:"uk-UA"}>
      <body className={locale == 'en' ? inter.className : pt.className}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}

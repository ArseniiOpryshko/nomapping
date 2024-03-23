import { Work_Sans, Roboto } from "next/font/google";
import "@/styles/globals.css";
import MainLayout from "@/components/main_layout/MainLayout";
import { getTranslations } from "next-intl/server";

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
  };
}

export default function RootLayout({ children, params }) {
  return (
    <html style={{scrollBehavior: "smooth"}} lang={params.locale}>
      <body className={params.locale == 'en' ? inter.className : pt.className}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}

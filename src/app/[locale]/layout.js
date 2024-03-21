import { Work_Sans } from "next/font/google";
import "@/styles/globals.css";
import MainLayout from "@/components/main_layout/MainLayout";

const inter = Work_Sans({  styles: "300,400,500,600,700,800", subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Nomapping",
    template: "%s - Nomapping"
  },
  description: "NoMapping 2024 STUDIO OF MOTION DESIGN AND INTERACTIVE MEDIA",
};

export default function RootLayout({ children, params }) {
  return (
    <html style={{scrollBehavior: "smooth"}} lang={params.locale}>
      <body className={inter.className}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}

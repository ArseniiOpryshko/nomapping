import { Work_Sans } from "next/font/google";
import "@/styles/globals.css";
import MainLayout from "@/components/main_layout/MainLayout";

const inter = Work_Sans({  styles: "300,400,500,600,700,800", subsets: ["latin"] });

export const metadata = {
  title: "Студія моушен дизайну та інтерактивного медіа",
  description: "NoMapping 2024 STUDIO OF MOTION DESIGN AND INTERACTIVE MEDIA",
  icons: {
    icon: "logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html style={{scrollBehavior: "smooth"}}  lang="en">
      <body className={inter.className}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}

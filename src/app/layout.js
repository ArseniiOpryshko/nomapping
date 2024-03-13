import { Inter } from "next/font/google";
import "@/styles/globals.css";
import MainLayout from "@/components/main_layout/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Студія моушен дизайну та інтерактивного медіа",
  description: "NoMapping 2024 STUDIO OF MOTION DESIGN AND INTERACTIVE MEDIA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}

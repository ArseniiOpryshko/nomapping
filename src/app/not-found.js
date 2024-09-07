'use client'

import Link from "next/link";

export default function NotFound() {
  return (
    <html>
        <body style={{backgroundColor: "black", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height: "100vh"}}>
            <h1 style={{textAlign: "center", fontFamily:"Verdana"}}>404 - Page Not Found</h1>
            <Link href="/" style={{ fontFamily:"Verdana", fontSize: "20px", color: "white"}}>
              return to home page
            </Link>
        </body>
    </html>
  );
};

"use client";
import { useEffect } from "react";
import "./globals.css";
import HeaderOne from "@/components/layout/headers/header-one";

export default function RootLayout({ children }) {
 
    return (
      <html lang="en">
        <head>
          <link rel="icon" type="image/png" href="../favicon.ico" />
        </head>
        <body 
        style={{marginTop:"10%"}}
        >
          {/* Google Translate Widget */}
          {/* <div id="google_translate_element" style={{ position: "fixed", top: 10, right: 10, zIndex: 9999 }}></div> */}
          {children}
        </body>
      </html>
    );
}

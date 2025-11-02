import type { Metadata } from "next";

import Script from "next/script";
import React from "react";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Seheon Yu Portfolio",
  description: "Welcome to the Seheon Yu exhibition",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="relative h-full antialiased" lang="ko">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YZLPL173WW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-YZLPL173WW');
          `}
        </Script>
      </head>
      <body className="overflow-x-clip">{children}</body>
    </html>
  );
}

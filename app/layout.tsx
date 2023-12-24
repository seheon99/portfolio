import React from "react";

import type { Metadata } from "next";
import "#app/globals.css";

export const metadata: Metadata = {
  title: "YU SEHEON",
  description: "SEHEON's personal website",
  icons: [
    {
      href: "/favicon.ico",
      rel: "icon",
    },
    {
      href: "/favicon.ico",
      rel: "shortcut icon",
    },
    {
      href: "/favicon.ico",
      rel: "apple-touch-icon",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full antialiased " lang="ko">
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        {children}
      </body>
    </html>
  );
}

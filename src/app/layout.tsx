import type { Metadata } from "next";

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
      <body className="overflow-x-clip">{children}</body>
    </html>
  );
}

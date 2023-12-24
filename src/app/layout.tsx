import React from 'react';

import type { Metadata } from 'next';

import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'SEHEON',
  description: 'Personal website of Seheon Yu',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full antialiased" lang="en">
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        {children}
      </body>
    </html>
  );
}

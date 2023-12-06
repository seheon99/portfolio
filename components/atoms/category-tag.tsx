import React from "react";

interface CategoryTagProps {
  href: string;
  title: string;
}

export default function CategoryTag({ href, title }: CategoryTagProps) {
  return (
    <a
      href={href}
      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
    >
      {title}
    </a>
  );
}

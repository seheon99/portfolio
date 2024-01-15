import React from "react";

import Link from "next/link";

interface CategoryTagProps {
  category: string;
}

export default function CategoryTag({ category }: CategoryTagProps) {
  return (
    <Link
      href={""}
      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100"
    >
      {category}
    </Link>
  );
}

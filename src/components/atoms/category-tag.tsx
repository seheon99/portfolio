import React from "react";

import Link from "next/link";

import { ProjectCategory } from "@/entities/project-category";

interface CategoryTagProps {
  category: ProjectCategory;
}

export default function CategoryTag({ category }: CategoryTagProps) {
  return (
    <Link
      href={category.href}
      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100"
    >
      {category.title}
    </Link>
  );
}

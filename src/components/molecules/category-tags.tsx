"use client";

import React, { useEffect, useRef } from "react";

import CategoryTag from "@/components/atoms/category-tag";

interface Props {
  categories: string[];
}

export default function CategoryTags({ categories }: Props) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const interval = setInterval(() => {
      if (scrollContainer) {
        if (scrollContainer.scrollLeft < scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft += 1;
        } else {
          scrollContainer.scrollLeft = 0;
        }
      }
    }, 10);
    return () => clearInterval(interval);
  }, [scrollContainerRef]);

  return (
    <div ref={scrollContainerRef} className="flex gap-x-2 overflow-x-hidden">
      {categories.map((category, index) => (
        <CategoryTag key={index} category={category} />
      ))}
    </div>
  );
}

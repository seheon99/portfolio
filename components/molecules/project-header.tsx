import React from "react";

import CategoryTag from "#components/atoms/category-tag";
import TimeDisplay from "#components/atoms/time-display";
import { ProjectCategory } from "#entities/project-category";

interface ProjectHeaderProps {
  startDate: Date;
  endDate: Date;
  categories: ProjectCategory[];
}

export default function ProjectHeader({
  startDate,
  endDate,
  categories,
}: ProjectHeaderProps) {
  return (
    <div className="mt-8 flex items-center gap-x-4 text-xs">
      <span className="text-gray-500">From.</span>
      <TimeDisplay datetime={startDate} year month />
      <span className="text-gray-500">To.</span>
      <TimeDisplay datetime={endDate} year month />
      {categories.map((category, index) => (
        <CategoryTag key={index} href={category.href} title={category.title} />
      ))}
    </div>
  );
}

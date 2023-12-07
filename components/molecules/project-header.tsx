import React from "react";

import ProjectImage from "#components/atoms/project-image";
import CategoryTags from "#components/molecules/category-tags";
import { ProjectCategory } from "#entities/project-category";
import { StaticImageData } from "next/image";

interface ProjectHeaderProps {
  image: StaticImageData;
  categories: ProjectCategory[];
}

export default function ProjectHeader({
  image,
  categories,
}: ProjectHeaderProps) {
  return (
    <div className="w-full">
      <ProjectImage image={image} />
      <div className="mt-4" />
      <CategoryTags categories={categories} />
    </div>
  );
}

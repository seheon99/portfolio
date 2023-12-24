import React from 'react';

import ProjectImage from '@/components/atoms/project-image';
import CategoryTags from '@/components/molecules/category-tags';

import { Project } from '../../entities/project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col items-start justify-between">
      <div className="w-full">
        <ProjectImage image={project.image} />
        <div className="mt-4" />
        <CategoryTags categories={project.categories} />
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <a href={project.href}>
            <span className="absolute inset-0" />
            {project.title}
          </a>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
          {project.description}
        </p>
      </div>
    </article>
  );
}

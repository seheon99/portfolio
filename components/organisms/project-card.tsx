import React from "react";

import ProjectBody from "#components/molecules/project-body";
import ProjectHeader from "#components/molecules/project-header";

import { Project } from "../../entities/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex max-w-xl flex-col items-start justify-between">
      <ProjectHeader image={project.image} categories={project.categories} />
      <ProjectBody
        href={project.href}
        title={project.title}
        description={project.description}
      />
    </article>
  );
}

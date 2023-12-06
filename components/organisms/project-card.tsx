import React from "react";

import ProjectImage from "#components/atoms/project-image";
import ProjectBody from "#components/molecules/project-body";
import ProjectHeader from "#components/molecules/project-header";

import { Project } from "../../entities/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col items-start justify-between">
      <ProjectImage image={project.image} />
      <div className="max-w-xl">
        <ProjectHeader
          startDate={project.startDate}
          endDate={project.endDate}
          categories={project.categories}
        />
        <ProjectBody
          href={project.href}
          title={project.title}
          description={project.description}
        />
      </div>
    </article>
  );
}

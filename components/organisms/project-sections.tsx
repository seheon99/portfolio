import React from "react";

import ProjectCard from "#components/organisms/project-card";
import { Project } from "#entities/project";

interface Props {
  projects: Project[];
}

export default function ProjectSections({ projects }: Props) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            개인 프로젝트를 진행하며 개발 역량을 키우고 팀 프로젝트를 진행하며
            협업 역량을 키웠습니다.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

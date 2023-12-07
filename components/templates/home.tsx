import React from "react";

import Header from "#components/organisms/header";
import ProjectSections from "#components/organisms/project-sections";
import { Project } from "#entities/project";

interface Props {
  header: {
    links: { name: string; href: string }[];
    stats: { name: string; value: string }[];
    aboutMe: string[];
  };
  projects: Project[];
}

export default function Home({ header, projects }: Props) {
  return (
    <div>
      <Header
        id="aboutme"
        links={header.links}
        stats={header.stats}
        aboutMe={header.aboutMe}
      />
      <ProjectSections projects={projects} />
    </div>
  );
}

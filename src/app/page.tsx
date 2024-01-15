import React from "react";

import HomeTemplate from "@/components/templates/home";
import { projects } from "@/entities/project";

const headerLinks = [
  { name: "About Me", href: "#aboutme" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
];

const headerStats = [
  { name: "Projects", value: "20+" },
  { name: "PRs", value: "250+" },
  { name: "Commits", value: "2000+" },
  { name: "Ambition", value: "Unlimited" },
];

const aboutMe = [
  "어릴 때부터 컴퓨터에 관심이 많아 자연스럽게 컴퓨터 공학을 전공하게 되었습니다.",
  "학교에서 컴퓨터 공학을 전공하고 42 Seoul과 SW마에스트로에서 프로젝트를 진행하며 개발 실력을 쌓았습니다.",
  "이제 프론트엔드 개발자로서의 첫 시작을 위한 멋진 회사를 찾고 있습니다.",
];

export default function Home() {
  return (
    <HomeTemplate
      header={{
        links: headerLinks,
        stats: headerStats,
        aboutMe: aboutMe,
      }}
      projects={projects}
    />
  );
}

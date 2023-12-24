import React from "react";

import DrTrashImage from "@/assets/images/projects/drtrash.png";
import GiftHubImage from "@/assets/images/projects/gifthub.png";
import HomeTemplate from "@/components/templates/home";
import { Project } from "@/entities/project";
import { projectCategories } from "@/entities/project-category";

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
  "저는 어릴 때부터 컴퓨터에 관심이 많아 자연스럽게 컴퓨터 공학을 전공하게 되었습니다.",
  "학교에서 컴퓨터 공학을 전공하고 42 Seoul과 SW마에스트로에서 프로젝트를 진행하며 개발 실력을 쌓았습니다.",
  "현재는 프론트엔드 개발자로서의 첫 시작을 위한 멋진 회사를 찾고 있습니다.",
];

const projects: Project[] = [
  {
    id: 1,
    title: "기프트허브 - 당신의 기프티콘을 지켜주는 기특한 기프트허브",
    href: "#",
    description:
      "Dart/Flutter를 기반으로 상태 관리를 위한 Riverpod, 이벤트 로깅을 위한 Firebase Analytics, 다이나믹한 UX를 위한 Rive를 사용했습니다. 또한 Clean Architecture를 기반으로 Command 패턴을 사용했고 이를 통해 코드 품질을 유지하며 이벤트 로깅과 실행 취소 작업을 쉽게 구현할 수 있었습니다.",
    image: GiftHubImage,
    categories: [
      projectCategories.mobile,
      projectCategories.frontend,
      projectCategories.dart,
      projectCategories.flutter,
      projectCategories.riverpod,
    ],
  },
  {
    id: 2,
    title: "Dr.Trash - 올바른 분리수거를 도와주는 친환경 지구 지키미",
    href: "#",
    description:
      "Nest.js를 기반으로 RESTful API를 개발했으며, 클라이언트와 인공지능 서버가 통신할 수 있는 Kafka 서버, 클라이언트가 보낸 이미지가 저장되는 스토리지 서버를 만들어 Micro Service Architecture 형태로 운용했습니다.",
    image: DrTrashImage,
    categories: [
      projectCategories.mobile,
      projectCategories.backend,
      projectCategories.nestjs,
      projectCategories.typescript,
      projectCategories.kafka,
    ],
  },
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

import { StaticImageData } from "next/image";

import DrTrashImage from "@/assets/images/projects/drtrash.png";
import GiftHubImage from "@/assets/images/projects/gifthub.png";

export interface Project {
  id: number;
  title: string;
  href: string;
  description: string;
  image: StaticImageData;
  categories: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "기프트허브 - 당신의 기프티콘을 지켜주는 기특한 기프트허브",
    href: "#",
    description:
      "Dart/Flutter를 기반으로 상태 관리를 위한 Riverpod, 이벤트 로깅을 위한 Firebase Analytics, 다이나믹한 UX를 위한 Rive를 사용했습니다. 또한 Clean Architecture를 기반으로 Command 패턴을 사용했고 이를 통해 코드 품질을 유지하며 이벤트 로깅과 실행 취소 작업을 쉽게 구현할 수 있었습니다.",
    image: GiftHubImage,
    categories: ["mobile", "frontend", "dart", "flutter", "riverpod"],
  },
  {
    id: 2,
    title: "Dr.Trash - 올바른 분리수거를 도와주는 친환경 지구 지키미",
    href: "#",
    description:
      "Nest.js를 기반으로 RESTful API를 개발했으며, 클라이언트와 인공지능 서버가 통신할 수 있는 Kafka 서버, 클라이언트가 보낸 이미지가 저장되는 스토리지 서버를 만들어 Micro Service Architecture 형태로 운용했습니다.",
    image: DrTrashImage,
    categories: ["mobile", "backend", "nestjs", "typescript", "kafka"],
  },
];

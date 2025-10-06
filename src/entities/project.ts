import { StaticImageData } from "next/image";
import { Temporal } from "temporal-polyfill";

import { BilingualString } from "@/types";

import { DrTrashIcon, GiftHubIcon } from "@/assets/images/projects";

export interface Project {
  id: string;
  icon: StaticImageData;
  title: BilingualString;
  brief: BilingualString;
  techStack: string[];

  startedAt: Temporal.PlainDate;
  endedAt: Temporal.PlainDate;
}

export const projects: Project[] = [
  {
    id: "drtrash",
    icon: DrTrashIcon,
    title: { ko: "분리수거 박사님", en: "Dr. Trash" },
    brief: {
      ko: [
        "분리수거 박사님은 우리가 버리는 일상의 작은 습관에 시선을 돌립니다.",
        "라즈베리파이에 연결된 카메라를 통해 쓰레기의 마지막 순간을 포착하고,",
        "서버의 인공지능이 올바른 분리수거인지 판별합니다.",
        "올바른 분리수거는 포인트로 환원되어 사용자에게 기프티콘으로 돌아옵니다.",
        "버림과 보상의 순환 속에서, 우리는 환경을 다시 바라보게 됩니다.",
      ].join(" "),
      en: [
        "Dr. Trash invites us to look closer at the small rituals of disposal in our everyday lives.",
        "A camera connected to a Raspberry Pi captures the final moment of each piece of waste,",
        "while an AI server determines whether the act is environmentally correct.",
        "Proper recycling is rewarded with points, later exchanged for digital gifts.",
        "Within this cycle of discard and reward, we are encouraged to reexamine our relationship with the environment.",
      ].join(" "),
    },
    techStack: ["Nest.js", "Kafka", "Redis", "PostgreSQL", "Raspberry Pi"],
    startedAt: Temporal.PlainDate.from({ year: 2022, month: 8, day: 1 }),
    endedAt: Temporal.PlainDate.from({ year: 2022, month: 11, day: 1 }),
  },
  {
    id: "gifthub",
    icon: GiftHubIcon,
    title: { ko: "기프트허브", en: "GiftHub" },
    brief: {
      ko: [
        "기프트허브는 스마트폰으로 도착한 모든 모바일 상품권을 한곳에 모아, 점점 잊혀가는 가치에 관심을 갖습니다.",
        "모바일 상품권은 이미지 공유 한 번으로 자동 등록되고, 유효기간은 조용히 그리고 강력히 기억됩니다.",
        "필요한 순간엔 나눔과 교환으로 흐름을 바꾸며, 소멸될 수도 있던 기회는 다시 선물로 돌아옵니다.",
        "사용자의 습관을 방해하지 않으면서도, 일상의 작은 보관소가 더 나은 사용으로 이어지도록 유도합니다.",
      ].join(" "),
      en: [
        "GiftHub gathers every mobile gift card on your phone, inviting a second look at value that often slips away.",
        "With a simple icon share, cards are registered automatically, and expirations are quietly remembered.",
        "When needed, sharing and exchange redirect the flow—what might have vanished returns as a gift.",
        "Without interrupting your habits, this small archive of everyday life nudges each card toward better use.",
      ].join(" "),
    },
    techStack: ["Flutter", "Riverpod", "Firebase", "Clean Architecture"],
    startedAt: Temporal.PlainDate.from({ year: 2023, month: 4, day: 1 }),
    endedAt: Temporal.PlainDate.from({ year: 2023, month: 11, day: 1 }),
  },
];

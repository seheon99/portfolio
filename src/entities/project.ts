import { StaticImageData } from "next/image";
import { Temporal } from "temporal-polyfill";

import { BilingualString } from "@/types";

import {
  DrTrashIcon,
  GiftHubIcon,
  MiniRtIcon,
  PhilosophersIcon,
  WebservIcon,
  TranscendenceIcon,
  TimeToGoIcon,
  FitIcon,
} from "@/assets/images/projects";

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
    id: "minirt",
    icon: MiniRtIcon,
    title: { ko: "miniRT", en: "" },
    brief: {
      ko: [
        "miniRT는 빛이 물체와 만나는 장면을 작은 화면 위에 펼칩니다.",
        "광원으로부터의 빛을 화면의 모든 픽셀에 쏘아 물체와 만나는 공간의 색상을 별처럼 펼쳐줍니다.",
        "충돌과 반사, 그림자가 순서대로 드러나며 C로 작성된 수식은 반짝이는 픽셀이 됩니다.",
        "화려함을 비워둔 자리에서, 화면은 숫자로 표현된 수식의 세상을 모니터에 비춰줍니다.",
      ].join(" "),
      en: [
        "miniRT unfolds the moment where light meets matter on a small screen.",
        "From each light source, rays are cast across every pixel, scattering colors of space like stars.",
        "Collisions, reflections, and shadows appear in turn, as equations written in C shimmer into pixels.",
        "In the absence of spectacle, the screen quietly reveals a world of numbers made visible.",
      ].join(" "),
    },
    techStack: ["C", "Ray Tracing", "Computer Graphics"],
    startedAt: Temporal.PlainDate.from({ year: 2020, month: 8, day: 24 }),
    endedAt: Temporal.PlainDate.from({ year: 2020, month: 11, day: 16 }),
  },
  {
    id: "philosophers",
    icon: PhilosophersIcon,
    title: { ko: "philosophers", en: "" },
    brief: {
      ko: [
        "철학자들은 원형 식탁에 앉아 식사와 사색 사이를 오갑니다.",
        "배고픔과 사고, 식사와 졸음의 경계 위에서 프로그램은 숨을 쉽니다.",
        "누군가는 기다리고, 누군가는 먹으며, 그리고 누군가는 잠을 자고 있습니다.",
        "이 작은 시뮬레이션은 동시성과 시간과 질서를 탐구하는 실험입니다.",
      ].join(" "),
      en: [
        "The philosophers sit around a round table, moving between thought and meal.",
        "On the boundary between hunger, reflection, eating, and sleep, the program breathes.",
        "One waits, one eats, and another falls asleep.",
        "This small simulation is an exploration of concurrency of time and order.",
      ].join(" "),
    },
    techStack: ["C", "Mutex", "Semaphore", "Thread Synchronization"],
    startedAt: Temporal.PlainDate.from({ year: 2021, month: 3, day: 2 }),
    endedAt: Temporal.PlainDate.from({ year: 2021, month: 3, day: 19 }),
  },
  {
    id: "webserv",
    icon: WebservIcon,
    title: { ko: "webserv", en: "" },
    brief: {
      ko: [
        "웹서버는 HTTP라는 단어 뒤에 숨겨진 약속의 세계를 펼쳐 보입니다.",
        "요청과 응답, 연결과 끊김의 반복 속에서 서버는 쉼 없이 대화를 이어갑니다.",
        "클라이언트의 '한 줄' 요청은 서버의 '한숨'과 닮아있고,",
        "모든 응답은 기다림 끝에 도착한 작은 이야기입니다.",
        "여기, 보이지 않는 대화가 데이터로, 신호로, 그리고 연결로 피어납니다.",
      ].join(" "),
      en: [
        'The web server unfolds the hidden world of promises behind the word "HTTP".',
        "In the endless cycle of request and response, of connection and disconnection, the server keeps breathing in dialogue.",
        "A client's 'single' request resembles a 'sigh' from the server,",
        "and every response arrives as a small story at the end of waiting.",
        "Here, invisible conversation bloom as data, as signal, as connection.",
      ].join(" "),
    },
    techStack: ["C++98", "Socket", "HTTP/1.1", "Non-blocking I/O"],
    startedAt: Temporal.PlainDate.from({ year: 2021, month: 7, day: 14 }),
    endedAt: Temporal.PlainDate.from({ year: 2021, month: 8, day: 25 }),
  },
  {
    id: "transcendence",
    icon: TranscendenceIcon,
    title: { ko: "핑퐁", en: "Ping Pong" },
    brief: {
      ko: [
        "공이 오고 갑니다. 단순한 왕복 속에서 공간이 생기고 질서가 만들어집니다.",
        "좌우로만 움직이던 화면 위에서, 플래이어는 그 길을 개척해 나갑니다.",
        "한쪽의 실수는 다른 쪽의 점수가 되고, 그 교환은 반복됩니다.",
        "남는 것은 승패가 아니라, 주고 받음 그 리듬 자체입니다.",
      ].join(" "),
      en: [
        "The ball moves back and forth.",
        "From this simple motion, space emerges, and order takes shape.",
        "On a screen limited to left and right, human will finds its path.",
        "One side's mistake becomes the other's point, and the cycle continues.",
        "In the end, what remains is not victory or loss, but the rhythm of exchange itself.",
      ].join(" "),
    },
    techStack: ["TypeScript", "NestJS", "GraphQL", "PostgreSQL", "Docker"],
    startedAt: Temporal.PlainDate.from({ year: 2021, month: 9, day: 20 }),
    endedAt: Temporal.PlainDate.from({ year: 2021, month: 12, day: 12 }),
  },
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
  {
    id: "fit",
    icon: FitIcon,
    title: { ko: "핏", en: "F-IT" },
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
    startedAt: Temporal.PlainDate.from({ year: 2023, month: 8, day: 21 }),
    endedAt: Temporal.PlainDate.from({ year: 2024, month: 8, day: 26 }),
  },
  {
    id: "timetogo",
    icon: TimeToGoIcon,
    title: { ko: "언제만나", en: "Time to Go" },
    brief: {
      ko: [
        "'언제만나'는 출발과 도착 사이의 시간을 잇는 작은 계산기입니다.",
        "화면 속 작은 라쿤에게 대화하듯 출발지와 목적지, 그리고 도착해야 하는 시간을 알려주면,",
        "라쿤은 머릿속에서 조용히 짱구를 굴려 가장 알맞은 출발 시간을 찾아냅니다.",
        "지도 어플을 열고 시간을 계산하는 대신, 이제 라쿤의 답 하나면 충분합니다.",
        "시간을 역으로 헤아리는 일, 그 속에서 우리는 조금 더 여유로워집니다.",
      ].join(" "),
      en: [
        "'Time to Go' is a small calculator that bridges the moment between departure and arrival.",
        "Tell the raccoon where you are, where you need to be, and when you must arrive,",
        "and it quietly rolls its thoughts to find the perfect time to leave.",
        "No more tracing back through maps and minutes — one answer from the raccoon is enough.",
        "In reversing time, we find a little more room to breathe.",
      ].join(" "),
    },
    techStack: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "SWR",
      "Zustand",
      "PWA",
    ],
    startedAt: Temporal.PlainDate.from({ year: 2023, month: 11, day: 29 }),
    endedAt: Temporal.PlainDate.from({ year: 2024, month: 7, day: 20 }),
  },
];

"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

import {
  Badge,
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
  Heading,
  Subheading,
  Text,
} from "@/components/base";
import { BilingualString } from "@/types";

export type ProjectDisplayPeriod = {
  start: { year: number; month: number };
  end: { year: number; month: number };
};

export type ProjectDisplayClientProps = {
  image: StaticImageData;
  title: BilingualString;
  brief: BilingualString;
  techStack: string[];
  period: ProjectDisplayPeriod;
};

export function ProjectDisplayClient({
  image,
  title,
  brief,
  techStack,
  period,
}: ProjectDisplayClientProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className="mx-10 my-4 w-90 text-left transition outline-none focus-visible:ring-2 focus-visible:ring-zinc-950/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-white/60 dark:focus-visible:ring-offset-zinc-950"
      >
        <div className="relative aspect-square overflow-hidden rounded-[15.625%] bg-white shadow-md">
          <Image
            src={image}
            fill
            style={{ objectFit: "cover" }}
            alt={`image of ${title.en}`}
          />
        </div>
        <div className="h-10" />
        <Text>
          {period.start.year}. {period.start.month}. ~ {period.end.year}. {period.end.month}.
        </Text>
        <div className="flex items-baseline gap-2">
          <Heading>{title.ko}</Heading>
          <Subheading>{title.en}</Subheading>
        </div>
        <div className="h-3" />
        <Text>{brief.ko}</Text>
        <div className="h-5" />
        <Text>{brief.en}</Text>
        <div className="h-5"></div>
        <div className="flex flex-wrap gap-1">
          {techStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </button>

      <Dialog open={isOpen} onClose={handleClose} size="2xl">
        <DialogTitle>{title.ko}</DialogTitle>
        <DialogDescription>{brief.ko}</DialogDescription>
        <DialogBody className="space-y-6">
          <div className="space-y-2">
            <Subheading>{title.en}</Subheading>
            <Text>{brief.en}</Text>
          </div>

          <div className="space-y-2">
            <Heading className="text-base font-semibold">프로젝트 기간</Heading>
            <Text>
              {period.start.year}. {period.start.month}. ~ {period.end.year}. {period.end.month}.
            </Text>
          </div>

          <div className="space-y-3">
            <Heading className="text-base font-semibold">기술 스택</Heading>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <Badge key={`modal-${tech}`}>{tech}</Badge>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <Heading className="text-base font-semibold">프로젝트 소개</Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim
              sit amet, adipiscing nec, ultricies sed, dolor.
            </Text>
            <Text>
              Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor,
              orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
            </Text>
            <Text>
              Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in
              risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.
            </Text>
          </div>
        </DialogBody>
        <DialogActions className="sm:hidden">
          <button
            type="button"
            onClick={handleClose}
            className="rounded-lg bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 dark:focus-visible:outline-white"
          >
            닫기
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}

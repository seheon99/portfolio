import Image, { type StaticImageData } from "next/image";
import { Temporal } from "temporal-polyfill";

import { Heading, Subheading, Text } from "@/components/base";
import { BilingualString } from "@/types";

import { Badge } from "./base/badge";

type ProjectDisplayProps = {
  image: StaticImageData;
  title: BilingualString;
  brief: BilingualString;
  techStack: string[];
  startedAt: Temporal.PlainDate;
  endedAt: Temporal.PlainDate;
};

export function ProjectDisplay({
  image,
  title,
  brief,
  techStack,
  startedAt,
  endedAt,
}: ProjectDisplayProps) {
  return (
    <div className="mx-10 my-4 w-90">
      <div className="relative aspect-square overflow-hidden rounded-[15.625%] shadow-md">
        <Image
          src={image}
          fill
          style={{ objectFit: "cover" }}
          alt={`image of ${title.en}`}
        />
      </div>
      <div className="h-10" />
      <Text>
        {startedAt.year}. {startedAt.month}. ~ {endedAt.year}. {endedAt.month}.
      </Text>
      <div className="flex items-baseline gap-2 bg-white">
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
    </div>
  );
}

import { Temporal } from "temporal-polyfill";

import {
  ProjectDisplayClient,
  type ProjectDisplayClientProps,
  type ProjectDisplayPeriod,
} from "./project-display.client";

type ProjectDisplayProps = Omit<ProjectDisplayClientProps, "period"> & {
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
    <ProjectDisplayClient
      image={image}
      title={title}
      brief={brief}
      techStack={techStack}
      period={mapPeriod(startedAt, endedAt)}
    />
  );
}

function mapPeriod(startedAt: Temporal.PlainDate, endedAt: Temporal.PlainDate): ProjectDisplayPeriod {
  return {
    start: { year: startedAt.year, month: startedAt.month },
    end: { year: endedAt.year, month: endedAt.month },
  };
}

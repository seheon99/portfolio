import React from "react";

import Stat from "#/atoms/stat";

interface StatsListProps {
  stats: {
    name: string;
    value: string;
  }[];
}

export default function StatsList({ stats }: StatsListProps) {
  return (
    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Stat key={stat.name} {...stat} />
      ))}
    </dl>
  );
}

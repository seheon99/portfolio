import React, { HTMLAttributes } from "react";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const TYPOGRAPH_VARIANT = {
  h2: "text-4xl font-bold tracking-tight sm:text-6xl ",
  p: "text-lg",
};

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  typograph?: keyof typeof TYPOGRAPH_VARIANT;
}

export default function Text({
  typograph = "p",
  className,
  children,
  ...props
}: TextProps) {
  const TAG = typograph;
  return (
    <TAG
      className={twMerge(clsx(TYPOGRAPH_VARIANT[typograph], className))}
      {...props}
    >
      {children}
    </TAG>
  );
}

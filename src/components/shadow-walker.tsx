"use client";

import { motion } from "motion/react";

import { twcn } from "@/utilities";

interface ShadowWalkerProps {
  className?: string;
  duration?: number;
  delay?: number;
}

export function ShadowWalker({
  className,
  duration = 20,
  delay = 0,
}: ShadowWalkerProps) {
  return (
    <motion.div
      className={twcn(
        "pointer-events-none absolute bottom-20 left-[-10vw] h-12 w-28 rounded-full bg-stone-900/25 blur-3xl",
        className,
      )}
      animate={{
        x: ["-10vw", "110vw"],
        scale: [1, 1.1, 1],
        opacity: [0.25, 0.4, 0.25],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

"use client";

import { motion } from "motion/react";

import { twcn } from "@/utilities";

interface WalkerProps {
  className?: string;
  size?: number;
  speed?: number;
  move?: boolean;
}

export function Walker({ className, size = 1, speed = 1, move = false }: WalkerProps) {
  const travelDuration = 24 / speed;
  const stepDuration = 1.8 / speed;

  return (
    <motion.div
      className={twcn("pointer-events-none relative h-48 w-24", className)}
      style={{ scale: size }}
      animate={{
        ...(move ? { x: ["-10vw", "110vw"] } : { x: 0 }),
        y: [0, -6, 0],
      }}
      transition={{
        x: move
          ? {
              duration: travelDuration,
              repeat: Infinity,
              ease: "linear",
            }
          : undefined,
        y: {
          duration: stepDuration,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },
      }}
    >
      <motion.span
        className="absolute left-1/2 top-0 h-10 w-10 -translate-x-1/2 rounded-full bg-stone-900/60"
        animate={{ scaleY: [1, 0.97, 1] }}
        transition={{
          duration: stepDuration,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      <span className="absolute left-1/2 top-10 h-24 w-4 -translate-x-1/2 rounded-full bg-stone-900/60" />
      <motion.span
        className="absolute left-[34%] top-16 h-20 w-3 origin-top rounded-full bg-stone-900/60"
        animate={{ rotate: [18, -18, 18] }}
        transition={{
          duration: stepDuration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.span
        className="absolute left-[66%] top-16 h-20 w-3 origin-top rounded-full bg-stone-900/60"
        animate={{ rotate: [-18, 18, -18] }}
        transition={{
          duration: stepDuration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.span
        className="absolute left-[36%] top-32 h-24 w-3 origin-top rounded-full bg-stone-900/60"
        animate={{ rotate: [-12, 12, -12] }}
        transition={{
          duration: stepDuration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.span
        className="absolute left-[64%] top-32 h-24 w-3 origin-top rounded-full bg-stone-900/60"
        animate={{ rotate: [12, -12, 12] }}
        transition={{
          duration: stepDuration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}

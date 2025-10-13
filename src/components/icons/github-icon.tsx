"use client";

import { motion } from "motion/react";

import { twcn } from "@/utilities";

import { GithubPath } from "@/assets/paths";

type GithubIconProps = {
  className?: string;
};

export function GithubIcon({ className }: GithubIconProps) {
  return (
    <motion.svg className={twcn(className)} viewBox="0 0 100 100">
      <motion.path d={GithubPath} />
    </motion.svg>
  );
}

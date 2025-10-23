"use client";

import { Heading, Text } from "./base";
import { ArrowRightIcon } from "./icons";
import { ShadowWalker } from "./shadow-walker";
import { Walker } from "./walker";

export function HeroSection() {
  return (
    <div className="relative h-screen w-300 overflow-hidden bg-stone-200 p-10">
      <div className="relative z-10 flex gap-20">
        <Heading className="text-[144px]/[144px]!">
          seheon<span className="text-[180px]">.</span>yu
        </Heading>
        <Text className="mt-14 text-2xl/8!">
          Seheon is frontend engineer, this is exhibition of his works
        </Text>
      </div>
      <div className="absolute bottom-10 left-10 z-10 flex flex-col items-center">
        <Heading>Exhibition This way</Heading>
        <ArrowRightIcon className="size-40" />
      </div>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <ShadowWalker className="bottom-16" />
        <Walker
          className="absolute bottom-24 left-[-12vw] opacity-20"
          size={1.1}
          speed={0.8}
          move
        />
      </div>
    </div>
  );
}

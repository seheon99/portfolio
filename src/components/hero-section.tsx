"use client";

import { Heading, Text } from "./base";
import { ArrowRightIcon } from "./icons";

export function HeroSection() {
  return (
    <div className="relative h-screen w-300 bg-stone-200 p-10">
      <div className="flex gap-20">
        <Heading className="text-[144px]/[144px]!">
          seheon<span className="text-[180px]">.</span>yu
        </Heading>
        <Text className="mt-14 text-2xl/8!">
          Seheon is frontend engineer, this is exhibition of his works
        </Text>
      </div>
      <div className="absolute bottom-10 left-10 flex flex-col items-center">
        <Heading>Exhibition This way</Heading>
        <ArrowRightIcon className="size-40" />
      </div>
    </div>
  );
}

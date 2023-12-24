import React from "react";

import Image, { StaticImageData } from "next/image";

interface ProjectImageProps {
  image: StaticImageData;
}

export default function ProjectImage({ image }: ProjectImageProps) {
  return (
    <div className="relative w-full">
      <Image
        src={image}
        alt=""
        className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
      />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
    </div>
  );
}

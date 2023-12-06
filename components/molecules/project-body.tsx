import React from "react";

interface ProjectBodyProps {
  href: string;
  title: string;
  description: string;
}

export default function ProjectBody({
  href,
  title,
  description,
}: ProjectBodyProps) {
  return (
    <div className="group relative">
      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
        <a href={href}>
          <span className="absolute inset-0" />
          {title}
        </a>
      </h3>
      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
        {description}
      </p>
    </div>
  );
}

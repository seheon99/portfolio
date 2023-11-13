import React from "react";

import Link from "next/link";

interface LinkListProps {
  links: {
    name: string;
    href: string;
  }[];
}

export default function LinkList({ links }: LinkListProps) {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
      {links.map((link) => (
        <Link key={link.name} href={link.href}>
          {link.name} <span aria-hidden="true">&rarr;</span>
        </Link>
      ))}
    </div>
  );
}

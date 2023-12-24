import { StaticImageData } from "next/image";

import { ProjectCategory } from "@/entities/project-category";

export interface Project {
  id: number;
  title: string;
  href: string;
  description: string;
  image: StaticImageData;
  categories: ProjectCategory[];
}

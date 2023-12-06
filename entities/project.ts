import { ProjectCategory } from "#entities/project-category";
import { StaticImageData } from "next/image";

export interface Project {
  id: number;
  title: string;
  href: string;
  description: string;
  image: StaticImageData;
  startDate: Date;
  endDate: Date;
  categories: ProjectCategory[];
}

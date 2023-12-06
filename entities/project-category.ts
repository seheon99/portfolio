export interface ProjectCategory {
  href: string;
  title: string;
}

export const projectCategories: Record<string, ProjectCategory> = {
  react: { href: "#", title: "React" },
  frontend: { href: "#", title: "Frontend" },
  mobile: { href: "#", title: "Mobile" },
  web: { href: "#", title: "Web" },
};

export interface ProjectCategory {
  href: string;
  title: string;
}

export const projectCategories: Record<string, ProjectCategory> = {
  frontend: { href: "#", title: "Frontend" },
  backend: { href: "#", title: "Backend" },

  mobile: { href: "#", title: "Mobile" },
  web: { href: "#", title: "Web" },

  react: { href: "#", title: "React" },
  flutter: { href: "#", title: "Flutter" },
  nodejs: { href: "#", title: "Node.js" },

  nextjs: { href: "#", title: "Next.js" },
  nestjs: { href: "#", title: "Nest.js" },

  riverpod: { href: "#", title: "Riverpod" },
  kafka: { href: "#", title: "Kafka" },
  docker: { href: "#", title: "Docker" },

  dart: { href: "#", title: "Dart" },
  typescript: { href: "#", title: "TypeScript" },
};

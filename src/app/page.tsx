import {
  EpilogueSection,
  HeroSection,
  HorizontalScene,
  ProjectDisplay,
} from "@/components";
import { projects } from "@/entities/project";

export default function Home() {
  return (
    <main className="bg-stone-100">
      <HorizontalScene className="gap-90">
        <HeroSection />
        {projects.map((p) => (
          <ProjectDisplay
            key={p.id}
            image={p.icon}
            title={p.title}
            brief={p.brief}
            techStack={p.techStack}
            startedAt={p.startedAt}
            endedAt={p.endedAt}
          />
        ))}
        <EpilogueSection />
      </HorizontalScene>
    </main>
  );
}

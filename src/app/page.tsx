import { HorizontalScrollSection, ProjectDisplay } from "@/components";
import { projects } from "@/entities/project";

export default function Home() {
  return (
    <main>
      <HorizontalScrollSection className="gap-90">
        <div className="h-screen w-200 bg-red-500"></div>
        <div className="h-screen w-screen bg-blue-500"></div>
        {...projects.map((p) => (
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
        <div className="h-screen w-300 bg-green-500"></div>
      </HorizontalScrollSection>
    </main>
  );
}

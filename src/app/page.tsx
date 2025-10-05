import HorizontalScrollSection from "@/components/horizontal-scroll-section";

export default function Home() {
  return (
    <main>
      <section className="flex h-screen items-center justify-center bg-gray-200 text-5xl font-bold">
        Vertical Section 1
      </section>

      <HorizontalScrollSection>
        <div className="h-screen w-100 shrink-0 bg-red-500"></div>
        <div className="h-screen w-500 shrink-0 bg-blue-500"></div>
        <div className="h-screen w-300 shrink-0 bg-green-500"></div>
      </HorizontalScrollSection>

      <section className="flex h-screen items-center justify-center bg-gray-400 text-5xl font-bold">
        Vertical Section 2
      </section>
    </main>
  );
}

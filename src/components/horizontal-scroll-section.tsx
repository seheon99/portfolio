"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";

import { twcn } from "@/utilities";

interface HorizontalScrollSectionProps {
  className?: string;
  children: React.ReactNode[];
}

export function HorizontalScrollSection({
  className,
  children,
}: HorizontalScrollSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [distance, setDistance] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
  });

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const update = () => {
      if (section && content) {
        section.style.height = `${content.scrollWidth}px`;
        setDistance(content.scrollWidth - content.clientWidth);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["0px", `-${distance}px`]);

  return (
    <section ref={sectionRef} className="relative min-h-screen">
      <motion.div
        ref={contentRef}
        style={{ x }}
        className={twcn(
          className,
          "sticky top-0 flex items-start will-change-transform"
        )}
      >
        {children.map((child, i) => (
          <div key={i} className="shrink-0">
            {child}
          </div>
        ))}
      </motion.div>
    </section>
  );
}

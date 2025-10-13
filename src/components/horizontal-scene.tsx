"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useLayoutEffect, useRef, useState, Children } from "react";

import { twcn } from "@/utilities";

interface HorizontalSceneProps {
  className?: string;
  children: React.ReactNode[];
}

export function HorizontalScene({ className, children }: HorizontalSceneProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [distance, setDistance] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0px", `-${distance}px`]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) {
      return;
    }

    const update = () => {
      section.style.height = `${content.scrollWidth}px`;
      setDistance(content.scrollWidth - content.clientWidth);
    };
    update();

    const observer = new ResizeObserver(update);
    observer.observe(content);

    return () => observer.disconnect();
  }, []);

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
        {Children.toArray(children).map((child, i) => (
          <div key={i} className="shrink-0">
            {child}
          </div>
        ))}
      </motion.div>
    </section>
  );
}

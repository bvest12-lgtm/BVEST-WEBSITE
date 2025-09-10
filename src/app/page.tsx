"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { Hero } from "@/components/Hero";
import { Hackathon } from "@/components/Hackathon";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { EventDetails } from "@/components/events/EventDetails";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const sections = [
    <Hero key="hero" />,
    <Hackathon key="hackathon" />,
    <EventDetails key="event-details" />,
  ];

  const transforms = sections.map((_, i) => {
    const totalSections = sections.length;
    const sectionStart = i / totalSections;
    const sectionEnd = (i + 1) / totalSections;
    const sectionMid = (sectionStart + sectionEnd) / 2;

    // Window where section is fully visible (snap effect)
    const fadeInEnd = sectionStart + (1 / totalSections) * 0.3;
    const fadeOutStart = sectionEnd - (1 / totalSections) * 0.3;

    const opacity = useTransform(
      scrollYProgress,
      [sectionStart, fadeInEnd, fadeOutStart, sectionEnd],
      [i === 0 ? 1 : 0, 1, 1, 0]
    );

    const x = useTransform(
      scrollYProgress,
      [sectionStart, fadeInEnd, fadeOutStart, sectionEnd],
      [
        i === 0 ? "0%" : "50%",
        "0%",
        "0%",
        i === totalSections - 1 ? "0%" : "-50%",
      ]
    );

    const zIndex = sections.length - i;

    return { opacity, x, zIndex };
  });

  return (
    <div ref={containerRef} className="relative">
      <AnimatedBackground />

      <div className="relative h-[300vh]">
        <div className="sticky top-0 h-[100vh] flex items-center justify-center overflow-hidden">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              style={{
                x: transforms[i].x,
                opacity: transforms[i].opacity,
                zIndex: transforms[i].zIndex,
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 1rem",
                pointerEvents: "none",
              }}
            >
              <div className="w-full max-w-6xl pointer-events-auto">
                {section}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

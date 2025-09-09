"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HackathonLanding } from "@/components/hackathon/HackathonLanding";
import { HackathonAbout } from "@/components/hackathon/HackathonAbout";
import { HackathonGuests } from "@/components/hackathon/HackathonGuests";
import Timeline from "@/components/Timeline";
import HowToApply from "@/components/HowToApply";
import ProblemStatements from "@/components/ProblemStatements";

export default function EcoCodePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const sections = [
    <HackathonLanding key="landing" />,
    <HackathonAbout key="about" />,
    <HowToApply key="apply" />,
    <ProblemStatements key="problems" />,
    <Timeline key="timeline" />,
  ];

  const transforms = sections.map((_, i) => {
    const totalSections = sections.length;
    const sectionStart = i / totalSections;
    const sectionEnd = (i + 1) / totalSections;

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
      [i === 0 ? "0%" : "50%", "0%", "0%", "-50%"]
    );

    return { opacity, x };
  });

  return (
    <div ref={containerRef} className="relative bg-transparent">
      <div className="relative h-[600vh] bg-transparent">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-transparent">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              className="bg-transparent"
              style={{
                x: transforms[i].x,
                opacity: transforms[i].opacity,
                zIndex: sections.length - i,
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 1rem",
                pointerEvents: i === 0 ? "auto" : "none",
                background: 'transparent',
              }}
            >
              <div className="w-full max-w-6xl bg-transparent">
                {section}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

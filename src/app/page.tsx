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

  const totalSections = sections.length;

<<<<<<< HEAD
    // Window where section is fully visible (snap effect)
    const fadeInEnd = sectionStart + (1 / totalSections) * 0.3;
    const fadeOutStart = sectionEnd - (1 / totalSections) * 0.3;
=======
  // Define section start/end values
  const sectionStart0 = 0;
  const sectionEnd0 = 1 / totalSections;
  const fadeInEnd0 = sectionStart0 + (1 / totalSections) * 0.3;
  const fadeOutStart0 = sectionEnd0 - (1 / totalSections) * 0.3;
>>>>>>> 1cae407a820a7d22c9aeba192c62992847617c92

  const sectionStart1 = sectionEnd0;
  const sectionEnd1 = 2 / totalSections;
  const fadeInEnd1 = sectionStart1 + (1 / totalSections) * 0.3;
  const fadeOutStart1 = sectionEnd1 - (1 / totalSections) * 0.3;

<<<<<<< HEAD
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
=======
  const sectionStart2 = sectionEnd1;
  const sectionEnd2 = 1;
  const fadeInEnd2 = sectionStart2 + (1 / totalSections) * 0.3;
  const fadeOutStart2 = sectionEnd2 - (1 / totalSections) * 0.3;
>>>>>>> 1cae407a820a7d22c9aeba192c62992847617c92

  // Define transforms at top level for each section
  const opacity0 = useTransform(
    scrollYProgress,
    [sectionStart0, fadeInEnd0, fadeOutStart0, sectionEnd0],
    [1, 1, 0, 0]
  );
  const x0 = useTransform(
    scrollYProgress,
    [sectionStart0, fadeInEnd0, fadeOutStart0, sectionEnd0],
    ["0%", "0%", "-50%", "-50%"]
  );

  const opacity1 = useTransform(
    scrollYProgress,
    [sectionStart1, fadeInEnd1, fadeOutStart1, sectionEnd1],
    [0, 1, 1, 0]
  );
  const x1 = useTransform(
    scrollYProgress,
    [sectionStart1, fadeInEnd1, fadeOutStart1, sectionEnd1],
    ["50%", "0%", "0%", "-50%"]
  );

  const opacity2 = useTransform(
    scrollYProgress,
    [sectionStart2, fadeInEnd2, fadeOutStart2, sectionEnd2],
    [0, 1, 1, 0]
  );
  const x2 = useTransform(
    scrollYProgress,
    [sectionStart2, fadeInEnd2, fadeOutStart2, sectionEnd2],
    ["50%", "0%", "0%", "-50%"]
  );

  const transforms = [
    { opacity: opacity0, x: x0, zIndex: 3 },
    { opacity: opacity1, x: x1, zIndex: 2 },
    { opacity: opacity2, x: x2, zIndex: 1 },
  ];

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
              <div className="w-full max-w-6xl pointer-events-auto">{section}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

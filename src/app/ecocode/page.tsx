"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HackathonLanding } from "@/components/hackathon/HackathonLanding";
import { HackathonAbout } from "@/components/hackathon/HackathonAbout";
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

  // Define transforms explicitly at the top level
  const opacity0 = useTransform(
    scrollYProgress,
    [0, 0.06, 0.14, 0.2],
    [1, 1, 0, 0]
  );
  const x0 = useTransform(
    scrollYProgress,
    [0, 0.06, 0.14, 0.2],
    ["0%", "0%", "-50%", "-50%"]
  );

  const opacity1 = useTransform(
    scrollYProgress,
    [0.2, 0.26, 0.34, 0.4],
    [0, 1, 1, 0]
  );
  const x1 = useTransform(
    scrollYProgress,
    [0.2, 0.26, 0.34, 0.4],
    ["50%", "0%", "0%", "-50%"]
  );

  const opacity2 = useTransform(
    scrollYProgress,
    [0.4, 0.46, 0.54, 0.6],
    [0, 1, 1, 0]
  );
  const x2 = useTransform(
    scrollYProgress,
    [0.4, 0.46, 0.54, 0.6],
    ["50%", "0%", "0%", "-50%"]
  );

  const opacity3 = useTransform(
    scrollYProgress,
    [0.6, 0.66, 0.74, 0.8],
    [0, 1, 1, 0]
  );
  const x3 = useTransform(
    scrollYProgress,
    [0.6, 0.66, 0.74, 0.8],
    ["50%", "0%", "0%", "-50%"]
  );

  const opacity4 = useTransform(
    scrollYProgress,
    [0.8, 0.86, 0.94, 1],
    [0, 1, 1, 0]
  );
  const x4 = useTransform(
    scrollYProgress,
    [0.8, 0.86, 0.94, 1],
    ["50%", "0%", "0%", "-50%"]
  );

  const transforms = [
    { opacity: opacity0, x: x0 },
    { opacity: opacity1, x: x1 },
    { opacity: opacity2, x: x2 },
    { opacity: opacity3, x: x3 },
    { opacity: opacity4, x: x4 },
  ];

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative h-[600vh] w-full">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden ">
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
                background: "transparent",
              }}
            >
              <div className="w-full max-w-6xl bg-transparent">{section}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

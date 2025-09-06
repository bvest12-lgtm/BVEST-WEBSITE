"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TeamCardGrid } from "@/components/TeamCard";

export default function TeamPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="min-h-screen flex items-center justify-center py-20">
      <div className="w-full max-w-6xl px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Our Team
        </motion.h1>
        <TeamCardGrid />
      </div>
    </div>
  );
}

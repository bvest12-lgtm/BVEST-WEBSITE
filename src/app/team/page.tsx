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
        <TeamCardGrid />
      </div>
    </div>
  );
}

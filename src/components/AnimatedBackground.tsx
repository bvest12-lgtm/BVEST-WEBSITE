"use client";
import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <video
      className="fixed top-0 left-0 w-screen h-screen object-cover z-0"
      src="/bg-video2.mp4"
      autoPlay
      loop
      muted
      playsInline
    />
  );
}

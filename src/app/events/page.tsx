"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { EventCardGrid } from "@/components/EventCard";

const events = [
  // Add your events data here
  {
    id: 1,
    title: "Tech Talk",
    description: "An exciting tech talk about the latest trends in technology.",
    date: "2023-10-10",
    time: "18:00",
    location: "Main Auditorium"
  },
  // Add more events as needed
];

export default function EventsPage() {
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
          Events
        </motion.h1>
        <EventCardGrid />
      </div>
    </div>
  );
}

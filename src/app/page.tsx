"use client";

import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Hackathon } from "@/components/Hackathon";
import Timeline from "@/components/Timeline";
import HowToApply from "@/components/HowToApply";
import ProblemStatements from "@/components/ProblemStatements";
import { EventCardGrid } from "@/components/EventCard";
import {TeamCardGrid} from "@/components/TeamCard";
export default function Home() {
  return (
    <main className="min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <Hackathon />
      <EventCardGrid />
      <Timeline />
      <HowToApply />
      <ProblemStatements />
      <TeamCardGrid />
    </main>
  );
}

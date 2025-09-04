"use client";

import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Hackathon } from "@/components/Hackathon";
import Timeline from "@/components/Timeline";
import HowToApply from "@/components/HowToApply";
import ProblemStatements from "@/components/ProblemStatements";
import { EventCardGrid } from "@/components/EventCard";
import { TeamCardGrid } from "@/components/TeamCard";
import ScrollAnimation from "@/components/ScrollAnimation";
import { ReactNode } from 'react';

// Wrapper component for each slide
const Slide = ({ children, className = '' }: { children: ReactNode, className?: string }) => (
  <div className={`h-full w-full flex items-center justify-center ${className}`}>
    <div className="w-full max-w-6xl px-4">
      {children}
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="relative h-screen w-screen">
      <AnimatedBackground />
      <Navbar />
      
      <ScrollAnimation id="main-slider" className="relative z-10">
        <Slide>
          <Hero />
        </Slide>
        
        <Slide className="bg-gray-900/80 backdrop-blur-sm">
          <Hackathon />
        </Slide>
        
        <Slide className="bg-gray-800/80">
          <EventCardGrid />
        </Slide>
        
        <Slide className="bg-gray-900/80">
          <Timeline />
        </Slide>
        
        <Slide className="bg-gray-800/80">
          <HowToApply />
        </Slide>
        
        <Slide className="bg-gray-900/80">
          <ProblemStatements />
        </Slide>
        
        <Slide className="bg-gray-800/80">
          <TeamCardGrid />
        </Slide>
      </ScrollAnimation>
    </div>
  );
}

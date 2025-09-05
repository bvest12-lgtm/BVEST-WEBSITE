//Please ye ganda code dekh ke mujhe mat puchna ki ye kaise kaam karta hai, main bhi nahi janta
//Maine bas copy paste kiya hai internet se
//Agar kuch samajhna hai to mujhe mat puchna, main bhi nahi janta
//Bas chalana hai to chalana, samajhna hai to samajhna, nahi samajhna to nahi samajhna
//Mujhe is code ka koi idea nahi hai, main bhi aise hi hoon jaise tum ho
"use client";

import { useRef, useEffect, useState } from "react";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Hackathon } from "@/components/Hackathon";
import Timeline from "@/components/Timeline";
import HowToApply from "@/components/HowToApply";
import ProblemStatements from "@/components/ProblemStatements";
import { EventCardGrid } from "@/components/EventCard";
import { TeamCardGrid } from "@/components/TeamCard";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  const totalSections = 7;
  const scrollHeight = totalSections * 100;
  const sectionLabels = [
    "Hero",
    "Hackathon",
    "Events",
    "Timeline",
    "How to Apply",
    "Problems",
    "Team",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(progress);

      // Calculate active section
      const currentSection = Math.floor(progress * totalSections);
      setActiveSection(Math.min(currentSection, totalSections - 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalSections]);

  useEffect(() => {
    document.body.style.height = `${scrollHeight}vh`;
    return () => {
      document.body.style.height = "auto";
    };
  }, [scrollHeight]);

  const handleSectionClick = (index: number) => {
    const targetScroll = (index / (totalSections - 1)) * (scrollHeight - 100);
    window.scrollTo({
      top: targetScroll * (window.innerHeight / 100),
      behavior: "smooth",
    });
  };

  const translateX = -(scrollProgress * 600);
  const scrollHintOpacity = Math.max(0, 1 - scrollProgress * 10);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white sticky top-0">
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-green-300 to-green-500 z-50 origin-left transition-transform duration-100"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      {/* Floating Particles Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Optional background components */}
      {/* <AnimatedBackground /> */}
      {/* <Navbar /> */}

      <div ref={containerRef} className="relative h-[700vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div
            className="flex h-full transition-transform duration-100 ease-out"
            style={{ transform: `translateX(${translateX}%)` }}
          >
            {/* Each section takes full screen width */}
            <div className="min-w-full h-full flex items-center justify-center">
              <div className="w-full max-w-6xl px-4">
                <Hero />
              </div>
            </div>

            <div className="min-w-full h-full flex items-center justify-center">
              <div className="w-full max-w-6xl px-4">
                <Hackathon />
              </div>
            </div>

            <div className="min-w-full h-full flex items-center justify-center">
              <div className="w-full max-w-6xl px-4">
                <EventCardGrid />
              </div>
            </div>

            <div className="min-w-full h-full flex items-center justify-center">
              <div className="w-full max-w-6xl px-4">
                <Timeline />
              </div>
            </div>

            <div className="min-w-full h-full flex items-center justify-center">
              <div className="w-full max-w-6xl px-4">
                <HowToApply />
              </div>
            </div>

            <div className="min-w-full h-full flex items-center justify-center">
              <div className="w-full max-w-6xl px-4">
                <ProblemStatements />
              </div>
            </div>

            <div className="min-w-full h-full flex items-center justify-center">
              <div className="w-full max-w-6xl px-4">
                <TeamCardGrid />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section indicators (dots) */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-3">
        {sectionLabels.map((_, index) => (
          <div
            key={index}
            className="w-3 h-3 rounded-full border-2 border-blue-500/50 cursor-pointer relative hover:scale-110 transition-transform"
            onClick={() => handleSectionClick(index)}
          >
            <div
              className={`absolute inset-0 bg-blue-500 rounded-full transition-opacity duration-200 ${
                activeSection === index ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Section labels (left side) */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50 space-y-4 hidden lg:block">
        {sectionLabels.map((label, index) => (
          <div
            key={index}
            className={`text-sm font-medium cursor-pointer transition-all duration-200 hover:translate-x-1 hover:scale-105 ${
              activeSection === index ? "text-blue-500" : "text-slate-500"
            }`}
            onClick={() => handleSectionClick(index)}
          >
            {label}
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      {/* <div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 text-center transition-opacity duration-200"
        style={{ opacity: scrollHintOpacity }}
      >
        <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/30">
          <p className="text-sm text-slate-300 mb-1">
            Scroll to explore horizontally
          </p>
          <div className="w-6 h-1 bg-blue-500 rounded-full mx-auto animate-pulse" />
        </div>
      </div> */}
    </div>
  );
}

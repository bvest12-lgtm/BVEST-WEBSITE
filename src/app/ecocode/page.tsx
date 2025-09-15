"use client";

import { HackathonLanding } from "@/components/hackathon/HackathonLanding";
import { HackathonAbout } from "@/components/hackathon/HackathonAbout";
import Timeline from "@/components/Timeline";
import ProblemStatements from "@/components/ProblemStatements";
import { FAQ } from "@/components/FAQ";

export default function EcoCodePage() {
  return (
    <div className="relative w-full">
      <div className="flex flex-col w-full">
        <section className="min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-6xl">
            <HackathonLanding />
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-6xl">
            <HackathonAbout />
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-6xl">
            <ProblemStatements />
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-6xl">
            <Timeline />
          </div>
        </section>

        <section id="faq" className="w-full">
          <FAQ />
        </section>
      </div>
    </div>
  );
}

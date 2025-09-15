"use client";

import { Hero } from "@/components/Hero";
import { Hackathon } from "@/components/Hackathon";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { EventDetails } from "@/components/events/EventDetails";
import { ContactUs } from "@/components/ContactUs";

export default function Home() {
  return (
    <div className="relative">
      <AnimatedBackground />

      <div className="flex flex-col">
        <section className="min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-6xl">
            <Hero />
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-6xl">
            <Hackathon />
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-6xl">
            <EventDetails />
          </div>
        </section>

        <section id="contact" className="w-full">
          <ContactUs />
        </section>
      </div>
    </div>
  );
}

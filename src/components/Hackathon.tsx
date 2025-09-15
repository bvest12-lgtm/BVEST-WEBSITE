"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import Image from "next/image";
import { useEffect } from 'react';

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export function Hackathon() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  const features = [
    {
      title: "Challenges",
      description: "Tackle real-world problems in environmental technology, sustainable development, and green energy. Bring your A-game and code a solution that makes a difference.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      )
    },
    {
      title: "24 Hours of Intense Coding",
      description: "From ideation to implementation, you'll have 24 hours to turn your ideas into reality with mentorship from industry experts.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      )
    },
    {
      title: "Exciting Prizes",
      description: "Win amazing prizes, get mentorship from industry leaders, and the opportunity to implement your solution with our partners.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      )
    }
  ];

  return (
    <section id="hackathon" className="relative py-16 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative">
          {/* Main content */}
          <div className="relative p-8 lg:p-12">
            <div className="text-center mb-8">
              
              {/* Banner Image */}
              <motion.div
                className="w-full max-w-3xl mx-auto mb-12 rounded-3xl overflow-hidden flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ maxHeight: '40vh' }}
              >
                <Image 
                  src="/ecocode_banner.png" 
                  alt="EcoCode Banner" 
                  width={1200}
                  height={400}
                  className="h-full w-auto object-cover"
                  priority
                />
              </motion.div>
            </div>

            {/* 3-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-[#111827]/50 p-6 rounded-xl border border-[#1F2937]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <div className="w-12 h-12 mb-4 rounded-full bg-[#36D399]/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#36D399]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {feature.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#D1D5DB]">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-12 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div 
                  className="apply-button" 
                  data-hackathon-slug="ecocode" 
                  data-button-theme="light"
                  style={{ 
                    height: '44px', 
                    width: '312px',
                    borderRadius: '9999px',
                    overflow: 'hidden'
                  }}
                ></div>

                <Link
                  href="/ecocode"
                  className="group relative px-8 py-3.5 border-2 border-[#38BDF8] text-[#E5E7EB] font-bold rounded-full overflow-hidden transition-all duration-300 hover:bg-[#38BDF8]/10"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span>Learn More</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

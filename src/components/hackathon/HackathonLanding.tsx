"use client";
import { Space_Grotesk } from "next/font/google";
import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  FaTrophy,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { FaUsers } from "@/components/ui/Icons";

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export function HackathonLanding() {

  return (
    <section className="relative overflow-hidden py-12 md:py-32 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto relative ">
        {/* Hero content */}
        <div className="text-center mb-20 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`inline-block px-4 py-2 mb-2 rounded-full backdrop-blur-sm bg-black/20 border border-white/10 text-blue-300 text-2xl font-medium ${spaceGrotesk.className}`}
          >
            BVEST 12 Presents
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`text-4xl sm:text-6xl md:text-7xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 leading-tight ${spaceGrotesk.className}`}
          >
            EcoCode 2025
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-base md:text-xl text-white/80 max-w-3xl mx-auto mb-6 sm:mb-8 ${spaceGrotesk.className}`}
          >
            Where Innovation Fuels Sustainability
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4"
          >
            {/* Register Now Button */}
            <a
              href="https://ecocode.devfolio.co"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-6 sm:px-8 py-3 sm:py-4 text-white font-medium rounded-full transition-all duration-300 text-sm sm:text-base whitespace-nowrap group overflow-hidden"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0.5 rounded-full bg-gray-900"></div>
              <div className="relative flex items-center gap-2">
                Apply Now
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </a>

            <a
              href="#about"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full backdrop-blur-sm transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 w-full max-w-5xl mx-auto px-1 sm:px-0"
        >
          <StatCard
            icon={<FaTrophy className="w-6 h-6" />}
            value="₹15 Lakh"
            label="In Prizes"
            color="from-yellow-400 to-yellow-600"
          />
          <StatCard
            icon={<FaCalendarAlt className="w-6 h-6" />}
            value="24 Hours"
            label="Of Hacking"
            color="from-blue-400 to-blue-600"
          />
          <StatCard
            icon={<FaUsers className="w-6 h-6" />}
            value="200+"
            label="Participants"
            color="from-green-400 to-green-600"
          />
          <StatCard
            icon={<FaMapMarkerAlt className="w-6 h-6" />}
            value="Offline"
            label="Live & In-Action"
            color="from-purple-400 to-purple-600"
          />
        </motion.div>
      </div>

      {/* Animated floating elements */}
      <div className="absolute top-1/4 -left-20 w-40 h-40 bg-blue-500/10 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-green-500/10 rounded-full filter blur-3xl animate-float animation-delay-2000"></div>
    </section>
  );
}

function StatCard({
  icon,
  value,
  label,
  color,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}) {
  return (
    <motion.div
      className="p-2 sm:p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all h-full flex flex-col items-center text-center w-full group"
      whileHover={{
        y: -5,
        scale: 1.03,
        boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
        background: "rgba(255, 255, 255, 0.08)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <motion.div
        className={`w-8 h-8 sm:w-16 sm:h-16 mb-1 sm:mb-3 rounded-full flex items-center justify-center text-white ${color.includes("from-") ? `bg-gradient-to-br ${color}` : ""}`}
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            delay: 0.1 * (value === "200+" ? 0.5 : 1),
          },
        }}
        viewport={{ once: true }}
      >
        <motion.div
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          {icon}
        </motion.div>
      </motion.div>
      <motion.h3
        className="text-sm sm:text-2xl font-bold mb-0.5 sm:mb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay:
              value === "200+"
                ? 0.1
                : 0.2 +
                  (Number(value.match(/\d+/)?.[0] || 0) * 0.01),
          },
        }}
        viewport={{ once: true }}
      >
        {value}
      </motion.h3>
      <motion.p
        className="text-[10px] sm:text-sm text-white/80 leading-tight font-medium"
        initial={{ opacity: 0, y: 5 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay:
              value === "200+"
                ? 0.15
                : 0.2 +
                  (Number(value.match(/\d+/)?.[0] || 0) * 0.01),
          },
        }}
        viewport={{ once: true }}
      >
        {label}
      </motion.p>
      <motion.div
        className="w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mt-2"
        initial={{ width: 0 }}
        whileInView={{
          width: "50%",
          transition: {
            delay: value === "200+" ? 0.2 : 0.3,
            duration: 0.5,
          },
        }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
}

"use client";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import { Berkshire_Swash } from "next/font/google";
import { BiRightArrow } from "react-icons/bi";
import Image from "next/image";

const berkshireSwash = Berkshire_Swash({ weight: ["400"], subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  weight: ["400", "600"],
  subsets: ["latin"],
});
export function Hero() {
  return (
    <section className="relative min-h-screen   overflow-hidden">
      <div className="relative z-10 w-full h-full max-w-6xl px-6 lg:px-8">
        <div className="flex  items-center  h-screen text-center ">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col items-center justify-center w-1/2"
          >
            <motion.h1
              className={`${spaceGrotesk.className} text-6xl md:text-xl  font-bold leading-tight `}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <span className="bg-gradient-to-r text-7xl from-[#36D399] via-[#38BDF8] to-[#2563EB] bg-clip-text text-transparent drop-shadow-lg">
                BVEST 2025
              </span>
            </motion.h1>
            <motion.h2
              className={`${spaceGrotesk.className} text-4xl md:text-6xl lg:text-7xl text-white font-bold`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Greenovate
            </motion.h2>

            {/* Date and Tagline */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-[#282828] rounded-full border border-[#555555] backdrop-blur-sm mt-4">
                <span className="h-3 w-3 bg-[#36D399] rounded-full mr-3 animate-pulse"></span>
                <span className="text-[#E5E7EB] font-semibold text-xs md:text-[16px]">
                  October 8-9, 2025
                </span>
              </div>

              <p
                className={`${spaceGrotesk.className} text-xl md:text-2xl lg:text-3xl text-[#E5E7EB] font-medium max-w-2xl mx-auto leading-relaxed`}
              >
                Engineering a Greener Tomorrow
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className={`flex flex-col sm:flex-row gap-6 pt-8 ${spaceGrotesk.className} font-bold`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 text-neutral-100 px-10 py-4 rounded-full text-lg"
              >
                Register Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center text-lg font-medium text-[#38BDF8] bg-slate-100 px-8 rounded-full"
              >
                Learn more <BiRightArrow />
              </motion.button>
            </motion.div>
          </motion.div>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className=""
          >
            <div className="relative w-[500px] aspect-square ">
              <Image
                src="/logo.png"
                alt="BVEST Logo"
                width={400}
                height={400}
                priority
                className="w-full  drop-shadow-2xl shadow-green-300"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span className="text-sm text-[#E5E7EB] mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-[#38BDF8] rounded-full flex justify-center p-1">
            <motion.div
              className="w-1 h-2 bg-[#38BDF8] rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

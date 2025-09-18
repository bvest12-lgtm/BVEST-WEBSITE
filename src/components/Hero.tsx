"use client";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import { BiRightArrow } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// ...existing code...
const spaceGrotesk = Space_Grotesk({
  weight: ["400", "600"],
  subsets: ["latin"],
});
interface TypewriterTextProps {
  text: string;
  delay?: number;
}

const TypewriterText = ({ text }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const typingSpeed = 150;

  useEffect(() => {
    const handleTyping = () => {
      if (isPaused) {
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, 2000);
        return;
      }

      if (!isDeleting && displayText === text) {
        setIsPaused(true);
        return;
      }

      if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        return;
      }

      const timeout = setTimeout(
        () => {
          if (isDeleting) {
            setDisplayText((prev) => prev.slice(0, -1));
          } else {
            setDisplayText(text.slice(0, displayText.length + 1));
          }
        },
        isDeleting ? 50 : typingSpeed
      );

      return () => clearTimeout(timeout);
    };

    handleTyping();
  }, [displayText, isDeleting, isPaused, text, typingSpeed, loopNum]);

  return (
    <div className="relative inline-block">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36D399] to-[#38BDF8] font-bold">
        {displayText}
      </span>
      {/* <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="ml-1 inline-block h-8 w-1 bg-gradient-to-b from-[#36D399] to-[#38BDF8] align-middle"
      /> */}
    </div>
  );
};

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="relative z-10 w-full h-full max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen pt-2 lg:pt-0 lg:py-0 text-center">
          {/* Content - Left side on desktop */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col items-center text-center px-4 order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.h1
              className={`${spaceGrotesk.className} text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="relative">
                <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#36D399] to-[#38BDF8] drop-shadow-lg text-5xl sm:text-6xl md:text-7xl">
                  <TypewriterText text="BVEST 2025" />
                </div>
                {/* <motion.div 
                  className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-[#36D399] to-[#38BDF8] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2, delay: 1.5, ease: 'easeInOut' }}
                /> */}
              </div>
            </motion.h1>
            <motion.h2
              className={`${spaceGrotesk.className} text-3xl md:text-4xl lg:text-5xl text-green-400 font-medium w-full`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              GREENOVATE
            </motion.h2>

            {/* Date and Tagline */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.div
                className="relative inline-flex items-center px-6 py-3 mt-6 overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#36D399] via-[#38BDF8] to-[#2563EB] rounded-full opacity-75 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute inset-0.5 bg-[#0f172a] rounded-full group-hover:bg-opacity-90 transition-all duration-300" />
                <div className="relative flex items-center">
                  <span className="h-3 w-3 bg-gradient-to-r from-[#36D399] to-[#38BDF8] rounded-full mr-3 animate-pulse" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36D399] via-[#38BDF8] to-[#2563EB] font-bold text-sm md:text-xl lg:text-2xl tracking-wide">
                    OCTOBER 8-9, 2025
                  </span>
                </div>
              </motion.div>

              <p
                className={`${spaceGrotesk.className} text-lg md:text-2xl lg:text-3xl text-[#E5E7EB] font-medium max-w-2xl mx-auto leading-relaxed mb-8`}
              >
                Engineering a Greener Tomorrow
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pb-24 sm:pb-0">
                <Link
                  href="/ecocode"
                  className={`${spaceGrotesk.className} flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#36D399] to-[#38BDF8] text-black font-bold rounded-full hover:opacity-90 transition-opacity`}
                >
                  Hackathon <BiRightArrow className="inline-block" />
                </Link>
                <Link
                  href="/events"
                  className={`${spaceGrotesk.className} flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#38BDF8] text-white font-bold rounded-full hover:bg-[#38BDF8] hover:bg-opacity-10 transition-colors`}
                >
                  Events <BiRightArrow className="inline-block" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
          {/* Mobile Logo */}
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:hidden w-72 aspect-square md:w-72 md:h-72 mb-2"
          >
            <Image
              src="/logo.png"
              alt="BVEST Logo"
              width={400}
              height={400}
              priority
              className="w-full h-full object-contain drop-shadow-2xl shadow-green-300"
            />
          </motion.div>

          {/* Desktop Logo - Right side */}
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block w-[500px] aspect-square order-2 lg:pl-8"
          >
            <Image
              src="/logo.png"
              alt="BVEST Logo"
              width={500}
              height={500}
              priority
              className="w-full h-full object-contain drop-shadow-2xl shadow-green-300"
            />
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

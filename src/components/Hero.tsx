'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#36D399]/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-20 w-72 h-72 bg-[#38BDF8]/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#2563EB]/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-[#36D399] to-[#38BDF8] bg-clip-text text-transparent">
                BVEST 2023
              </span>
              <br />
              <span className="text-white">Greenovate</span>
            </motion.h1>
            
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-[#111827] rounded-full border border-[#1F2937] mb-4">
                <span className="h-2 w-2 bg-[#36D399] rounded-full mr-2 animate-pulse"></span>
                <span className="text-[#E5E7EB] font-medium">October 8-9, 2023</span>
              </div>
              <p className="text-lg md:text-xl text-[#E5E7EB] mt-4 max-w-lg mx-auto lg:mx-0">
                Join us for 24 hours of innovation, creativity, and sustainable technology solutions
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button className="group relative px-8 py-3.5 bg-gradient-to-r from-[#36D399] to-[#38BDF8] text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#36D399]/30">
                <span className="relative z-10">Register Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#38BDF8] to-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="group relative px-8 py-3.5 border-2 border-[#38BDF8] text-[#E5E7EB] font-bold rounded-full overflow-hidden transition-all duration-300 hover:bg-[#38BDF8]/10">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-xl">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="BVEST Logo"
                  width={800}
                  height={800}
                  priority
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
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
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

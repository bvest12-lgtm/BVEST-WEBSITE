"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export function Hackathon() {
  return (
    <section id="hackathon" className="relative py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#36D399]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#38BDF8]/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative">
          {/* Gradient border */}
          <div
            className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-[#36D399] via-[#38BDF8] to-[#2563EB]"
            style={{
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />
          {/* Main content */}
          <div className="relative bg-black/30 backdrop-blur-xl rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-16">
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span
                  className={`bg-gradient-to-r from-[#36D399] to-[#38BDF8] bg-clip-text text-transparent ${spaceGrotesk.className} font-bold`}
                >
                  EcoCode
                </span>
              </motion.h2>
              <motion.p
                className="text-xl text-[#E5E7EB] max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Where Innovation Fuels Sustainability
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#36D399]/10">
                        <svg
                          className="w-4 h-4 text-[#36D399]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Challenges
                      </h3>
                      <p className="text-[#D1D5DB]">
                        Tackle real-world problems in environmental technology,
                        sustainable development, and green energy. Bring your
                        A-game and code a solution that makes a difference.{" "}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#38BDF8]/10">
                        <svg
                          className="w-4 h-4 text-[#38BDF8]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        24 Hours of Intense Coding
                      </h3>
                      <p className="text-[#D1D5DB]">
                        From ideation to implementation, you&apos;ll have 24
                        hours to turn your ideas into reality with mentorship
                        from industry experts.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#8B5CF6]/10">
                        <svg
                          className="w-4 h-4 text-[#8B5CF6]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Exciting Prizes
                      </h3>
                      <p className="text-[#D1D5DB]">
                        Win amazing prizes, get mentorship from industry
                        leaders, and the opportunity to implement your solution
                        with our partners.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="group relative px-8 py-3.5 bg-gradient-to-r from-[#36D399] to-[#38BDF8] text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#36D399]/30">
                      <span className="relative z-10">Register Now</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#38BDF8] to-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>

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
              </motion.div>

              {/* Graphic */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative z-10 bg-[#111827] rounded-2xl p-8 border border-[#1F2937] shadow-2xl">
                  <div className="aspect-w-16 aspect-h-9 w-full bg-gradient-to-br from-[#1F2937] to-[#111827] rounded-lg overflow-hidden border border-[#1F2937]">
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#36D399] to-[#38BDF8] flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-black"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          Hackathon 2023
                        </h3>
                        <p className="text-[#9CA3AF] mb-4">
                          Building the future, one line at a time
                        </p>
                        <div className="h-2 bg-[#1F2937] rounded-full overflow-hidden mb-4">
                          <div className="h-full bg-gradient-to-r from-[#36D399] to-[#38BDF8] w-3/4"></div>
                        </div>
                        <div className="flex justify-between text-xs text-[#9CA3AF]">
                          <span>24h remaining</span>
                          <span>75% complete</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#36D399]/10 rounded-full filter blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#38BDF8]/10 rounded-full filter blur-xl"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";

const HowToApply = () => {
  const steps = [
    {
      number: 1,
      title: "Visit Devfolio",
      description: "Go to our hackathon page on Devfolio platform",
      icon: "🌐",
    },
    {
      number: 2,
      title: "Create Account",
      description: "Sign up or log in to your Devfolio account",
      icon: "👤",
    },
    {
      number: 3,
      title: "Apply Now",
      description:
        "Click the 'Apply Now' button and fill out the application form",
      icon: "📝",
    },
    {
      number: 4,
      title: "Start Building",
      description: "Wait for confirmation and get ready to hack!",
      icon: "🚀",
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-8 w-full relative overflow-hidden">
      <div className="relative z-10  mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center "
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#36D399] to-[#38BDF8] bg-clip-text text-transparent">
            How to Apply
          </h2>
          <p className="text-lg text-[#b9b9b9] max-w-2xl mx-auto">
            Follow these simple steps to join BVEST 2025 and start your journey
            towards building a greener tomorrow
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 my-4 ">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-[#111827] border border-[#1F2937] rounded-2xl p-4 text-center transition-all duration-300 hover:border-[#36D399]/50 hover:shadow-lg hover:shadow-[#36D399]/10 hover:-translate-y-2">
                {/* Step number with gradient background */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-[#36D399] to-[#38BDF8] rounded-full flex items-center justify-center text-black font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                  {/* Connecting line for desktop */}
                  {/* {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full  w-[2000%] h-0.5 bg-gradient-to-r from-[#36D399]/50 to-transparent transform -translate-x-4"></div>
                  )} */}
                </div>

                {/* Icon */}
                <div className="text-4xl mb-4">{step.icon}</div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#36D399] transition-colors">
                  {step.title}
                </h3>
                <p className="text-[#E5E7EB] leading-relaxed">
                  {step.description}
                </p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#36D399]/5 to-[#38BDF8]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-[#111827] border border-[#1F2937] rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-[#36D399] mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-lg font-semibold text-[#E5E7EB]">
                Ready to start your journey?
              </span>
            </div>

            <p className="text-[#E5E7EB] mb-8 leading-relaxed">
              Join hundreds of innovators and start building solutions for a
              sustainable future. Applications are now open!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#36D399] to-[#38BDF8] text-black font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#36D399]/30"
              >
                <span>Apply on Devfolio</span>
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-[#38BDF8] text-[#E5E7EB] font-bold rounded-full transition-all duration-300 hover:bg-[#38BDF8]/10"
              >
                <span>Learn More</span>
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default HowToApply;

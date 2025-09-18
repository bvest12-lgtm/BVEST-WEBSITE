"use client";
import React from "react";
import { motion } from "framer-motion";

interface ProblemStatementCardProps {
  title: string;
  description: string;
  theme: string;
  index: number;
  icon: string;
}

const ProblemStatementCard: React.FC<ProblemStatementCardProps> = ({
  title,
  description,
  theme,
  index,
  icon,
}) => {
  const handleDownload = () => {
    // Create a filename based on the title (remove special characters and spaces)
    const filename = title
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

    // Create the download link
    const link = document.createElement("a");
    link.href = `/problem-statements/${filename}.pdf`;
    link.download = `${title} - Problem Statement.pdf`;
    link.target = "_blank";

    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      <div
        className={`${theme} rounded-2xl p-0.5 h-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl`}
      >
        <div className="h-full bg-[#111827]/95 backdrop-blur-xl rounded-2xl p-4 flex flex-col relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/3 rounded-full translate-y-12 -translate-x-12"></div>

          {/* Icon */}
          <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>

          {/* Content */}
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
            {title}
          </h3>
          <p className="text-[#E5E7EB] flex-grow mb-3 leading-relaxed text-sm">
            {description}
          </p>

          {/* Button */}
          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-auto w-full py-2 px-4 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 text-white font-semibold rounded-lg transition-all duration-300 border border-white/20 hover:border-white/30 backdrop-blur-sm group-hover:shadow-lg text-sm"
          >
            <span className="flex items-center justify-center gap-2">
              Download Problem Statement
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const ProblemStatements: React.FC = () => {
  const problemStatements = [
    {
      title: "AI for Urban Resilience",
      description:
        "Use AI and predictive analytics to manage stress on critical infrastructure like energy grids and water systems, making cities more adaptive and robust.",
      theme: "bg-gradient-to-br from-[#60A5FA] to-[#4F46E5]",
      icon: "🤖",
    },
    {
      title: "Intelligent Ecosystems & Circular Economies",
      description:
        "Leverage IoT, logistics tech, and AI to close the loop on waste, creating efficient supply chains for food and materials in a circular model.",
      theme: "bg-gradient-to-br from-[#34D399] to-[#2DD4BF]",
      icon: "🔄",
    },
    {
      title: "Data for Impact Visualization & Civic Tech",
      description:
        "Bridge the gap between complex environmental data and people. Build intuitive dashboards, AR experiences, and civic platforms to empower citizens.",
      theme: "bg-gradient-to-br from-[#A78BFA] to-[#EC4899]",
      icon: "📊",
    },
    {
      title: "The Green Metaverse & Future Economies",
      description:
        "Design the next generation of environmental interaction using AR/VR and blockchain to create immersive experiences and new, sustainable economic models.",
      theme: "bg-gradient-to-br from-[#7C3AED] to-[#1D4ED8]",
      icon: "🌐",
    },
    {
      title: "Climate AI & Predictive Futures",
      description:
        "Build deep-tech machine learning models to forecast environmental events like smog, floods, and agricultural yields, enabling proactive crisis management.",
      theme: "bg-gradient-to-br from-[#FB923C] to-[#EF4444]",
      icon: "🔮",
    },
    {
      title: "GreenGuard Cybersecurity for Critical Eco-Infrastructure",
      description:
        "Defend our smart environmental systems by designing resilient security frameworks, threat detection systems, and zero-trust architectures for eco-infrastructure.",
      theme: "bg-gradient-to-br from-[#64748B] to-[#334155]",
      icon: "🛡️",
    },
  ];

  return (
    <section className="py-8 px-6 lg:px-8 relative overflow-hidden min-h-screen flex flex-col">
      {/* Background Elements */}
      <div className="absolute inset-0"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-4 w-96 h-96 bg-[#36D399] rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-4 w-96 h-96 bg-[#38BDF8] rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex-1 flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#36D399] via-[#38BDF8] to-[#2563EB] bg-clip-text text-transparent"
          >
            Problem Tracks
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-[#36D399] to-[#38BDF8] mx-auto mb-4 rounded-full"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-[#E5E7EB] max-w-2xl mx-auto leading-relaxed"
          >
            Choose your challenge and build innovative solutions that will shape
            a sustainable future.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
          {problemStatements.map((problem, index) => (
            <ProblemStatementCard
              key={index}
              title={problem.title}
              description={problem.description}
              theme={problem.theme}
              index={index}
              icon={problem.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatements;

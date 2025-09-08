"use client";

import { motion } from "framer-motion";
import { FaUsers, FaHandshake, FaLightbulb, FaTrophy } from "react-icons/fa";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
};

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: delay * 0.1 }}
    className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all duration-300"
  >
    <div className="text-blue-400 text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-slate-300">{description}</p>
  </motion.div>
);

export function EventDetails() {
  const features = [
    {
      icon: <FaUsers />,
      title: "30+ Student Chapters",
      description: "Collaborating to bring you the best technical events and workshops."
    },
    {
      icon: <FaHandshake />,
      title: "Industry Partnerships",
      description: "Connecting students with leading tech companies and professionals."
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation Hub",
      description: "Fostering creativity and cutting-edge technological solutions."
    },
    {
      icon: <FaTrophy />,
      title: "Competitions",
      description: "Showcasing talent through challenging hackathons and contests."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4">
          Collaborative Excellence
        </h2>
        <p className="text-slate-300 max-w-3xl mx-auto">
          Powered by 30+ student chapters, BVEST events bring together the brightest minds in technology.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={index}
          />
        ))}
      </div>
    </section>
  );
}

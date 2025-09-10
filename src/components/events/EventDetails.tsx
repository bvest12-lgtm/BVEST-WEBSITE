"use client";

import { motion } from "framer-motion";
import { FaUsers, FaHandshake, FaLightbulb, FaTrophy } from "react-icons/fa";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "600"],
  subsets: ["latin"],
});

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
    className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-600 hover:border-blue-500/75 transition-all duration-300"
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
      title: "Collaborative Events",
      description:
        "BVEST unites over 30 student chapters to host diverse events, workshops, and competitions, creating a unique environment for students from different backgrounds to collaborate and share knowledge",
    },
    {
      icon: <FaHandshake />,
      title: "Network & Grow",
      description:
        "Our inter-chapter collaboration provides a powerful networking platform. Connect with peers, mentors, and industry experts to foster relationships that unlock new opportunities.",
    },
    {
      icon: <FaLightbulb />,
      title: "Diverse Perspectives",
      description:
        "By bringing together chapters from various specializations—from tech to design and business—BVEST ensures a rich exchange of ideas crucial for developing holistic, innovative solutions.",
    },
    {
      icon: <FaTrophy />,
      title: "Skill Enhancement",
      description:
        "Participate in our events to hone a wide range of skills, including project management, teamwork, and leadership, while contributing to a meaningful cause.",
    },
  ];

  return (
    <section className="pt-16 h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center "
      >
        <h2
          className={`text-3xl  md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-10 leading-normal ${spaceGrotesk.className}`}
        >
          Unifying Minds, Igniting Change
        </h2>
        <p className="text-slate-300 max-w-3xl mx-auto text-sm mb-4">
          BVEST events bring together the brightest minds in technology.
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

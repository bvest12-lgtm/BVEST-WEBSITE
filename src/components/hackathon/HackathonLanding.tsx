"use client";

import { motion } from "framer-motion";
import { FaTrophy, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export function HackathonLanding() {
  return (
    <section id="hackathon" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              EcoCode 2025
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              24-hour hackathon for sustainable tech innovation
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <InfoCard 
            icon={<FaTrophy className="w-10 h-10 mx-auto" />}
            title="Prize Pool"
            value="$10,000+"
            subtitle="In Prizes & Perks"
            color="green"
            delay={0.2}
          />
          
          <InfoCard 
            icon={<FaCalendarAlt className="w-10 h-10 mx-auto" />}
            title="When"
            value="Oct 8-9, 2025"
            subtitle="24 Hours of Hacking"
            color="blue"
            delay={0.4}
          />
          
          <InfoCard 
            icon={<FaMapMarkerAlt className="w-10 h-10 mx-auto" />}
            title="Where"
            value="BVCOE, Delhi"
            subtitle="On-site & Virtual"
            color="purple"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, value, subtitle, color, delay = 0 }) {
  const colors = {
    green: 'from-green-400 to-blue-400',
    blue: 'from-blue-400 to-blue-600',
    purple: 'from-purple-400 to-blue-500'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 hover:border-${color}-500/30 transition-all duration-300`}
    >
      <div className={`text-${color}-400 mb-4`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-center mb-3">{title}</h3>
      <p className={`text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r ${colors[color]}`}>
        {value}
      </p>
      <p className="text-slate-400 text-center mt-2">{subtitle}</p>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";

export function HackathonAbout() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-6">
            About EcoCode
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-100">
              Building a Sustainable Future Through Code
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
            EcoCode is the premier hackathon of BVEST, a mission-driven event where top innovators tackle the planet's most urgent environmental challenges. This isn't just a competition; it's a high-energy, 24-hour sprint to build groundbreaking solutions for a sustainable future. At EcoCode, your skills meet real-world impact. You'll work on live problems, design innovative tech, and code for a cause that matters. This is where your passion for technology fuels a global change, proving that a single line of code can help build a better, greener world.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <StatCard number="24" label="Hours" />
              <StatCard number="300+" label="RegistrationsS" />
              <StatCard number="20+" label="Problem Statements" />
              <StatCard number="6" label="Tracks" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50"
          >
            <h3 className="text-xl font-semibold text-slate-100 mb-6">Tracks & Themes</h3>
            <div className="space-y-4">
              {[
                { title: "Energy Conservation & Efficiency", icon: "⚡" },
                { title: "Sustainable Agriculture & Food System", icon: "🌱" },
                { title: "Waste Management & Circular Economy", icon: "♻️" },
                { title: "Environmental Awareness & Education", icon: "🌍" },
                { title: "Water Conservation", icon: "💧" },
                { title: "Environmental Policy & Governance", icon: "🏙️" },
              ].map((track, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 bg-slate-800/30 rounded-lg hover:bg-slate-700/50 transition-colors">
                  <span className="text-2xl">{track.icon}</span>
                  <span className="text-slate-200">{track.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50 text-center">
      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        {number}
      </div>
      <div className="text-slate-400 text-sm mt-1">{label}</div>
    </div>
  );
}

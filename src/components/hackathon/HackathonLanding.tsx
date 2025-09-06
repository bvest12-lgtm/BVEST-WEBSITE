"use client";

import { motion } from "framer-motion";
import { FaTrophy, FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { FaUsers } from "@/components/ui/Icons";

export function HackathonLanding() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-950"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Hero content */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-2 mb-6 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-blue-400 text-sm font-medium"
          >
            BVEST 12.0 Presents
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-500"
          >
            EcoCode 2025
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10"
          >
            Code for a sustainable future at India's premier green hackathon
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="#register"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Register Now
              <FaArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#about"
              className="px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 text-white font-medium rounded-full border border-slate-700 hover:border-slate-600 transition-colors duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          <StatCard 
            icon={<FaTrophy className="w-6 h-6" />}
            value="$10,000+"
            label="In Prizes"
            color="from-yellow-400 to-yellow-600"
          />
          <StatCard 
            icon={<FaCalendarAlt className="w-6 h-6" />}
            value="24 Hours"
            label="Of Hacking"
            color="from-blue-400 to-blue-600"
          />
          <StatCard 
            icon={<FaUsers className="w-6 h-6" />}
            value="200+"
            label="Participants"
            color="from-green-400 to-green-600"
          />
          <StatCard 
            icon={<FaMapMarkerAlt className="w-6 h-6" />}
            value="Hybrid"
            label="Online + Onsite"
            color="from-purple-400 to-purple-600"
          />
        </motion.div>
      </div>

      {/* Animated floating elements */}
      <div className="absolute top-1/4 -left-20 w-40 h-40 bg-blue-500/10 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-green-500/10 rounded-full filter blur-3xl animate-float animation-delay-2000"></div>
    </section>
  );
}

function StatCard({ icon, value, label, color }: { icon: React.ReactNode; value: string; label: string; color: string }) {
  return (
    <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto bg-gradient-to-r ${color} text-white`}>
        {icon}
      </div>
      <div className="text-2xl font-bold text-center mb-1">{value}</div>
      <div className="text-slate-400 text-sm text-center">{label}</div>
    </div>
  );
}

// Add this to your global CSS
/* 
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}
.animate-float {
  animation: float 8s ease-in-out infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
*/

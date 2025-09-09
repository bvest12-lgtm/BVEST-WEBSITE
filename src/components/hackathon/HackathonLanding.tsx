"use client";

import { motion } from "framer-motion";
import { FaTrophy, FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { FaUsers } from "@/components/ui/Icons";

export function HackathonLanding() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-transparent">

      <div className="max-w-7xl mx-auto relative bg-transparent">
        {/* Hero content */}
        <div className="text-center mb-20 bg-transparent">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-2 mb-6 rounded-full backdrop-blur-sm text-blue-300 text-sm font-medium"
          >
            BVEST 12 Presents
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
            Where Innovation Fuels Sustainability
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
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full backdrop-blur-sm transition-all duration-300"
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
            value="-"
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
            value="Offline"
            label="Live & In-Action"
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
    <div className="backdrop-blur-xl bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto bg-gradient-to-r ${color} text-white`}>
        {icon}
      </div>
      <div className="text-2xl font-bold text-center mb-1 text-white">{value}</div>
      <div className="text-white/70 text-sm text-center">{label}</div>
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

"use client";

import { motion } from "framer-motion";

const guests = [
  {
    name: "Dr. Sarah Johnson",
    role: "AI & Sustainability Expert",
    company: "GreenTech Innovations",
    image: "/speakers/speaker1.jpg"
  },
  {
    name: "Alex Chen",
    role: "Blockchain Developer",
    company: "EcoChain",
    image: "/speakers/speaker2.jpg"
  },
  {
    name: "Priya Patel",
    role: "Climate Scientist",
    company: "Climate Research Lab",
    image: "/speakers/speaker3.jpg"
  },
  {
    name: "James Wilson",
    role: "Startup Founder",
    company: "Sustainable Startups Inc.",
    image: "/speakers/speaker4.jpg"
  }
];

export function HackathonGuests() {
  return (
    <section id="guests" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-6">
            Mentors & Speakers
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Learn from industry experts and successful entrepreneurs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guests.map((guest, index) => (
            <GuestCard key={index} guest={guest} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GuestCard({ guest, index }: { guest: typeof guests[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
    >
      <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-slate-700/50 overflow-hidden">
        <img 
          src={guest.image} 
          alt={guest.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-slate-100">{guest.name}</h3>
      <p className="text-blue-400 text-sm font-medium">{guest.role}</p>
      <p className="text-slate-400 text-sm">{guest.company}</p>
    </motion.div>
  );
}

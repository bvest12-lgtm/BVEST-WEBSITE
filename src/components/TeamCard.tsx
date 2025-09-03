"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  role: string;
  photoUrl: string;
  linkedinUrl?: string;
  githubUrl?: string;
  twitterUrl?: string;
}

export function TeamCard({
  name,
  role,
  photoUrl,
  linkedinUrl,
  githubUrl,
  twitterUrl,
}: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-[#111827] rounded-xl overflow-hidden transition-all duration-300"
      style={{
        boxShadow: "inset 0 0 40px rgba(56, 189, 248, 0.2)",
      }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#36D399]/10 to-[#38BDF8]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

      {/* Photo container */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={photoUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Photo overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 p-6">
        {/* Name */}
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#36D399] transition-colors duration-300">
          {name}
        </h3>

        {/* Role */}
        <p className="text-[#38BDF8] text-sm font-medium mb-4">{role}</p>

        {/* Social Links */}
        {(linkedinUrl || githubUrl || twitterUrl) && (
          <div className="flex items-center gap-3">
            {linkedinUrl && (
              <motion.a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-[#1F2937] rounded-lg hover:bg-[#38BDF8]/20 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 text-[#38BDF8]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>
            )}

            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-[#1F2937] rounded-lg hover:bg-[#38BDF8]/20 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 text-[#38BDF8]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.a>
            )}

            {twitterUrl && (
              <motion.a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-[#1F2937] rounded-lg hover:bg-[#38BDF8]/20 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 text-[#38BDF8]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </motion.a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

// Example usage component
export function TeamCardGrid() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
      photoUrl: "https://via.placeholder.com/400x400/1F2937/36D399?text=Sarah",
      linkedinUrl: "https://linkedin.com/in/sarah-johnson",
      githubUrl: "https://github.com/sarahjohnson",
      twitterUrl: "https://twitter.com/sarahjohnson",
    },
    {
      name: "Michael Chen",
      role: "Backend Engineer",
      photoUrl:
        "https://via.placeholder.com/400x400/1F2937/38BDF8?text=Michael",
      linkedinUrl: "https://linkedin.com/in/michael-chen",
      githubUrl: "https://github.com/michaelchen",
    },
    {
      name: "Emily Rodriguez",
      role: "UI/UX Designer",
      photoUrl: "https://via.placeholder.com/400x400/1F2937/86EFAC?text=Emily",
      linkedinUrl: "https://linkedin.com/in/emily-rodriguez",
      twitterUrl: "https://twitter.com/emilyrodriguez",
    },
    {
      name: "David Kim",
      role: "DevOps Engineer",
      photoUrl: "https://via.placeholder.com/400x400/1F2937/36D399?text=David",
      linkedinUrl: "https://linkedin.com/in/david-kim",
      githubUrl: "https://github.com/davidkim",
    },
    {
      name: "Lisa Wang",
      role: "Product Manager",
      photoUrl: "https://via.placeholder.com/400x400/1F2937/38BDF8?text=Lisa",
      linkedinUrl: "https://linkedin.com/in/lisa-wang",
      twitterUrl: "https://twitter.com/lisawang",
    },
    {
      name: "Alex Thompson",
      role: "Full Stack Developer",
      photoUrl: "https://via.placeholder.com/400x400/1F2937/86EFAC?text=Alex",
      linkedinUrl: "https://linkedin.com/in/alex-thompson",
      githubUrl: "https://github.com/alexthompson",
      twitterUrl: "https://twitter.com/alexthompson",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#36D399] to-[#38BDF8] bg-clip-text text-transparent">
            Our Team
          </h2>
          <p className="text-lg text-[#E5E7EB] max-w-2xl mx-auto">
            Meet the talented individuals behind our innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              photoUrl={member.photoUrl}
              linkedinUrl={member.linkedinUrl}
              githubUrl={member.githubUrl}
              twitterUrl={member.twitterUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";

interface TeamCardProps {
  name: string;
  role: string;
  photoUrl?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
}

export function TeamCard({
  name,
  role,
  photoUrl,
  linkedinUrl,
  instagramUrl,
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
          src={
            photoUrl ||
            "https://static.vecteezy.com/system/resources/thumbnails/024/080/181/small_2x/green-and-black-background-gradient-illustration-free-photo.jpg"
          }
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 p-6">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#36D399] transition-colors duration-300">
          {name}
        </h3>
        <p className="text-[#38BDF8] text-sm font-medium mb-4">{role}</p>

        {/* Social Links */}
        {(linkedinUrl || instagramUrl) && (
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
                <FaLinkedin className="w-5 h-5 text-[#38BDF8]" />
              </motion.a>
            )}

            {instagramUrl && (
              <motion.a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-[#1F2937] rounded-lg hover:bg-[#38BDF8]/20 transition-colors duration-300"
              >
                <FaInstagram className="w-5 h-5 text-[#38BDF8]" />
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
      name: "John Doe",
      role: "President",
      photoUrl: "https://static.vecteezy.com/system/resources/thumbnails/024/080/181/small_2x/green-and-black-background-gradient-illustration-free-photo.jpg",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      name: "Jane Smith",
      role: "Vice President",
      photoUrl: "https://static.vecteezy.com/system/resources/thumbnails/024/080/181/small_2x/green-and-black-background-gradient-illustration-free-photo.jpg",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      name: "Mike Johnson",
      role: "Technical Head",
      photoUrl: "https://static.vecteezy.com/system/resources/thumbnails/024/080/181/small_2x/green-and-black-background-gradient-illustration-free-photo.jpg",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      name: "Sarah Williams",
      role: "Marketing Head",
      photoUrl: "https://static.vecteezy.com/system/resources/thumbnails/024/080/181/small_2x/green-and-black-background-gradient-illustration-free-photo.jpg",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      name: "David Brown",
      role: "Operations Head",
      photoUrl: "https://static.vecteezy.com/system/resources/thumbnails/024/080/181/small_2x/green-and-black-background-gradient-illustration-free-photo.jpg",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      name: "Emily Davis",
      role: "Design Lead",
      photoUrl: "https://static.vecteezy.com/system/resources/thumbnails/024/080/181/small_2x/green-and-black-background-gradient-illustration-free-photo.jpg",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      name: "Robert Wilson",
      role: "Content Lead",
      photoUrl: "https://static.vecteezy.com/system/resources/thumbnails/024/080/181/small_2x/green-and-black-background-gradient-illustration-free-photo.jpg",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      name: "Lisa Anderson",
      role: "PR Head",
      photoUrl: "https://static.vecteezy.com/system/resources/thumbnails/024/080/181/small_2x/green-and-black-background-gradient-illustration-free-photo.jpg",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      name: "Michael Taylor",
      role: "Event Coordinator",
      photoUrl: "https://static.vecteezy.com/system/resources/thumbnails/024/080/181/small_2x/green-and-black-background-gradient-illustration-free-photo.jpg",
      linkedinUrl: "#",
      instagramUrl: "#",
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
              instagramUrl={member.instagramUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

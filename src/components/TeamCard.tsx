"use client";
import { motion } from "framer-motion";
import Image from "next/image";

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
                <svg
                  className="w-5 h-5 text-[#38BDF8]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
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
                <svg
                  className="w-5 h-5 text-[#38BDF8]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.35 3.608 1.326.975.975 1.264 2.242 1.326 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.35 2.633-1.326 3.608-.975.975-2.242 1.264-3.608 1.326-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.35-3.608-1.326-.975-.975-1.264-2.242-1.326-3.608C2.175 15.796 2.163 15.416 2.163 12s.012-3.584.07-4.849c.062-1.366.35-2.633 1.326-3.608C4.534 2.583 5.801 2.294 7.167 2.232 8.432 2.174 8.812 2.163 12 2.163m0-2.163C8.741 0 8.332.014 7.052.072 5.772.131 4.602.423 3.675 1.35 2.748 2.277 2.456 3.447 2.397 4.727 2.34 6.007 2.326 6.416 2.326 12s.014 5.993.071 7.273c.059 1.28.35 2.45 1.276 3.377.927.927 2.097 1.218 3.377 1.276 1.28.058 1.689.072 7.273.072s5.993-.014 7.273-.071c1.28-.059 2.45-.35 3.377-1.276.927-.927 1.218-2.097 1.276-3.377.058-1.28.072-1.689.072-7.273s-.014-5.993-.071-7.273c-.059-1.28-.35-2.45-1.276-3.377-.927-.927-2.097-1.218-3.377-1.276C15.993.014 15.584 0 12 0z" />
                  <path d="M12 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                  <circle cx="18.406" cy="5.595" r="1.439" />
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

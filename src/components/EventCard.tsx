"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface EventCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  redirectUrl: string;
  collaboratingSocieties?: string[];
}

export function EventCard({
  title,
  description,
  imageUrl,
  redirectUrl,
  collaboratingSocieties = ['EduMinerva', 'ISTE'],
}: EventCardProps) {
  // Default image and redirect URL
  const defaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRszylXBlV5rwf2CFoTh6oZbOFZxWtsfIOd4A&s";
  const defaultRedirect = "#";
  
  // Use the provided image or default to the BVEST poster
  const eventImage = imageUrl || defaultImage;

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

      {/* Image container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={eventImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = defaultImage;
          }}
        />
        {/* Image overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        {/* Event title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white drop-shadow-md">{title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 p-6 pt-4">
        {/* Description */}
        <p className="text-[#D1D5DB] text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Collaborating Societies */}
        <div className="mb-4">
          <p className="text-xs text-[#9CA3AF] mb-2">Collaborating Societies:</p>
          <div className="flex flex-wrap gap-2">
            {collaboratingSocieties.map((society, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-xs font-medium rounded-full bg-[#1F2937] text-[#E5E7EB] border border-[#374151]"
              >
                {society}
              </span>
            ))}
          </div>
        </div>


        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            if (redirectUrl && redirectUrl !== '#') {
              window.open(redirectUrl, "_blank");
            }
          }}
          className="group/btn relative w-full px-6 py-3 bg-gradient-to-r from-[#36D399] to-[#38BDF8] text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#36D399]/30"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            <span>Register Now</span>
            <svg
              className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#38BDF8] to-[#2563EB] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
        </motion.button>
      </div>
    </motion.div>
  );
}

// Example usage component
export function EventCardGrid() {
  const events = [
    {
      title: "Tech Innovation Summit",
      description:
        "Join industry leaders and innovators for a day of cutting-edge technology discussions, workshops, and networking opportunities.",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      redirectUrl: "https://example.com/tech-summit",
      collaboratingSocieties: ["EduMinerva", "ISTE"]
    },
    {
      title: "Startup Pitch Competition",
      description:
        "Watch promising startups pitch their innovative ideas to a panel of investors and industry experts.",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      redirectUrl: "https://example.com/startup-pitch",
      collaboratingSocieties: ["EduMinerva", "ISTE"]
    },
    {
      title: "AI & Machine Learning Workshop",
      description:
        "Hands-on workshop covering the latest developments in artificial intelligence and machine learning technologies.",
      imageUrl: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1408&q=80",
      redirectUrl: "https://example.com/ai-workshop",
      collaboratingSocieties: ["EduMinerva", "ISTE"]
    },
    {
      title: "Blockchain Revolution",
      description:
        "Explore the future of decentralized technologies and their impact on various industries.",
      imageUrl: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      redirectUrl: "https://example.com/blockchain",
      collaboratingSocieties: ["EduMinerva", "ISTE"]
    },
    {
      title: "Cybersecurity Symposium",
      description:
        "Learn about the latest threats and defense mechanisms in the ever-evolving cybersecurity landscape.",
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      redirectUrl: "https://example.com/cyber-symposium",
      collaboratingSocieties: ["EduMinerva", "ISTE"]
    },
    {
      title: "Future of Web Development",
      description:
        "Discover the latest trends, frameworks, and best practices in modern web development.",
      imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
      redirectUrl: "https://example.com/web-dev-future",
      collaboratingSocieties: ["EduMinerva", "ISTE"]
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#36D399] to-[#38BDF8] bg-clip-text text-transparent">
            Upcoming Events
          </h2>
          <p className="text-lg text-[#E5E7EB] max-w-2xl mx-auto">
            Discover exciting events and opportunities to connect with the tech
            community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              description={event.description}
              redirectUrl={event.redirectUrl}
              collaboratingSocieties={event.collaboratingSocieties}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

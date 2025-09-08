"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface EventCardProps {
  title: string;
  description: string;
  imageUrl: string;
  redirectUrl: string;
  date?: string;
  location?: string;
}

export function EventCard({
  title,
  description,
  imageUrl,
  redirectUrl,
  date,
  location,
}: EventCardProps) {
  // Default image and redirect URL
  const defaultImage = "https://via.placeholder.com/400x300/1F2937/38BDF8?text=Event+Image";
  const defaultRedirect = "#";

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
          src={imageUrl || defaultImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = defaultImage;
          }}
        />
        {/* Image overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 p-6">
        {/* Event details */}
        {(date || location) && (
          <div className="flex items-center gap-4 mb-3 text-sm text-[#9CA3AF]">
            {date && (
              <div className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{date}</span>
              </div>
            )}
            {location && (
              <div className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{location}</span>
              </div>
            )}
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#36D399] transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#D1D5DB] text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

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
            <span>Learn More</span>
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
      imageUrl:
        "https://via.placeholder.com/400x300/1F2937/36D399?text=Tech+Summit",
      redirectUrl: "https://example.com/tech-summit",
      date: "March 15, 2024",
      location: "San Francisco, CA",
    },
    {
      title: "Startup Pitch Competition",
      description:
        "Watch promising startups pitch their innovative ideas to a panel of investors and industry experts.",
      imageUrl: "https://via.placeholder.com/400x300/1F2937/7C3AED?text=Startup+Pitch",
      redirectUrl: "https://example.com/startup-pitch",
      date: "April 22, 2024",
      location: "New York, NY",
    },
    {
      title: "AI & Machine Learning Workshop",
      description:
        "Hands-on workshop covering the latest developments in artificial intelligence and machine learning technologies.",
      imageUrl:
        "https://via.placeholder.com/400x300/1F2937/86EFAC?text=AI+Workshop",
      redirectUrl: "https://example.com/ai-workshop",
      date: "May 10, 2024",
      location: "Austin, TX",
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
              imageUrl={event.imageUrl}
              redirectUrl={event.redirectUrl}
              date={event.date}
              location={event.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";

interface EventCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  redirectUrl: string;
  whatsappLink?: string;
  collaboratingSocieties?: string[];
}

export function EventCard({
  title,
  description,
  imageUrl,
  redirectUrl,
  whatsappLink,
  collaboratingSocieties = ["EduMinerva", "ISTE"],
}: EventCardProps) {
  // Default image and redirect URL
  const defaultImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRszylXBlV5rwf2CFoTh6oZbOFZxWtsfIOd4A&s";
  const defaultRedirect = "#";

  // Use the provided image or default to the BVEST poster
  const eventImage = imageUrl || defaultImage;
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleDescription = () => setIsExpanded(!isExpanded);

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
          alt="event image"
          src={eventImage}
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
          <h3 className="text-xl font-bold text-white drop-shadow-md">
            {title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 p-6 pt-4">
        {/* Description with expandable functionality */}
        <div className="mb-4">
          <div className={`text-[#D1D5DB] text-sm leading-relaxed ${!isExpanded ? 'line-clamp-3' : ''}`}>
          {description}
        </div>
          {description.length > 150 && (
            <button
              onClick={toggleDescription}
              className="mt-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
            >
              {isExpanded ? 'Show less' : 'Know more...'}
            </button>
          )}
        </div>

        {/* Collaborating Societies */}
        <div className="mb-4">
          <p className="text-xs text-[#9CA3AF] mb-2">
            Collaborating Societies:
          </p>
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

        {/* Buttons Container */}
        <div className="space-y-3">
          {/* Register Button - Split for Case-e-Khaas */}
          {title === "Case-e-Khaas" ? (
            <div className="flex w-full gap-2">
              {/* Download Problem Statement Button - Left */}
              <motion.a
                href="/case-e-khaas_problem_statement.pdf"
                download="Case-e-Khaas_Problem_Statement.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group/download relative flex-1 px-3 py-1 bg-gradient-to-r from-[#36D399] to-[#38BDF8] text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#36D399]/30 flex items-center justify-center gap-2"
              >
                <FaDownload className="w-4 h-4" />
                <span className="text-xs sm:text-sm">Problem Statement</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#38BDF8] to-[#2563EB] opacity-0 group-hover/download:opacity-100 transition-opacity duration-300 -z-10"></div>
              </motion.a>
              
              {/* Register Now Button - Right */}
              <motion.a
                href={redirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group/register relative flex-1 px-4 py-3 bg-gradient-to-r from-[#36D399] to-[#38BDF8] text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#36D399]/30 flex items-center justify-center gap-2"
              >
                <span className="text-xs sm:text-sm">Register Now</span>
                <svg
                  className="w-4 h-4 transform group-hover/register:translate-x-1 transition-transform duration-300"
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#38BDF8] to-[#2563EB] opacity-0 group-hover/register:opacity-100 transition-opacity duration-300 -z-10"></div>
              </motion.a>
            </div>
          ) : (
            // Original Register Button for other events
            <motion.a
              href={redirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group/btn relative w-full px-6 py-3 bg-gradient-to-r from-[#36D399] to-[#38BDF8] text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#36D399]/30 flex items-center justify-center gap-2"
            >
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
              <div className="absolute inset-0 bg-gradient-to-r from-[#38BDF8] to-[#2563EB] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 -z-10"></div>
            </motion.a>
          )}


          {/* Participants Group Button - Only show if whatsappLink is provided */}
          {whatsappLink && whatsappLink !== "..." && (
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group/participants relative w-full px-6 py-3 bg-[#1F2937] text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:bg-[#374151] border border-[#374151] flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.5 2h-11C4 2 2 4 2 6.5v11C2 19.8 4.2 22 6.5 22h11c2.5 0 4.5-2 4.5-4.5v-11C22 4 20 2 17.5 2zm1.3 15.3c-.2.2-.4.3-.8.3h-11c-.3 0-.5-.1-.8-.3-.2-.2-.3-.4-.3-.8v-11c0-.3.1-.5.3-.8.2-.2.4-.3.8-.3h11c.3 0 .5.1.8.3.2.2.3.4.3.8v11c0 .3-.1.5-.3.8z"/>
                <path d="M12 7c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>
                <circle cx="17" cy="7" r="1"/>
              </svg>
              <span>Participants Group</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Example usage component
export function EventCardGrid() {
  const events = [
    {
      title: "Mission Malamaal",
      description: `This competition invites teams of 1–4 students to pitch innovative ideas in domains like Fashion, AI, Green Tech/Sustainability, and Daily Problem-Solving. It begins with an online PPT submission (max 10 slides) showcasing problem, solution, feasibility, and impact, serving as the screening stage. Shortlisted teams advance to an offline pitch (5–7 minutes + Q&A), where prototypes or demos are encouraged. The final round is a cross-questioning session with judges testing clarity, practicality, and teamwork. Entries must be original, align with a domain, and meet deadlines; plagiarism, misconduct, or missed rounds lead to disqualification. Winners will be decided based on relevance, innovation, feasibility, presentation quality, and confidence.`,
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      redirectUrl: "https://unstop.com/competitions/mission-malamaal-bvest-12-bharati-vidyapeeth-college-of-engineering-new-delhi-1561657",
      collaboratingSocieties: ["Vénuva","IOSC","ACM"],
      whatsappLink: "https://chat.whatsapp.com/CumC1bV8st5K4BGE3DUE0K?mode=ems_copy_c"
    },
    {
      title: "CodeJamTalks",
      description: `This competition tests coding, problem-solving, analytical thinking, and communication skills through three rounds. Round 1 includes a Snippet Quiz on code, logic, and DSA basics, followed by a Group Discussion (Revival Round) where eliminated participants can showcase reasoning and teamwork to re-enter. Round 2 is a DSA Coding Challenge with mixed-level problems judged on accuracy, efficiency, and speed. The Final Showdown in Round 3 features a single hard DSA problem where optimization and execution speed determine the winner. Open to all college students, the event requires participants to bring their own devices, maintain discipline, and follow rules; any misconduct or unfair means will lead to disqualification, and judges’ decisions are final.`,
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      redirectUrl: "https://unstop.com/competitions/codejam-talks-bvest-12-bvcoe-1560886",
      collaboratingSocieties: ["ACM","Horizon"],
      whatsappLink: "https://chat.whatsapp.com/LEIIxtKRLE1LmMzUUYtVCC?mode=ems_copy_t"
    },
    {
      title: "Case-e-Khaas",
      description: `This case-study event begins with a 1-page brochure/report submission serving as the abstract, followed by a PPT presentation and Q&A for shortlisted participants. Entries will be judged on innovation, practicality, affordability, and presentation skills. Each participant/team can submit only one original entry; plagiarism, late submissions, or rule violations will lead to disqualification, and judges’ decisions are final.`,
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      redirectUrl: "https://unstop.com/competitions/case-e-khaas-bvest-12-bharati-vidyapeeth-college-of-engineering-new-delhi-1561663",
      collaboratingSocieties: ["BVPINC", "Enactus", "CodeChef"],
      whatsappLink: "https://chat.whatsapp.com/CYOAbnTDcDj0Zu67zWWAY2?mode=ems_wa_t"
    },
    {
      title: "R.A.W. - Robots and Wings",
      description: `RAW (Robots and Wings) 2025 is a technical competition blending robotics, drones, and sustainable innovation, featuring three challenges: the Line-Following Robot, the Drone Obstacle Course, and the Greenovation Expo. Open to teams of 1–4 from any engineering college, the event will be held offline on 9th October 2025 across designated arenas. Robots and drones must meet safety and design rules, with runs judged primarily on speed, precision, and safety, while Expo projects are evaluated with audience and faculty votes as tie-breakers. Participants must follow strict rules on operations, safety, and originality, with penalties for violations, and final standings will reflect combined performance across all events.`,
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      redirectUrl: "https://unstop.com/competitions/raw-robots-and-wings-bvest-12-bharati-vidyapeeth-college-of-engineering-new-delhi-1561676",
      collaboratingSocieties: ["TechInnovate", "Optica"],
      whatsappLink: "https://chat.whatsapp.com/L5eQP9KrsGc6nc1TMphCc1"
    },
    {
      title: "Innovate & Automate",
      description: `In this Automation-themed event, teams will design and present a fully self-built working automation project, showcasing both the model and photos of its development process. The competition has a single round where participants present their hardware projects to judges, who will evaluate based on innovation, functionality, and presentation. Only English is permitted, projects must be original and functional, and any misconduct will lead to disqualification.`,
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      redirectUrl: "https://unstop.com/competitions/innovate-automate-bvest-12-bharati-vidyapeeth-college-of-engineering-new-delhi-1561686",
      collaboratingSocieties: ["ISA", "IET", "TEDX"],
      whatsappLink: "https://chat.whatsapp.com/EaZhCSY8IhOCXvGouCUj34"
    },
    {
      title: "Tech Baliye",
      description: `This multi-round quiz competition tests knowledge, reflexes, and quick thinking through pen-and-paper, online, pictorial, and buzzer challenges. Round 1 features a Greenovate trivia quiz with a bonus reflex round, Round 2 is a timed technical quiz on an online platform, and Round 3 combines pictorial questions with a buzzer round to crown the winners. Participants must follow time limits, avoid unfair means, and respect judges’ final decisions.`,
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      redirectUrl: "https://unstop.com/quiz/tech-baliye-bvest-12-bharati-vidyapeeth-college-of-engineering-new-delhi-1561724",
      collaboratingSocieties: ["BVPCSI", "Aura", "TechShuttle"],
      whatsappLink: "https://chat.whatsapp.com/EaZhCSY8IhOCXvGouCUj34"
    },
    {
      title: "Design the Future",
      description: `This two-round event tests quick thinking and creativity through a Just a Minute (JAM) session followed by poster making. Participants will speak for one minute on a spot-given topic (with up to 5 minutes prep), then design a digital poster based on the same theme. Allowed themes include Automation & Engineering, Social Cause with Technology, and Socially Reflective Topics. Phones are prohibited, only English may be used, and discipline is mandatory. Winners will be judged on both JAM performance and poster quality.`,
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      redirectUrl: "https://unstop.com/competitions/design-the-future-bvest-12-bharati-vidyapeeth-college-of-engineering-new-delhi-1561693",
      collaboratingSocieties: ["ISA", "IET", "TEDX"],
      whatsappLink: "https://chat.whatsapp.com/EaZhCSY8IhOCXvGouCUj34"
    },
    {
      title: "InnoQuest",
      description: `This technical quiz tests participants’ knowledge in automation, technology, engineering innovation, and socially relevant tech solutions. Conducted online in a single round, points are awarded based on correctness and speed. Participants must submit phones beforehand, follow rules, and maintain discipline, with the winner determined by total points scored.`,
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      redirectUrl: "https://unstop.com/quiz/innoquest-bvest-12-bharati-vidyapeeth-college-of-engineering-new-delhi-1561700",
      collaboratingSocieties: ["ISA", "IET", "TEDX"],
      whatsappLink: "https://chat.whatsapp.com/EaZhCSY8IhOCXvGouCUj34"
    },
    {
      title: "Pixel Planet",
      description: `Pixel Planet is a design-focused ideathon where teams create websites or mobile apps around themes of Sustainability and Mental Health. The event includes three rounds: Ideation & Concept Presentation, where teams brainstorm and receive judge feedback; a Design Quiz testing principles and fundamentals, affecting Round 3 advantages; and Design Refinement, where teams finalize their projects. The competition concludes with a Final Showcase, where teams present their polished designs, emphasizing both process and product.`,
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      redirectUrl: "https://unstop.com/competitions/pixel-planet-bvest-12-bharati-vidyapeeth-college-of-engineering-new-delhi-1561704",
      collaboratingSocieties: ["IEEE", "BMS"],
      whatsappLink: "..."
    },
    {
      title: "IQ-Elevate",
      description: `The Ideathon “IQ-Elevate” invites students and innovators from all backgrounds to present creative solutions across six themes: Grameen Udaan (rural challenges), Jugaad Junction (low-cost innovations), GREEN-O-VATE (sustainability), Fintech (financial inclusion), CultureCraft (tech for arts & culture), and NyayNet (legal tech & privacy). The event unfolds in four stages: Round 0 – Abstract submission (deadline: 5th Oct 2025), Round 1 – One-slide rapid-fire pitch (Top 20), Round 2 – Bidding War + mentorship (Top 12), and Round 3 – Grand Finale with detailed PPT & Q&A (Top 6). Teams of 2–3 can participate, but originality is mandatory; plagiarism, pre-built projects, or late submissions will lead to disqualification. Judges’ decisions are final.`,
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      redirectUrl: "https://unstop.com/competitions/iq-elevate-bvest-12-bharati-vidyapeeth-college-of-engineering-new-delhi-1561706",
      collaboratingSocieties: ["ISTE", "Qaafila", "EduMinerva"],
      whatsappLink: "..."
    },
    {
      title: "GAME OF CODE 3.0",
      description: `This coding and logic competition challenges teams of 1–4 to solve problems through scavenger hunts, code puzzles, and jumbled code reconstruction. Participants must bring their own laptops and adhere to rules against plagiarism or misconduct. Round 1 involves an eliminatory scavenger hunt across campus with logical and coding clues, while Round 2 tasks participants with rearranging and completing jumbled code snippets in C/C++/Python, with difficulty levels based on year. Winners are selected from each year based on performance.`,
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      redirectUrl: "https://unstop.com/competitions/game-of-code-30-bvest-12-bharati-vidyapeeth-college-of-engineering-new-delhi-1561713",
      collaboratingSocieties: ["MLSAC", "DSC","CAMPUS BLOCKS"],
      whatsappLink: "..."
    },
    {
      title: "Hack n Frag",
      description: `This gaming-tech fusion competition blends BGMI battles with tech quizzes and puzzles, testing both gaming skills and technical acumen. Teams of 4 must follow fair play rules and maintain discipline, with judges’ decisions final. The event features three rounds: BGMI Knockouts to shortlist the strongest teams, a Gaming & Tech Quiz Fusion combining strategy with technical knowledge, and a Grand Finale where top teams face in-game tech tasks, trivia, and code riddles to claim ultimate victory.`,
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      redirectUrl: "https://unstop.com/events/hack-n-frag-bvest-12-bharati-vidyapeeth-college-of-engineering-new-delhi-1561728",
      collaboratingSocieties: ["GFG", "Athena"],
      whatsappLink: "..."
    }
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

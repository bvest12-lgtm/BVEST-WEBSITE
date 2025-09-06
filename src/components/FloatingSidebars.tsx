"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaLaptopCode, FaCalendarAlt, FaUsers, FaHandshake } from "react-icons/fa";
import { FaXTwitter, FaInstagram, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa6";

const navItems = [
  { icon: <FaHome className="w-6 h-6" />, label: "HOME", path: "/" },
  { icon: <FaLaptopCode className="w-6 h-6" />, label: "HACKATHON", path: "/ecocode" },
  { icon: <FaCalendarAlt className="w-6 h-6" />, label: "EVENTS", path: "/events" },
  { icon: <FaUsers className="w-6 h-6" />, label: "TEAM", path: "/team" },
  { icon: <FaHandshake className="w-6 h-6" />, label: "SPONSORS", path: "/sponsors" },
];

const socialItems = [
  { icon: <FaXTwitter className="w-5 h-5" />, url: "#" },
  { icon: <FaInstagram className="w-5 h-5" />, url: "#" },
  { icon: <FaLinkedin className="w-5 h-5" />, url: "#" },
  { icon: <FaGithub className="w-5 h-5" />, url: "#" },
  { icon: <FaDiscord className="w-5 h-5" />, url: "#" },
];

export function FloatingSidebars() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Left Navigation Sidebar */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
      >
        <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-slate-700/50">
          <nav className="flex flex-col items-center space-y-6">
            {navItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.path}
                className={`group flex flex-col items-center transition-colors ${
                  isActive(item.path) ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span className={`p-2 rounded-xl transition-colors ${
                  isActive(item.path) 
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
                    : 'bg-slate-800/50 group-hover:bg-blue-500/20'
                }`}>
                  {item.icon}
                </span>
                <span className={`mt-1 text-xs font-medium ${
                  isActive(item.path) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                } transition-opacity`}>
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </motion.div>

      {/* Right Social Sidebar */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
      >
        <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-slate-700/50">
          <div className="flex flex-col items-center space-y-6">
            {socialItems.map((item, index) => (
              <a 
                key={index} 
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-blue-400 transition-colors p-2 hover:bg-slate-800/50 rounded-full"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}

"use client";

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
      <style jsx global>{`
        .backdrop-blur-xl {
          backdrop-filter: saturate(180%) blur(24px);
          -webkit-backdrop-filter: saturate(180%) blur(24px);
        }
      `}</style>
      {/* Left Sidebar - Desktop */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-3 shadow-2xl border border-white/10">
          <nav className="flex flex-col items-center space-y-6">
            {navItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.path}
                className={`flex flex-col items-center px-4 py-3 rounded-xl transition-colors w-full ${
                  isActive(item.path) 
                    ? 'bg-gradient-to-b from-blue-500/20 to-blue-600/20 text-white' 
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span className="mb-1.5">
                  {item.icon}
                </span>
                <span className="text-xs font-medium text-center">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom Navbar - Mobile */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 lg:hidden w-[calc(100%-2rem)] max-w-md">
        <div className="bg-black/90 backdrop-blur-2xl rounded-2xl p-1.5 shadow-2xl border border-white/10">
          <nav className="flex justify-around">
            {navItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.path}
                className={`flex flex-col items-center p-2.5 rounded-xl transition-all flex-1 max-w-[20%] group ${
                  isActive(item.path) 
                    ? 'bg-gradient-to-br from-emerald-500/30 via-teal-500/20 to-blue-500/20 text-white' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span className={`text-xl transition-transform group-hover:scale-110 ${
                  isActive(item.path) ? 'text-emerald-400' : ''
                }`}>
                  {item.icon}
                </span>
                <span className={`text-[10px] font-medium mt-1 transition-colors ${
                  isActive(item.path) ? 'text-emerald-300' : 'text-slate-400 group-hover:text-white'
                }`}>
                  {item.label.split(' ')[0]}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
      
      {/* Add this to your global CSS or a layout component */}
      <style jsx global>{`
        /* Add bottom padding to main content to account for mobile navbar */
        @media (max-width: 1023px) {
          body {
            padding-bottom: 6rem !important;
          }
          
          /* Enhanced backdrop blur for better mobile performance */
          .backdrop-blur-2xl {
            -webkit-backdrop-filter: blur(24px) saturate(1.8);
            backdrop-filter: blur(24px) saturate(1.8);
          }
        }
      `}</style>
    </>
  );
}

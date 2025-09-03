"use client";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Events", href: "#events" },
    { name: "Timeline", href: "#timeline" },
    { name: "Prizes", href: "#prizes" },
    { name: "Register", href: "#register" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 px-4 transition-all duration-300 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="flex justify-center">
        <div className="relative">
          <div
            className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#36D399] via-[#38BDF8] to-[#2563EB] opacity-100"
            style={{
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />
          <div
            className={`relative inline-flex items-center bg-black/30 backdrop-blur-xl rounded-full px-2 py-2`}
            style={{
              boxShadow: "0 0 40px rgba(56, 189, 248, 0.4)",
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveTab(item.name)}
                className={`relative px-8 py-3 mx-1 rounded-full text-base font-medium transition-all duration-300 ${
                  activeTab === item.name
                    ? "text-white bg-gradient-to-r from-[#36D399] to-[#38BDF8] shadow-lg shadow-[#36D399]/50"
                    : "text-[#E5E7EB] hover:text-white hover:bg-white/10"
                }`}
              >
                {item.name}
                {activeTab === item.name && (
                  <span className="absolute -bottom-1 left-1/2 w-6 h-0.5 bg-[#86EFAC] transform -translate-x-1/2 rounded-full" />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

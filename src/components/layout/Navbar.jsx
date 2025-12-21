import React from "react";
import { motion } from "framer-motion";
import { Menu, Search, Github, Linkedin, Instagram, Mail } from "lucide-react";
import useActiveSection from "../../hooks/useActiveSection";
import useCommandPalette from "../../hooks/useCommandPalette";
import CommandPalette from "../ui/CommandPalette";
import "./Hero.css";

/* ---------------- 5x5 Pixel Logo (Optimized) ---------------- */
const PixelLogo = () => (
  <a href="#home" className="pixel-logo-nav">
    <div className="logo-container-nav">
      
      {/* Letter N: Sharp Diagonal */}
      <div className="letter-nav">
        {/* Row 1 */}
        <div className="pixel-nav" /><div className="empty-nav" /><div className="empty-nav" /><div className="empty-nav" /><div className="pixel-nav" />
        {/* Row 2 */}
        <div className="pixel-nav" /><div className="pixel-nav" /><div className="empty-nav" /><div className="empty-nav" /><div className="pixel-nav" />
        {/* Row 3 */}
        <div className="pixel-nav" /><div className="empty-nav" /><div className="pixel-nav" /><div className="empty-nav" /><div className="pixel-nav" />
        {/* Row 4 */}
        <div className="pixel-nav" /><div className="empty-nav" /><div className="empty-nav" /><div className="pixel-nav" /><div className="pixel-nav" />
        {/* Row 5 */}
        <div className="pixel-nav" /><div className="empty-nav" /><div className="empty-nav" /><div className="empty-nav" /><div className="pixel-nav" />
      </div>

      {/* Letter R: Defined Loop + Diagonal Leg */}
      <div className="letter-nav">
        {/* Row 1 (Top Bar) */}
        <div className="pixel-nav" /><div className="pixel-nav" /><div className="pixel-nav" /><div className="pixel-nav" /><div className="empty-nav" />
        {/* Row 2 (Loop Head) */}
        <div className="pixel-nav" /><div className="empty-nav" /><div className="empty-nav" /><div className="pixel-nav" /><div className="empty-nav" />
        {/* Row 3 (Middle Junction) */}
        <div className="pixel-nav" /><div className="pixel-nav" /><div className="pixel-nav" /><div className="pixel-nav" /><div className="empty-nav" />
        {/* Row 4 (Leg Start) */}
        <div className="pixel-nav" /><div className="empty-nav" /><div className="pixel-nav" /><div className="empty-nav" /><div className="empty-nav" />
        {/* Row 5 (Leg End) */}
        <div className="pixel-nav" /><div className="empty-nav" /><div className="empty-nav" /><div className="pixel-nav" /><div className="empty-nav" />
      </div>

    </div>
  </a>
);

/* ---------------- Navbar Component ---------------- */

const NAV_ITEMS = [
  { id: "home", label: "Portfolio" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
];

export default function Navbar() {
  const active = useActiveSection(NAV_ITEMS.map((i) => i.id));

  // 🔥 COMMAND PALETTE STATE
  const { open, setOpen } = useCommandPalette();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 overflow-x-hidden">

            {/* LEFT - PIXEL LOGO */}
            <PixelLogo />

            {/* CENTER NAV - DESKTOP */}
            <div className="hidden md:flex items-center gap-8 relative">
              {NAV_ITEMS.map((item) => {
                const isActive = active === item.id;

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`} // Fixed template literal syntax
                    className={`relative text-sm transition-colors ${
                      isActive ? "text-white" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {item.label}

                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* RIGHT UTILITIES */}
            <div className="flex items-center gap-3">

              {/* 🔍 SEARCH (Ctrl + K) */}
              <button
                onClick={() => setOpen(true)}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-md transition-colors"
              >
                <Search size={14} />
                <span className="text-xs text-zinc-500">Ctrl K</span>
              </button>

              {/* Socials - Always Visible */}
              <a 
                href="https://github.com/nikhilr-r" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-md"
              >
                <Github size={16} />
              </a>
          
              <a 
                href="https://www.linkedin.com/in/nikhil-rajput-nr1906/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-md"
              >
                <Linkedin size={16} />
              </a>

              {/* Socials - Desktop Only */}
              <div className="hidden md:flex items-center gap-3"> 
                <a 
                  href="https://www.instagram.com/nikhil_r._/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-md"
                >
                  <Instagram size={16} />
                </a>

                <a 
                  href="mailto:rajputnikhil1906@gmail.com"
                  className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-md"
                >
                  <Mail size={16} />
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-900/50"
                onClick={() => setOpen(true)} // Opens Command Palette as a menu alternative
              >
                <Menu size={18} />
              </button>

            </div>
          </div>
        </div>
      </nav>

      {/* 🚀 COMMAND PALETTE MODAL */}
      <CommandPalette open={open} onClose={() => setOpen(false)} />
    </>
  );
}
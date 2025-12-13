import React from "react";
import { motion } from "framer-motion";
import { Home, User, Mail, Github, Linkedin, Instagram } from "lucide-react";

// Updated NavItem to handle external links safely
const NavItem = ({ icon: Icon, href, label, isExternal = false }) => (
  <a 
    href={href}
    // Logic: If it's external (like LinkedIn), open in new tab
    target={isExternal ? "_blank" : "_self"}
    rel={isExternal ? "noopener noreferrer" : ""}
    className="relative group p-3 hover:bg-zinc-800 rounded-full transition-all duration-300"
    title={label}
  >
    <Icon size={20} className="text-zinc-400 group-hover:text-white transition-colors" />
    
    {/* Tooltip */}
    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-800 text-xs text-zinc-200 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-zinc-700 pointer-events-none">
      {label}
    </span>
  </a>
);

export default function Navbar() {
  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900/80 backdrop-blur-md border border-zinc-800/50 rounded-full shadow-2xl shadow-black/50">
        
        {/* Internal Navigation */}
        <NavItem icon={Home} href="#" label="Home" />
        <NavItem icon={User} href="#about" label="About" />
        <NavItem icon={Mail} href="mailto:you@example.com" label="Contact" />
        
        {/* Divider */}
        <div className="w-px h-6 bg-zinc-800 mx-2" />
        
        {/* Socials (Now opening in new tabs) */}
        <NavItem icon={Github} href="https://github.com" label="GitHub" isExternal />
        <NavItem icon={Linkedin} href="https://linkedin.com" label="LinkedIn" isExternal />
        <NavItem icon={Instagram} href="https://instagram.com" label="Instagram" isExternal />
        
      </div>
    </motion.div>
  );
}
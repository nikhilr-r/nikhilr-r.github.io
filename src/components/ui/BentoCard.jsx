import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const BentoCard = ({ 
  title, 
  subtitle, 
  icon: Icon, 
  children, 
  className, 
  href = "#" 
}) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      // Animation: Fade in and slide up
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      // Hover: Lift up slightly
      whileHover={{ y: -5 }}
      className={`
        group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6
        bg-surface border border-border
        hover:border-zinc-600 transition-colors duration-300
        ${className}
      `}
    >
      {/* 1. Card Header */}
      <div className="flex items-start justify-between z-10 mb-4">
        <div className="p-2 bg-zinc-900/50 rounded-lg border border-zinc-800 text-zinc-400 group-hover:text-white transition-colors">
          {Icon ? <Icon size={20} /> : <ArrowUpRight size={20} />}
        </div>
        <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors">
          <ArrowUpRight size={16} />
        </span>
      </div>

      {/* 2. Card Content */}
      <div className="z-10">
        <h3 className="text-lg font-bold text-zinc-100 mb-1">{title}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed mb-4">{subtitle}</p>
        
        {/* Child content (Like tags or mini-graphs) */}
        <div className="text-sm text-zinc-500">
          {children}
        </div>
      </div>

      {/* 3. Subtle Background Glow (Visual Polish) */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-white/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.a>
  );
};
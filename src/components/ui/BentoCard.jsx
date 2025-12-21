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
  
  // Function to handle navigation safely even when dragging occurs elsewhere
  const handleClick = () => {
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    // Changed from motion.a to motion.div for better drag compatibility
    <motion.div 
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -2 }}
      // Added h-full and cursor-pointer
      className={`
        group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 h-full cursor-pointer
        bg-zinc-900/50 border border-white/5
        hover:border-white/20 hover:bg-zinc-900/80 transition-all duration-300
        ${className}
      `}
    >
      {/* ... The rest of the component remains the same as before ... */}
      <div className="flex items-start justify-between z-10 mb-4">
        <div className="p-2 bg-zinc-900/50 rounded-lg border border-white/5 text-zinc-400 group-hover:text-white transition-colors">
          {Icon ? <Icon size={18} /> : <ArrowUpRight size={18} />}
        </div>
        <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors">
          <ArrowUpRight size={16} />
        </span>
      </div>

      <div className="z-10">
        <h3 className="text-base font-bold text-white mb-1 leading-tight">{title}</h3>
        <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 mb-4">{subtitle}</p>
        
        <div className="text-sm text-zinc-500">
          {children}
        </div>
      </div>

      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-white/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};
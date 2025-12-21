import React, { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Home,
  User,
  Layers,
  FolderGit2,
  GraduationCap,
  Mail
} from "lucide-react";

const COMMANDS = [
  { label: "Portfolio", id: "home", icon: Home, shortcut: "H" },
  { label: "About", id: "about", icon: User, shortcut: "A" },
  { label: "Tech Stack", id: "tech", icon: Layers, shortcut: "T" },
  { label: "Projects", id: "projects", icon: FolderGit2, shortcut: "P" },
  { label: "Education", id: "education", icon: GraduationCap, shortcut: "E" },
  { label: "Contact", id: "footer", icon: Mail, shortcut: "C" } , 
  {
    label: "Resume",
    id: "resume",
    shortcut: "R",
    icon: "📄"
  }
  
];

export default function CommandPalette({ open, onClose }) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const startY = useRef(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
  
    const scored = COMMANDS
      .map((cmd) => {
        let score = 0;
  
        // 1️⃣ Shortcut exact match (C → Contact)
        if (cmd.shortcut?.toLowerCase() === q) score += 100;
  
        // 2️⃣ Label starts with query (con → Contact)
        if (cmd.label.toLowerCase().startsWith(q)) score += 50;
  
        // 3️⃣ Label includes query (fallback)
        if (cmd.label.toLowerCase().includes(q)) score += 10;
  
        return { ...cmd, score };
      })
      .filter(cmd => cmd.score > 0)
      .sort((a, b) => b.score - a.score);
  
    setActiveIndex(0);
    return scored;
  }, [query]);
  

  // ⌨️ KEYBOARD NAVIGATION
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      }
      if (e.key === "Enter") {
        e.preventDefault();
        filtered[activeIndex] && handleSelect(filtered[activeIndex].id);
      }
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, filtered, activeIndex]);

  const handleSelect = (id) => {
    onClose();
    if (id === "resume") {
      document.dispatchEvent(new CustomEvent("open-resume"));
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // 📱 MOBILE SWIPE DOWN TO CLOSE
  const onTouchStart = (e) => (startY.current = e.touches[0].clientY);
  const onTouchMove = (e) => {
    if (!startY.current) return;
    if (e.touches[0].clientY - startY.current > 80) onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 pt-[12vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
        >
          <motion.div
            className="w-full max-w-lg rounded-xl border border-zinc-800 bg-zinc-900 shadow-xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* SEARCH */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-800">
              <Search size={16} className="text-zinc-500" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search..."
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
              />
            </div>

            {/* COMMAND LIST */}
            <div className="max-h-64 overflow-y-auto p-2">
              {filtered.map((cmd, index) => {
                const Icon = cmd.icon;
                const active = index === activeIndex;

                return (
                  <button
                    key={cmd.id}
                    onClick={() => handleSelect(cmd.id)}
                    className={`w-full flex items-center justify-between px-3 py-3 text-sm rounded-md transition
                      ${active
                        ? "bg-zinc-800 text-white"
                        : "text-zinc-300 hover:bg-zinc-800/60"
                      }`}
                  >
                    <span className="flex items-center gap-3">
                      <Icon size={16} />
                      {cmd.label}
                    </span>
                    <span className="text-xs text-zinc-500">
                      {cmd.shortcut}
                    </span>
                  </button>
                );
              })}

              {filtered.length === 0 && (
                <p className="px-3 py-4 text-sm text-zinc-500">
                  No results found
                </p>
              )}
            </div>

            {/* FOOTER */}
            <div className="flex justify-between px-4 py-2 text-xs text-zinc-500 border-t border-zinc-800">
              <span>↵ Open</span>
              <span>Esc Close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

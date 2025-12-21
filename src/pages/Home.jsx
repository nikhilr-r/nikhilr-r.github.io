import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/portfolio";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/layout/Hero";
import TechStack from "../components/layout/TechStack"; 
import About from "../components/layout/About";
import Education from "../components/layout/Education";
import { ArrowRight, ExternalLink, ChevronDown } from "lucide-react";
import SectionDivider from "../components/ui/SectionDivider";


/* ---------------- PROJECT ITEM ---------------- */


const ProjectItem = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group relative border-b border-zinc-800/50 hover:border-zinc-700/50 transition-colors">
      {/* Header */}
      <div 
        className="flex items-start gap-4 py-6 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="shrink-0 pt-1">
          <ArrowRight size={16} className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <h3 className="text-base font-semibold text-white mb-1 group-hover:text-zinc-200 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-zinc-500 font-mono">
                {project.period}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 text-zinc-600 hover:text-zinc-400 transition-colors"
              >
                <ExternalLink size={14} />
              </a>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="p-1.5 text-zinc-600"
              >
                <ChevronDown size={14} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Expand */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-8 space-y-4">
              <p className="text-sm text-zinc-400 leading-relaxed">
                {project.description}
              </p>

              {project.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-xs font-mono text-zinc-500 bg-zinc-900/50 border border-zinc-800 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ---------------- PROJECTS SECTION ---------------- */

const ProjectsSection = () => {
  const projects = PORTFOLIO_DATA.projects || [];

  return (
    <section id="projects" className="py-12">
      <h2 className="text-2xl font-bold text-white mb-12">
        Projects{" "}
        <span className="text-zinc-500 text-lg font-normal">
          ({projects.length})
        </span>
      </h2>

      <div>
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

/* ================= HOME ================= */

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans overflow-x-hidden h-16">
      <Navbar />
      {/* 1. HERO */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <Hero />
      </main>
    
      
      {/* 2. ABOUT (MOVED UP ✅) */}
      <main className="max-w-4xl mx-auto px-6 py-12 ">
      <About />
<SectionDivider />

<TechStack />
<SectionDivider />

<ProjectsSection />
<SectionDivider />

<Education />
<SectionDivider />

<Footer />
      </main>
    </div>
  );
}

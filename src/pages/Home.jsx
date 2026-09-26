import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/portfolio";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/layout/Hero";
import TechStack from "../components/layout/TechStack"; 
import About from "../components/layout/About";
import Education from "../components/layout/Education";
import Experience from "../components/layout/Experience";
import { ArrowRight, ExternalLink, ChevronDown, Github, Lock, CheckCircle2, Zap } from "lucide-react";
import SectionDivider from "../components/ui/SectionDivider";

/* ---------------- PROJECT ITEM ---------------- */

const getBadgeConfig = (badge = "") => {
  if (badge.includes("Commercial") || badge.includes("Client")) {
    return {
      classes: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      dot: "bg-emerald-400 animate-pulse"
    };
  }
  if (badge.includes("Hackathon") || badge.includes("Winner")) {
    return {
      classes: "bg-amber-500/10 text-amber-300 border-amber-500/30",
      dot: "bg-amber-400 animate-pulse"
    };
  }
  if (badge.includes("Security") || badge.includes("Cryptography")) {
    return {
      classes: "bg-violet-500/10 text-violet-300 border-violet-500/30",
      dot: "bg-violet-400"
    };
  }
  if (badge.includes("AgriTech") || badge.includes("GovTech")) {
    return {
      classes: "bg-teal-500/10 text-teal-300 border-teal-500/30",
      dot: "bg-teal-400"
    };
  }
  if (badge.includes("Redis") || badge.includes("MERN")) {
    return {
      classes: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
      dot: "bg-cyan-400"
    };
  }
  return {
    classes: "bg-sky-500/10 text-sky-300 border-sky-500/30",
    dot: "bg-sky-400"
  };
};

const ProjectItem = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const badgeConfig = project.badge ? getBadgeConfig(project.badge) : null;

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
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <h3 className="text-base font-semibold text-white group-hover:text-zinc-200 transition-colors">
                  {project.title}
                </h3>
                {badgeConfig && (
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-mono font-medium rounded-full border ${badgeConfig.classes}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${badgeConfig.dot}`} />
                    {project.badge}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500 font-mono">
                {project.role && (
                  <span className="text-zinc-400">{project.role}</span>
                )}
                {project.role && <span>•</span>}
                <span>{project.period}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {project.isPrivate && (
                <div 
                  className="flex items-center gap-1 text-xs font-mono text-zinc-500 px-2 py-1 bg-zinc-900 border border-zinc-800 rounded"
                  title={project.privateNote || "Proprietary Commercial System"}
                >
                  <Lock size={12} className="text-amber-500/80" />
                  <span className="hidden sm:inline">Client NDA</span>
                </div>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 text-zinc-600 hover:text-zinc-400 transition-colors"
                  title="GitHub Repository"
                >
                  <Github size={14} />
                </a>
              )}
              {project.link && project.link !== project.github && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 text-zinc-600 hover:text-zinc-400 transition-colors"
                  title={project.github ? "Live Demo" : "Project Link"}
                >
                  <ExternalLink size={14} />
                </a>
              )}
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

              {/* Key Architecture Challenges & Solutions */}
              {project.challenges && project.challenges.length > 0 && (
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-mono font-semibold tracking-wider text-zinc-400 uppercase flex items-center gap-1.5">
                    <Zap size={13} className="text-amber-400" /> Key Engineering Challenges Solved
                  </h4>
                  <div className="space-y-2">
                    {project.challenges.map((c, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-lg bg-zinc-900/60 border border-zinc-800/80 text-xs space-y-1.5"
                      >
                        <p className="font-semibold text-zinc-200">
                          {c.title}
                        </p>
                        <p className="text-zinc-400 leading-relaxed">
                          {c.solution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-mono font-semibold tracking-wider text-zinc-400 uppercase">
                    Core Architectural Contributions
                  </h4>
                  <ul className="space-y-1.5 pl-1">
                    {project.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed">
                        <CheckCircle2 size={13} className="text-emerald-500/80 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

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

const FILTER_CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "client", label: "Commercial Client" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "ai", label: "AI & RAG" },
  { id: "security", label: "Security & Crypto" }
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const allProjects = PORTFOLIO_DATA.projects || [];

  const filteredProjects = activeFilter === "all"
    ? allProjects
    : allProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Projects{" "}
            <span className="text-zinc-500 text-lg font-normal">
              ({allProjects.length})
            </span>
          </h2>
          <p className="text-xs text-zinc-500 font-mono">
            Production systems, client deliverables, and technical prototypes
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2">
          {FILTER_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-3 py-1 text-xs font-mono rounded-md transition-all border ${
                activeFilter === cat.id
                  ? "bg-zinc-100 text-black border-zinc-100 font-semibold"
                  : "bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        {filteredProjects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

/* ================= HOME ================= */

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans overflow-x-hidden">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* 1. HERO */}
        <Hero />

        {/* 2. ABOUT */}
        <About />
        <SectionDivider />

        {/* 3. EXPERIENCE */}
        <Experience />
        <SectionDivider />

        {/* 4. TECH STACK */}
        <TechStack />
        <SectionDivider />

        {/* 5. PROJECTS */}
        <ProjectsSection />
        <SectionDivider />

        {/* 6. EDUCATION */}
        <Education />
        <SectionDivider />

        {/* 7. FOOTER */}
        <Footer />
      </main>
    </div>
  );
}

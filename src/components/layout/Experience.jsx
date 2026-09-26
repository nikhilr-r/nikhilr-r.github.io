import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ChevronDown, CheckCircle2, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "../../data/portfolio";

const TechBadge = ({ name }) => (
  <span className="px-2 py-0.5 text-xs font-mono text-zinc-400 bg-zinc-900/50 border border-zinc-800 rounded hover:border-zinc-700 transition-colors">
    {name}
  </span>
);

const ExperienceItem = ({ experience, isLast }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative pl-8 group">
      {/* Vertical Timeline Line */}
      {!isLast && (
        <div className="absolute left-[19px] top-12 bottom-0 w-px bg-zinc-800/50" />
      )}

      <div className="flex gap-6">
        {/* Icon */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`shrink-0 relative z-10 w-10 h-10 rounded-full border bg-black flex items-center justify-center cursor-pointer transition-all duration-200 ${
            isOpen
              ? "border-zinc-600 text-zinc-200"
              : "border-zinc-800 text-zinc-600 group-hover:border-zinc-700 group-hover:text-zinc-400"
          }`}
        >
          <Briefcase size={17} />
        </div>

        {/* Content */}
        <div className="flex-1 pb-12">
          {/* Header */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-start justify-between cursor-pointer group/header mb-1"
          >
            <div className="flex-1">
              <h3
                className={`text-lg font-bold transition-colors ${
                  isOpen
                    ? "text-white"
                    : "text-zinc-200 group-hover/header:text-white"
                }`}
              >
                {experience.role}
              </h3>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs font-mono text-zinc-500 mt-1">
                <span className="text-zinc-300 font-medium">{experience.company}</span>
                <span>•</span>
                <span>{experience.period}</span>
                {experience.location && (
                  <>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={11} className="text-zinc-600" />
                      {experience.location}
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Chevron */}
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-zinc-600 group-hover/header:text-zinc-400 mt-1 shrink-0"
            >
              <ChevronDown size={16} />
            </motion.div>
          </div>

          {/* Collapsed short description preview */}
          <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
            {experience.description}
          </p>

          {/* Expandable Deep Dive */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="pt-5 space-y-4">
                  {/* Key Achievements & Responsibilities */}
                  {experience.achievements && experience.achievements.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider font-mono">
                        Key Engineering Responsibilities & Impact
                      </p>
                      <ul className="space-y-1.5 pl-1">
                        {experience.achievements.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed"
                          >
                            <CheckCircle2
                              size={13}
                              className="text-emerald-400 mt-0.5 shrink-0"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Skills / Tech Used */}
                  {experience.skills && experience.skills.length > 0 && (
                    <div className="pt-3 border-t border-zinc-800/50">
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, idx) => (
                          <TechBadge key={idx} name={skill} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default function Experience() {
  const experiences = PORTFOLIO_DATA?.experience ?? [];

  return (
    <section id="experience" className="py-12">
      <h2 className="text-2xl font-bold text-white mb-12">
        Work Experience{" "}
        <span className="text-zinc-500 text-lg font-normal">
          ({experiences.length})
        </span>
      </h2>

      <div className="space-y-0">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            experience={exp}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, ChevronDown, Award } from "lucide-react";

// Tech Badge Component
const TechBadge = ({ name }) => (
  <span className="px-2 py-0.5 text-xs font-mono text-zinc-400 bg-zinc-900/50 border border-zinc-800 rounded hover:border-zinc-700 transition-colors">
    {name}
  </span>
);

const EducationItem = ({ school, degree, year, location, awards, skills, isLast }) => {
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
              ? 'border-zinc-600 text-zinc-200' 
              : 'border-zinc-800 text-zinc-600 group-hover:border-zinc-700 group-hover:text-zinc-400'
          }`}
        >
          <GraduationCap size={18} />
        </div>

        {/* Content */}
        <div className="flex-1 pb-12">
          
          {/* Header */}
          <div 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-start justify-between cursor-pointer group/header mb-1"
          >
            <div className="flex-1">
              <h3 className={`text-lg font-bold transition-colors ${
                isOpen 
                  ? 'text-white' 
                  : 'text-zinc-200 group-hover/header:text-white'
              }`}>
                {school}
              </h3>
              <p className="text-xs font-mono text-zinc-500 mt-1">{year}</p>
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

          {/* Expandable Content */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="pt-6 space-y-5">
                  
                  {/* Degree & Location */}
                  <div className="text-sm text-zinc-400 leading-relaxed space-y-1.5">
                    <p>{degree}</p>
                    {location && <p className="text-zinc-500">Location: {location}</p>}
                  </div>

                  {/* Awards */}
                  {awards && awards.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-2">
                        Achievements
                      </p>
                      <div className="pl-4 border-l border-zinc-800 space-y-2">
                        {awards.map((award, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-sm text-zinc-300">
                            <Award size={14} className="mt-0.5 text-yellow-500/60 shrink-0" />
                            <span>{award}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Skills */}
                  {skills && skills.length > 0 && (
                    <div className="pt-4 border-t border-zinc-800/50">
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, idx) => (
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

export default function Education() {
  return (
    <section id="education" className="py-12">
      <h2 className="text-2xl font-bold text-white mb-12">
        Education
      </h2>

      <div className="space-y-0">
        
        <EducationItem 
          school="Vishwakarma Institute of Technology"
          degree="B.Tech in Computer Science & Engineering [AI]"
          year="2024–2027"
          location="Pune, India"
          awards={[
            "Current SGPA: 9.29",
            "2 Research papers published in Scopus index",
            "2x Hackathon Winner"
          ]}
          skills={[
            "Data Structures", "Algorithms", "Deep Learning", 
            "Advanced Java", "DBMS", "Computer Networks", 
            "Cloud Computing", "MERN", "SpringBoot"
          ]}
        />

        <EducationItem 
          school="Government Polytechnic"
          degree="Diploma in Computer Engineering"
          year="2021–2024"
          location="Dhule, India"
          isLast={false}
          awards={[
            "Percentage: 91.24% (Distinction)",
            "Active in Coding Clubs"
          ]}
          skills={[
            "C", "Java", "PHP", "MySQL", "Web Development", 
            "C++", "Microprocessors", "Software Testing", "Mobile Development"
          ]}   
        />

        <EducationItem 
          school="Maharana Pratap High School"
          degree="Secondary School Certificate (SSC)"
          year="2020–2021"
          location="Dhule, India"
          isLast={true}
          awards={[
            "Percentage: 88.40%",
            "3rd Rank in 10th",
            "Consistent Rank Holder",
            "Actively Involved in Sports and Cultural Activities",
            "2x Pathnatya (Street Play) Winner"
          ]}
          skills={[
            "Communication", "Teamwork", "Learning Agility",
            "Time Management", "Computer Fundamentals"
          ]}
        />

      </div>
    </section>
  );
}
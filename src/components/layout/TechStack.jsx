import React from "react";
import { PORTFOLIO_DATA } from "../../data/portfolio";
import { motion } from "framer-motion";

// ICONS
import {
  SiC,
  SiCplusplus,
  SiMysql,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiAndroid,
  SiPhp,
  SiHtml5,
  SiCss3
} from "react-icons/si";

import { FaJava, FaDatabase } from "react-icons/fa";
import { DiDotnet } from "react-icons/di";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const item = {
  hidden: { opacity: 0, y: 12, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// Icon Component
const TechIcon = ({ Icon, name, color }) => (
  <motion.div
    variants={item}
    whileHover={{
      scale: 1.15,
      boxShadow: "0 0 18px rgba(255,255,255,0.15)"
    }}
    className="
      w-12 h-12 rounded-md
      flex items-center justify-center
      bg-zinc-800
      cursor-default
    "
    title={name}
  >
    <Icon size={22} color={color} />
  </motion.div>
);

export default function TechStack() {
  const techStack = PORTFOLIO_DATA?.techStack ?? [];

  const techIcons = {
    "C": { Icon: SiC, color: "#A8B9CC" },
    "C++": { Icon: SiCplusplus, color: "#00599C" },
    "Java": { Icon: FaJava, color: "#ED8B00" },
    "SQL": { Icon: SiMysql, color: "#4479A1" },
    "Database": { Icon: FaDatabase, color: "#6B7280" },
    "MongoDB": { Icon: SiMongodb, color: "#47A248" },
    "Node.js": { Icon: SiNodedotjs, color: "#339933" },
    "React": { Icon: SiReact, color: "#61DAFB" },
    "Android": { Icon: SiAndroid, color: "#3DDC84" },
    "PHP": { Icon: SiPhp, color: "#777BB4" },
    "HTML": { Icon: SiHtml5, color: "#E34F26" },
    "CSS": { Icon: SiCss3, color: "#1572B6" },
    "VB.NET": { Icon: DiDotnet, color: "#512BD4" }
  };

  return (
    <section   id="tech" className="py-16 border-zinc-800/50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-3">
          Tech Stack
        </h2>
        <p className="text-sm text-zinc-500 mb-8">
          Languages, frameworks & platforms I work with
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap gap-4"
        >
          {techStack.map((tech, index) => {
            const item = techIcons[tech];
            if (!item) return null;

            return (
              <TechIcon
                key={index}
                Icon={item.Icon}
                name={tech}
                color={item.color}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Globe, Code, Zap } from "lucide-react";

const SkillBadge = ({ name }) => (
  <span className="px-3 py-1 text-sm bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700 hover:bg-zinc-700 hover:text-white transition-colors cursor-default">
    {name}
  </span>
);

export default function About() {
  return (
    <section id="about" className="py-32 relative z-10 border-t border-zinc-800/50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* LEFT COLUMN: The Bio */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-6 flex items-center gap-2"
          >
            <UserIcon /> About Me
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-zinc-400 text-lg leading-relaxed"
          >
            <p>
              I am a <span className="text-white font-medium">Computer Science (AI)</span> student driven by the complexity of intelligent systems. 
            </p>
            <p>
              My journey started with standard web development, but I quickly realized my passion lies deeper—in the <span className="text-white font-medium">infrastructure</span> that powers apps and the <span className="text-white font-medium">neural networks</span> that make them smart.
            </p>
            <p>
              Currently, I am building a <span className="text-white font-medium">Private Cloud</span> using Proxmox to understand virtualization at a bare-metal level, while simultaneously researching <span className="text-white font-medium">Diffusion Models</span>.
            </p>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: The Skills & Stats */}
        <div className="space-y-8">
          
          {/* Skill Group 1: AI & Data */}
          <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <BrainIcon /> Artificial Intelligence
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge name="TensorFlow" />
              <SkillBadge name="PyTorch" />
              <SkillBadge name="OpenCV" />
              <SkillBadge name="Neural Networks" />
              <SkillBadge name="Python" />
            </div>
          </div>

          {/* Skill Group 2: Engineering */}
          <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Cpu /> Engineering & Cloud
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge name="React" />
              <SkillBadge name="Next.js" />
              <SkillBadge name="Docker" />
              <SkillBadge name="Proxmox VE" />
              <SkillBadge name="Linux (KVM)" />
              <SkillBadge name="SQL" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Simple Icons to keep the main code clean
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
const BrainIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>
);
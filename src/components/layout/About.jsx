import React from "react";
import { motion } from "framer-motion";
// import { PORTFOLIO_DATA } from "../../data/portfolio"; 

const AboutItem = ({ children, index }) => (
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    // Added 'text-justify' and 'tracking-wide' for better alignment and readability
    className="text-zinc-400 text-sm  md:text-base leading-relaxed text-justify tracking-wide"
  >
    {children}
  </motion.p>
);

export default function About() {
  const aboutItems = [
    <>
      I’m a Computer Science & Engineering student specializing in <span className="text-zinc-200 font-medium">Artificial Intelligence</span> with a solid foundation in <span className="text-zinc-200 font-medium">Data Structures, Algorithms, and System Design</span>. I focus on engineering reliable, production-ready software systems that solve real-world problems.
    </>,
    <>
      On the backend and systems side, I have production experience building with <span className="text-zinc-200 font-medium">TypeScript, Node.js, MERN Stack</span>, <span className="text-zinc-200 font-medium">Prisma ORM</span>, and <span className="text-zinc-200 font-medium">PostgreSQL / SQLite</span>. I enjoy architecting resilient relational schemas, optimizing REST APIs, and designing ACID-compliant transaction workflows for commercial retail and wholesale enterprises.
    </>,
    <>
      In <span className="text-zinc-200 font-medium">Applied AI & Intelligent Systems</span>, I actively work across the modern AI ecosystem—architecting offline-first <span className="text-zinc-200 font-medium">Retrieval-Augmented Generation (RAG)</span> with <span className="text-zinc-200 font-medium">ChromaDB</span>, deploying <span className="text-zinc-200 font-medium">Local LLMs (Ollama)</span> and <span className="text-zinc-200 font-medium">Whisper STT</span> on edge hardware, implementing <span className="text-zinc-200 font-medium">PyTorch</span> computer vision models for automated disease diagnosis, and integrating <span className="text-zinc-200 font-medium">Gemini API</span> pipelines.
    </>,
    <>
      Currently seeking <span className="text-zinc-200 font-medium">Software Development Engineer (SDE) & AI Engineering opportunities</span> to apply my problem-solving skills in high-impact engineering environments.
    </>
  ];

  return (
    <section id="about" className="py-12 max-w-prose" >
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-white mb-8"
      >
        About
      </motion.h2>
      
      {/* Added max-w-3xl to prevent lines from getting too long on huge screens */}
      <div className="space-y-4 max-w-3xl">
        {aboutItems.map((item, index) => (
          <AboutItem key={index} index={index}>
            {item}
          </AboutItem>
        ))}
      </div>
    </section>
  );
}
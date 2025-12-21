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
      I’m a pre-final year <span className="text-zinc-200 font-medium">CSE (AI) student</span> with a strong foundation in <span className="text-zinc-200 font-medium">Data Structures, Algorithms, and OOP</span>. I focus on building reliable, scalable software systems.
    </>,
    <>
      With hands-on experience in <span className="text-zinc-200 font-medium">Full-Stack (MERN)</span> and <span className="text-zinc-200 font-medium">Spring Boot</span>, I enjoy designing APIs and connecting backend services with clean interfaces. My passion lies in <span className="text-zinc-200 font-medium">backend architecture</span> and building production-ready code.
    </>,
    <>
      Currently seeking <span className="text-zinc-200 font-medium">SDE Internship opportunities</span> to apply my problem-solving skills in a fast-paced engineering environment.
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
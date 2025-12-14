import React from "react";
import { BentoCard } from "../components/ui/BentoCard";
import { PORTFOLIO_DATA } from "../data/portfolio";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import About from "../components/layout/About";
import Hero from "../components/layout/Hero"; // <--- Import New Hero
import TechStack from "../components/layout/TechStack"; 
import { SectionDivider } from "../components/ui/GridPattern";


export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text overflow-hidden selection:bg-zinc-800 selection:text-white">
      
      <Navbar /> 

      {/* 1. NEW HERO SECTION */}
      <Hero /> 

      {/* 2. TECH STACK STRIP */}
      <TechStack />

      <div className="max-w-5xl mx-auto px-6 space-y-24 py-24">
        
        {/* 3. SELECTED WORKS */}
        <section>
          <div className="flex items-center justify-between mb-12">
             <h2 className="text-3xl font-bold text-white tracking-tight">Selected Work</h2>
             <SectionDivider className="h-px flex-1 ml-8 opacity-50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[280px]">
            {PORTFOLIO_DATA.projects.map((project, idx) => (
              <BentoCard
                key={idx}
                title={project.title}
                subtitle={project.description}
                icon={project.icon}
                href={project.link}
                className={
                  project.size === "large" ? "md:col-span-2 md:row-span-2" : 
                  project.size === "medium" ? "md:col-span-2" : 
                  "md:col-span-1"
                }
              >
                <div className="mt-auto pt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-zinc-400 bg-zinc-950/50 border border-zinc-800 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </BentoCard>
            ))}
          </div>
        </section>

        {/* 4. ABOUT */}
        <About />

      </div>

      <Footer /> 
    </div>
  );
}
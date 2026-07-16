import { 
  Brain, 
  Cloud, 
  ShieldCheck, 
  Database, 
  Cpu, 
  Code2, 
  Terminal, 
  FileScanIcon,
  NewspaperIcon
} from "lucide-react";

export const PORTFOLIO_DATA = {
  // 1. Personal Identity
  name: "Nikhil Rajput", // <--- Put your real name here
  role: "",
  
  // 2. The "Hero" Tagline
  bio: "Bridging the gap between complex Neural Networks and scalable Cloud Infrastructure.",
  
  // 3. Tech Stack (For the Marquee or Skills section)
  techStack: [
    "C",
    "C++",
    "Java",
    "SQL",
    "Database",
    "MongoDB",
    "Node.js",
    "React",
    "Android",
    "PHP",
    "HTML",
    "CSS",
    "VB.NET"
  ]
,  

  // 4. Social Links
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "mailto:you@example.com"
  },

  // 5. PROJECTS (List-based layout)
  projects: [
    {
      title: "Insight News Aggregator",
      description: "A full-stack news briefing platform designed to provide users with a personalized, curated content experience. The system utilizes a Redis caching layer to significantly minimize data fetch latency and enhance user experience.",
      period: "11.2025–Present",
      github: "https://github.com/nikhilr-r/insight-aggregator",
      link: "https://github.com/nikhilr-r/insight-aggregator",
      tags: ["React", "Node.js", "Redis", "API Integration", "Full-Stack Development"]
    },
    {
      title: "Farmiq",
      description: "An agricultural technology solution designed to support farmers in Maharashtra. The platform aggregates and delivers critical information, including real-time weather updates, fertilizer recommendations, and relevant government scheme data, to empower data-driven farming decisions.",
      period: "09.2025–10.2025",
      github: "https://github.com/nikhilr-r/Farmiq",
      link: "https://farmiq-nikr.vercel.app",
      tags: ["Web Development", "Data Aggregation", "AgriTech", "Vercel Deployment"]
    },
    {
      title: "Offline-First Voice Assistant (Banking Kiosk)",
      description: "An AI-powered banking kiosk architectural prototype that prioritizes data privacy and accessibility. By leveraging local Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG), the system operates entirely offline, eliminating dependency on internet connectivity or external API keys.",
      period: "10.2025–11.2025",
      github: "https://github.com/nikhilr-r/brainBack_hack",
      link: "https://github.com/nikhilr-r/brainBack_hack",
      tags: ["Artificial Intelligence", "LLM", "RAG", "Privacy-First Architecture", "Embedded Systems"]
    },
    {
      title: "AI Resume Analyzer",
      description: "AI Resume Analyzer is a web app I built using React, TypeScript, Tailwind CSS, Puter.js, and Zustand.  It allows users to upload resumes, securely store them, and instantly receive AI-powered ATS scores and feedback tailored to job descriptions.   I developed this project to explore AI in recruitment systems and practice modern web technologies like serverless auth, file storage, and client-side AI evaluation.",
      period: "06.2025–08.2025",
      github: "https://github.com/nikhilr-r/ai-resume-analyze",
      link: "https://github.com/nikhilr-r/ai-resume-analyze",
      tags: ["React", "Puter.js", "Zustand"]
    },
    {
      title: "RSA Encryption System",
      description: "A web-based RSA encryption tool built with Spring Boot and modern web technologies.",
      period: "07.2025–08.2025",
      github: "https://github.com/nikhilr-r/RSA-Cryptography-Tool",
      link: "https://github.com/nikhilr-r/RSA-Cryptography-Tool",
      tags: ["Cryptography", "SpringBoot", "Security"]
    }
  ],

  // 6. Experience (Matches Chanh Dai's "Work" section)
  experience: [
    {
      company: "Upcoming Internship Season",
      role: "Aspiring AI Engineer",
      period: "Feb 2026",
      description: "Preparing for intensive industry experience in AI/ML and Backend Engineering."
    },
    {
      company: "University of [Your College Name]",
      role: "B.Tech CSE (AI)",
      period: "2023 - Present",
      description: "Focusing on Data Structures, Algorithms, and Deep Learning architectures."
    }
  ]
};
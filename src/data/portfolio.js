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
      title: "Insight - Personalized News Aggregator",
      description: "Insight is a distraction-free, personalized news briefing platform built using the MERN Stack .Unlike traditional news portals filled with random headlines, Insight gives users full control by letting them curate feeds based on topics (AI, Technology, Startups, etc.) and regions (India, USA, UK, etc.).",
      period: "11.2025–Present",
      link: "https://github.com/nikhilr-r/insight-aggregator",
      tags: ["MERN", "System Design", "Redis", "AI"]
    },
    {
      title: "AI Resume Analyzer",
      description: "AI Resume Analyzer is a web app I built using React, TypeScript, Tailwind CSS, Puter.js, and Zustand.  It allows users to upload resumes, securely store them, and instantly receive AI-powered ATS scores and feedback tailored to job descriptions.   I developed this project to explore AI in recruitment systems and practice modern web technologies like serverless auth, file storage, and client-side AI evaluation.",
      period: "06.2025–08.2025",
      link: "https://github.com/nikhilr-r/ai-resume-analyze",
      tags: ["React", "Puter.js", "Zustand"]
    },
    {
      title: "RSA Encryption System",
      description: "A web-based RSA encryption tool built with Spring Boot and modern web technologies.",
      period: "07.2025–08.2025",
      link: "https://github.com/nikhilr-r/RSA-Cryptography-Tool",
      tags: ["Cryptography", "SpringBoot", "Security"]
    },
    {
      title: "Neural Network Research",
      description: "Analysis of activation functions and overfitting in Deep Learning models.",
      period: "06.2024–08.2024",
      link: "https://github.com/nikhilr-r",
      tags: ["AI", "Research", "Python"]
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
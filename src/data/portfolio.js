import { 
  Brain, 
  Cloud, 
  ShieldCheck, 
  Database, 
  Cpu, 
  Code2, 
  Terminal 
} from "lucide-react";

export const PORTFOLIO_DATA = {
  // 1. Personal Identity
  name: "Nikhil Rajput", // <--- Put your real name here
  role: "CSE (AI) Student & System Architect",
  
  // 2. The "Hero" Tagline
  bio: "Bridging the gap between complex Neural Networks and scalable Cloud Infrastructure.",
  
  // 3. Tech Stack (For the Marquee or Skills section)
  techStack: [
    "Python", "TensorFlow", "PyTorch", 
    "Proxmox VE", "Docker", "Linux (KVM)", 
    "React", "Next.js", "SQL", "Git"
  ],

  // 4. Social Links
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "mailto:you@example.com"
  },

  // 5. THE BENTO GRID PROJECTS (Your Real Work)
  projects: [
    {
      title: "Private Cloud Infrastructure",
      description: "A bare-metal virtualization environment built with Proxmox VE, supporting KVM/LXC containers for distributed system testing.",
      icon: Cloud,
      link: "https://github.com/yourusername/project-cloud", // <--- Add real link if you have one
      size: "large", // Spans 2 columns (The "Hero" project)
      tags: ["Proxmox", "Networking", "Linux"]
    },
    {
      title: "RSA Encryption System",
      description: "A custom cryptography implementation focusing on prime number generation and public-key security protocols.",
      icon: ShieldCheck,
      link: "https://github.com/yourusername/rsa-crypto",
      size: "medium", // Spans 2 columns
      tags: ["Cryptography", "Python", "Math"]
    },
    {
      title: "Neural Network Research",
      description: "Analysis of activation functions and overfitting in Deep Learning models.",
      icon: Brain,
      link: "#",
      size: "small", // Square box
      tags: ["AI", "Research"]
    },
    {
      title: "College ERP Database",
      description: "Normalized SQL schema design for university admission and fee management.",
      icon: Database,
      link: "#",
      size: "small", // Square box
      tags: ["SQL", "System Design"]
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
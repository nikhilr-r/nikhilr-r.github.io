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
  name: "Nikhil Rajput",
  role: "Full-Stack / Backend Systems Engineer",
  
  // 2. The "Hero" Tagline
  bio: "Engineering high-throughput backend architectures, scalable cloud infrastructure, and AI systems.",
  
  // 3. Tech Stack (For the Marquee or Skills section)
  techStack: [
    "Python",
    "PyTorch",
    "TypeScript",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Prisma",
    "React",
    "Electron",
    "SQLite",
    "Docker",
    "Java",
    "C++",
    "C",
    "SQL",
    "MongoDB",
    "Android",
    "PHP",
    "HTML",
    "CSS"
  ],

  // 4. Social Links
  socials: {
    github: "https://github.com/nikhilr-r",
    linkedin: "https://www.linkedin.com/in/nikhil-rajput-nr1906/",
    email: "mailto:rajputnikhil1906@gmail.com"
  },

  // 5. PROJECTS (List-based layout)
  projects: [
    {
      title: "Industrial ERP, Accounting Engine & WhatsApp Dispatch Pipeline",
      clientProject: true,
      category: "client",
      badge: "Commercial Client Project",
      role: "Full-Stack / Backend Systems Engineer",
      period: "07.2026–Present",
      description: "A production industrial ERP and double-entry financial accounting system engineered for a commercial timber enterprise. Architected high-speed POS invoicing with atomic ACID transactions, row-level concurrency locking on inventory batches, multi-split payment reconciliation (Cash, Bank UPI, Credit Khata), and an asynchronous WhatsApp Cloud API notification engine for automated tax invoice dispatch.",
      challenges: [
        {
          title: "Custom WhatsApp Business API Engine with Dynamic Parameterized Templates",
          solution: "Architected an asynchronous notification pipeline decoupled from the checkout HTTP cycle using background retry queues with exponential backoff and webhook delivery tracking (sent, delivered, read, failed). Dynamically interpolates customer names, invoice numbers, payment splits, and authenticated PDF download URLs without blocking in-store POS checkouts."
        },
        {
          title: "Atomic ACID Transactions & Concurrency Control in POS Invoicing",
          solution: "Encapsulated invoice generation, multi-item batch deductions, compound GST tax splits (CGST/SGST/IGST), and debtor ledger updates inside Prisma $transaction atomic blocks with row-level pessimistic locking on SKU inventory batches to eliminate race conditions and overselling."
        },
        {
          title: "Multi-Split Payment Tracking (Cash, Bank Transfer, UPI & Credit Khata)",
          solution: "Normalized polymorphic payment records into an automated double-entry ledger. Segregates physical cash register drawer inflows from verified bank deposits while recalculating rolling debtor balances and enforcing credit limits."
        },
        {
          title: "Multi-Tier Role-Based Access Control (RBAC) & Immutable Data Auditing",
          solution: "Implemented JWT middleware enforcing role tiers (Boss, Manager, Cashier), shielding proprietary supplier purchase margins and financial P&L reports while recording all stock mutations and discount overrides into an immutable audit changelog."
        }
      ],
      highlights: [
        "Architected an asynchronous WhatsApp Business API notification pipeline with a custom template engine, dispatching dynamic invoice receipts and balance reminders with automated retry queues.",
        "Enforced ACID transactional integrity using Prisma $transaction blocks, orchestrating concurrent inventory deductions, multi-split payment logging (Cash, Bank UPI, Credit Khata), and customer ledger updates with zero race conditions.",
        "Engineered a double-entry financial ledger service segregating cash drawer registers from bank accounts, automating debtor balances, credit limits, and aging payment reports.",
        "Implemented multi-tier Role-Based Access Control (RBAC: Boss, Manager, Cashier) via JWT middleware, safeguarding proprietary purchase margins and financial P&L records."
      ],
      isPrivate: true,
      privateNote: "Proprietary Commercial System (Client NDA)",
      tags: [
        "Node.js",
        "Express.js",
        "TypeScript",
        "Prisma ORM",
        "PostgreSQL",
        "WhatsApp Cloud API",
        "React 19",
        "Tailwind CSS",
        "Docker",
        "ACID Transactions",
        "RBAC"
      ]
    },
    {
      title: "Mobile Shop Management System — Billing, Inventory & IMEI Engine",
      clientProject: true,
      category: "client",
      badge: "Commercial Client Project",
      role: "Full-Stack Desktop & Systems Engineer",
      period: "07.2026–Present",
      description: "A production desktop management suite engineered for a retail mobile and electronics client. Encompasses POS billing, dual-IMEI device tracking, multi-mode payment handling, automated supplier purchases and customer returns, warranty management, expense tracking, and thermal printer receipt generation.",
      challenges: [
        {
          title: "Dual-IMEI Device Tracking & High-Speed POS Invoicing",
          solution: "Architected a serial-tracking data model indexing individual devices by dual-IMEI identifiers. Supports continuous barcode scanner inputs, instant warranty verification, customer khata reconciliation, and direct thermal printer dispatch."
        },
        {
          title: "Real-Time Inventory Analytics, Valuation & Margin Tracking",
          solution: "Engineered an automated business intelligence engine calculating live stock valuations, per-brand profit margins, dead-stock aging alerts, and predictive replenishment recommendations across product lines."
        },
        {
          title: "Automated WhatsApp Promoter Alerts & Target Monitoring",
          solution: "Integrated automated WhatsApp webhook messaging dispatching daily sales summaries, target achievements, and promoter commission milestones directly to store owners and staff."
        },
        {
          title: "Zero-Downtime Offline Desktop Architecture & Data Safety",
          solution: "Constructed the application on an Electron + React + Prisma ORM + SQLite stack to guarantee 100% offline availability in retail environments with automated database backup snapshots and immutable audit logs."
        }
      ],
      highlights: [
        "Delivered a production desktop POS and inventory platform actively deployed in retail mobile storefront operations.",
        "Implemented serial IMEI tracking with barcode scanner workflows, payment splits, and thermal printing support.",
        "Engineered real-time retail analytics for stock valuation, model-wise profit margins, and dead-stock insights.",
        "Integrated WhatsApp-based promoter alerts and model sales targets to automate performance communication."
      ],
      isPrivate: true,
      privateNote: "Proprietary Commercial System (Client NDA)",
      tags: [
        "Electron",
        "React",
        "TypeScript",
        "Prisma ORM",
        "SQLite",
        "Tailwind CSS",
        "Thermal Printer API",
        "POS Billing",
        "IMEI Tracking"
      ]
    },
    {
      title: "Insight News Aggregator",
      category: "fullstack",
      role: "Full-Stack Engineer",
      badge: "MERN + Redis Caching",
      period: "11.2025–Present",
      description: "A distraction-free, personalized news briefing platform built on the MERN stack with high-speed Redis caching. Enables granular feed curation combining global geographic regions and technical sectors (AI, Cloud, Startups) with sub-50ms retrieval.",
      challenges: [
        {
          title: "Sub-50ms Feed Delivery & Third-Party Rate Limit Mitigation",
          solution: "Engineered a Redis (Upstash) cache-aside layer with auto-expiring keys for popular country-topic intersections, reducing API response times by 90% (from ~500ms down to <50ms) while eliminating external NewsAPI rate exhaustion."
        },
        {
          title: "Compound Topic-Region Filtering & Temporal Ordering",
          solution: "Formulated compound indexed queries in MongoDB to dynamically aggregate and sort multi-dimensional articles, enforcing strict 72-hour freshness windows with newest-first ordering."
        },
        {
          title: "Stateless Authentication & Adaptive Glassmorphism Interface",
          solution: "Secured personal feed endpoints using JWT and Bcrypt tokenized authorization, integrated with a responsive glassmorphic React interface featuring OS-synced dark/light theming."
        }
      ],
      highlights: [
        "Reduced API response times from ~500ms to <50ms utilizing an Upstash Redis cache-aside strategy for multi-region news feeds.",
        "Architected dual-parameter querying (Country + Topics) with MongoDB preference persistence and automated cache invalidation.",
        "Secured endpoints using JWT authentication and Bcrypt cryptographic hashing within an Express middleware pipeline."
      ],
      github: "https://github.com/nikhilr-r/insight-aggregator",
      link: "https://github.com/nikhilr-r/insight-aggregator",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Redis", "JWT", "REST API", "Tailwind CSS"]
    },
    {
      title: "Farmiq (Agriq V1)",
      category: "fullstack",
      role: "Full-Stack Developer & Product Architect",
      badge: "GovTech & AgriTech Platform",
      period: "09.2025–10.2025",
      description: "A farmer-first civic tech and agricultural intelligence platform tailored for Maharashtra's farming community. Unifies central and state government subsidy discovery, an AI-powered crop disease diagnosis tool ('Crop Doctor'), personalized crop schedules, and a geo-mapped directory of regional agricultural officers.",
      challenges: [
        {
          title: "High-Accessibility Trilingual Interface for Rural Literacy",
          solution: "Designed a zero-friction, mobile-first interface supporting native Marathi, Hindi, and English localization, eliminating complex login bottlenecks so rural farmers can immediately access subsidy eligibility data."
        },
        {
          title: "AI-Assisted Crop Disease Diagnosis ('Crop Doctor')",
          solution: "Integrated an image upload and computer vision pipeline delivering rapid identification of crop infections and tailored remedy advisories for major cash crops like cotton and sugarcane."
        },
        {
          title: "Dynamic Agronomic Lifecycle & Climate Scheduling",
          solution: "Built an interactive Crop Calendar engine calculating phased irrigation, nutrient dosage, and pest control milestones based on specific sowing dates and localized weather forecasts."
        }
      ],
      highlights: [
        "Built an intelligent repository indexing Maharashtra and central government schemes, subsidies, and agricultural loan waivers.",
        "Engineered the 'Crop Doctor' AI module for image-based disease diagnosis and actionable treatment recommendations.",
        "Developed a geo-mapped directory connecting farmers directly with district and taluka agricultural extension officers."
      ],
      github: "https://github.com/nikhilr-r/Farmiq",
      link: "https://farmiq-nikr.vercel.app",
      tags: ["React", "Vite", "Tailwind CSS", "Node.js", "AI Image Diagnosis", "i18n Localization", "AgriTech", "Vercel"]
    },
    {
      title: "Offline-First Voice Assistant (BankBot / BrainBack.AI)",
      category: "ai",
      role: "AI Systems & Backend Architect",
      badge: "2x Hackathon Winner Prototype",
      period: "10.2025–11.2025",
      description: "A 100% offline, privacy-first conversational voice assistant engineered for high-security banking kiosk terminals. Executes voice recognition (faster-whisper), vector search (ChromaDB RAG), local LLM inference (Ollama), and speech synthesis (pyttsx3) strictly on-device without internet access or external API calls.",
      challenges: [
        {
          title: "Zero-Egress Multi-Modal Pipeline on Edge Hardware",
          solution: "Choreographed an end-to-end local pipeline (faster-whisper STT → sentence-transformers embedding → ChromaDB vector retrieval → Ollama LLM → pyttsx3 TTS) ensuring sensitive customer financial inquiries never leave the kiosk terminal."
        },
        {
          title: "Sub-Second Conversational Turnaround via Audio Caching",
          solution: "Implemented an in-memory WAV caching layer for synthesized speech and optimized local embedding retrieval, reducing overall round-trip query latency to maintain conversational flow on edge devices."
        },
        {
          title: "Deterministic Banking Compliance & Hallucination Prevention",
          solution: "Structured strict banking FAQ knowledge-base context bounds in RAG system prompts, guaranteeing the model adheres strictly to verified interest rates, account policies, and KYC guidelines without hallucinating."
        }
      ],
      highlights: [
        "Won 2x Hackathons by delivering a fully operational, zero-cloud banking kiosk assistant operating entirely on local compute.",
        "Achieved sub-second vector search across 40+ operational banking policies using ChromaDB and sentence-transformers.",
        "Built a modular Flask orchestration engine managing multi-turn customer session states and live kiosk audio streams."
      ],
      github: "https://github.com/nikhilr-r/brainBack_hack",
      link: "https://github.com/nikhilr-r/brainBack_hack",
      tags: ["Python", "Flask", "faster-whisper", "ChromaDB", "RAG", "Ollama LLM", "Edge AI", "Privacy-First"]
    },
    {
      title: "AI Resume Analyzer & ATS Evaluation Engine",
      category: "ai",
      role: "Frontend & AI Systems Engineer",
      badge: "Serverless AI Web App",
      period: "06.2025–08.2025",
      description: "A modern serverless recruitment evaluation platform that parses resumes, computes ATS (Applicant Tracking System) compatibility scores, and provides real-time revision feedback tailored to target job descriptions using client-side AI evaluation.",
      challenges: [
        {
          title: "Serverless Document Vault & Encrypted Client Auth",
          solution: "Leveraged Puter.js serverless microservices for client-side authentication and zero-backend encrypted file storage, ensuring candidates' resumes remain confidential without database maintenance overhead."
        },
        {
          title: "Algorithmic ATS Parsing & Job Description Matching",
          solution: "Engineered rule-based and AI-driven ATS evaluation algorithms calculating match percentages, keyword frequency vectors, formatting compliance, and missing prerequisite skills against target job descriptions."
        },
        {
          title: "Predictable Global State in Multi-Step Workflow",
          solution: "Employed Zustand for lightweight, reactive state management across document upload, parsing, scoring visualization, and PDF report export, eliminating unnecessary re-renders."
        }
      ],
      highlights: [
        "Architected a serverless recruitment tool using Puter.js for client-side cloud auth and encrypted file storage.",
        "Constructed automated ATS metric algorithms calculating candidate-to-job match rates and missing skill recommendations.",
        "Streamlined multi-stage application state utilizing Zustand and responsive Tailwind CSS interfaces."
      ],
      github: "https://github.com/nikhilr-r/ai-resume-analyze",
      link: "https://github.com/nikhilr-r/ai-resume-analyze",
      tags: ["React", "TypeScript", "Tailwind CSS", "Puter.js", "Zustand", "ATS Evaluation", "Client-Side AI"]
    },
    {
      title: "RSA Encryption System & Cryptosystem Suite",
      category: "security",
      role: "Backend & Security Developer",
      badge: "Security & Cryptography Suite",
      period: "07.2025–08.2025",
      description: "A web-based asymmetric RSA cryptography suite built with Spring Boot and Java BigInteger. Features mathematical key-pair generation across customizable bit-lengths (2048, 3072, and 4096 bits), file-payload encryption, and secure decryption with cryptographic exception handling.",
      challenges: [
        {
          title: "High-Precision Prime Generation & Asymmetric Math",
          solution: "Implemented asymmetric key-generation algorithms using Java BigInteger probabilistic primality testing (Miller-Rabin), generating cryptographically resilient 2048, 3072, and 4096-bit public/private key pairs."
        },
        {
          title: "Memory-Safe File Encryption & Payload Chunking",
          solution: "Structured a stream-based encryption pipeline to process binary and text files in discrete mathematical blocks, preventing JVM OutOfMemory exceptions on large document payloads."
        },
        {
          title: "Cryptographic Input Validation & Attack Mitigation",
          solution: "Enforced Base64 encoding sanitization, input bounds validation, and strict private key verification to guard against malformed ciphertexts and padding vulnerability vectors."
        }
      ],
      highlights: [
        "Engineered asymmetric RSA cryptosystem supporting up to 4096-bit key-pair generation and verification.",
        "Built Spring Boot REST API for binary and text payload encryption/decryption with strict cryptographic error handling.",
        "Developed responsive, modern Tailwind CSS interface for real-time key generation and file processing."
      ],
      github: "https://github.com/nikhilr-r/RSA-Cryptography-Tool",
      link: "https://github.com/nikhilr-r/RSA-Cryptography-Tool",
      tags: ["Java 17", "Spring Boot", "Cryptography", "RSA 4096-bit", "Maven", "Tailwind CSS", "Application Security"]
    }
  ],

  // 6. Experience
  experience: [
    {
      company: "Avis Pixel",
      role: "Software Development Engineer (SDE) Intern",
      period: "Feb 2026 – Jun 2026",
      location: "Pune, India",
      description: "Responsible for developing and enhancing the enterprise Exam Management System using PHP and MySQL/DBMS. Designed and implemented backend functionalities, managed databases, streamlined exam-related workflows, and improved overall system performance and user experience.",
      achievements: [
        "Designed and implemented backend modules and RESTful endpoints for the core Exam Management System.",
        "Optimized relational database schemas and indexing in MySQL to accelerate reporting and evaluation workflows.",
        "Streamlined end-to-end examination management pipelines, reducing processing overhead for student assessments.",
        "Collaborated on responsive UI integrations and system performance tuning across high-traffic testing cycles."
      ],
      skills: ["PHP", "MySQL", "DBMS", "REST APIs", "Backend Engineering", "Workflow Optimization"]
    },
    {
      company: "Freelance Software Engineer",
      role: "Commercial Systems & Full-Stack Developer",
      period: "Jul 2026 – Present",
      location: "Pune / Remote",
      description: "Partnered directly with commercial retail and industrial enterprise clients to engineer and deploy production software solutions: an Industrial Timber ERP with automated WhatsApp dispatch & ACID financial ledger, and a Retail Mobile POS system with dual-IMEI tracking.",
      achievements: [
        "Delivered Industrial Enterprise ERP managing POS invoicing, inventory batches, multi-mode payment reconciliation, and GST compliance for a timber wholesaler.",
        "Engineered Desktop Mobile Shop Management platform with Electron, Prisma, SQLite, dual-IMEI serialization, and thermal printing.",
        "Architected automated WhatsApp Cloud API messaging pipelines for tax invoice delivery, balance reminders, and sales targets.",
        "Managed complete lifecycle from client discovery, schema design, and testing through deployment and production maintenance."
      ],
      skills: ["Node.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Electron", "React", "WhatsApp Cloud API", "SQLite", "Docker"]
    },
    {
      company: "Vishwakarma Institute of Technology (VIT Pune)",
      role: "B.Tech in Computer Science & Engineering (AI)",
      period: "2024 – 2027",
      location: "Pune, India",
      description: "Focusing on High-Throughput Distributed Systems, Data Structures & Algorithms, and Deep Learning Architectures.",
      achievements: [
        "Current Academic CGPA / SGPA: 9.29",
        "Published 2 Research Papers indexed in Scopus",
        "2x Hackathon Winner (Voice AI Banking Kiosk & Agritech)"
      ],
      skills: ["Data Structures", "Algorithms", "Distributed Systems", "Deep Learning", "Spring Boot", "MERN Stack"]
    }
  ]
};
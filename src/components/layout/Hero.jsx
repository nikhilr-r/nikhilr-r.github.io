import React, { useState, useEffect } from "react";
import {
  MapPin,
  Mail,
  Clock,
  User,
  Terminal,
  Cpu,
  Globe,
  FileText
} from "lucide-react";

import { PORTFOLIO_DATA } from "../../data/portfolio";
import ResumeViewer from "../ui/ResumeViewer";
import "./Hero.css";

export default function Hero() {
  const [time, setTime] = useState("");
  const [resumeOpen, setResumeOpen] = useState(false);

  // Live Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key.toLowerCase() === "r") {
        setResumeOpen(true);
      }
      if (e.key === "Escape") {
        setResumeOpen(false);
      }
    };
  
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <section
        id="home"
        className="pt-20 md:pt-24 pb-20 border-b border-zinc-800/50"
      >
        <div className="max-w-4xl mx-auto px-6">

          {/* PROFILE HEADER */}
          <div className="flex items-center gap-6 mb-16">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="w-20 h-20 rounded-full overflow-hidden border border-zinc-800">
                <img
                  src="/nikh2.jpg"
                  alt="Nikhil Rajput"
                  className="w-full h-full object-cover"
                  loading="eager"
                  draggable="false"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-black rounded-full" />
            </div>

            {/* Name & Title */}
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-2.5 mb-1">
                {PORTFOLIO_DATA.name}
                <span className="text-blue-500" title="Verified">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
                  </svg>
                </span>
              </h1>
              <p className="text-base text-zinc-400">
                Software Developer | AI Engineer
              </p>
            </div>
          </div>

          {/* INFO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 border-t border-zinc-800/50 pt-8">

            {/* Left */}
            <div className="space-y-4">
              <div className="flex gap-3 text-sm text-zinc-400">
                <Terminal size={14} className="text-zinc-600" />
                <span>
                  CSE (AI) Student @ <span className="text-zinc-200">VIT Pune</span>
                </span>
              </div>

              <div className="flex gap-3 text-sm text-zinc-400">
                <Cpu size={14} className="text-zinc-600" />
                <span>Concept → Code → Impact</span>
              </div>

              <div className="flex gap-3 text-sm text-zinc-400">
                <MapPin size={14} className="text-zinc-600" />
                <span>Pune, India</span>
              </div>

              <div className="flex gap-3 text-sm text-zinc-400">
  <Globe size={14} className="text-zinc-600" />
  <a
    href="https://nikhilr-r.github.io/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white underline underline-offset-4 transition-colors"
  >
    nikhilr-r.github.io
  </a>
</div>
            </div>

            {/* Right */}
            <div className="space-y-4">
              <div className="flex gap-3 text-sm text-zinc-400">
                <Clock size={14} className="text-zinc-600" />
                <span>
                  {time} <span className="text-zinc-600">// Local Time</span>
                </span>
              </div>

              <div className="flex gap-3 text-sm text-zinc-400">
                <Mail size={14} className="text-zinc-600" />
                <a
                  href="mailto:rajputnikhil1906@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  rajputnikhil1906@gmail.com
                </a>
              </div>

              <div className="flex gap-3 text-sm text-zinc-400">
                <User size={14} className="text-zinc-600" />
                <span>he / him</span>
              </div>

              {/* ✅ Resume (same tab modal) */}
              <div className="flex items-start gap-3 text-sm text-zinc-400">
  <FileText size={14} className="text-zinc-600 mt-0.5 shrink-0" />
  <button
    onClick={() => setResumeOpen(true)}
    className="hover:text-white underline underline-offset-4 transition-colors"
  >
    Resume
  </button>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 Resume Modal */}
      <ResumeViewer open={resumeOpen} onClose={() => setResumeOpen(false)} />

    </>
  );
}

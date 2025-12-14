import React, { useState, useEffect } from "react";
import {
  MapPin,
  Mail,
  Clock,
  User,
  Terminal,
  Cpu,
  Globe
} from "lucide-react";
import { PORTFOLIO_DATA } from "../../data/portfolio";

export default function Hero() {
  const [time, setTime] = useState("");

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

  return (
    <section className="pt-32 pb-16 border-b border-zinc-800/50 bg-zinc-900/20">
      <div className="max-w-3xl mx-auto px-6">

        {/* 1. PIXEL LOGO */}
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-2 gap-1 w-24 h-24 opacity-90">
            <div className="bg-white rounded-sm" />
            <div className="bg-zinc-800 rounded-sm" />
            <div className="bg-zinc-800 rounded-sm" />
            <div className="bg-white rounded-sm" />
          </div>
        </div>

        {/* 2. PROFILE HEADER */}
        <div className="flex items-center gap-6 mb-12">

          {/* Avatar */}
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-zinc-700">
              <img
                src="/nikhil.jpg"   // ✅ HIGH QUALITY IMAGE (500x500+)
                alt="Nikhil Rajput"
                className="
                  w-full h-full
                  object-cover object-center
                  contrast-105 brightness-105
                "
                loading="eager"
                draggable="false"
              />
            </div>

            {/* Online Status */}
            <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-black rounded-full" />
          </div>

          {/* Name & Title */}
          <div>
            <h1 className="text-4xl font-bold text-white tracking-tight flex items-center gap-2">
              {PORTFOLIO_DATA.name}

              {/* Verified Badge */}
              <span className="text-blue-500" title="Verified">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .495.083.965.238 1.4-1.272.65-2.147 2.02-2.147 3.6 0 1.435.71 2.79 1.77 3.75-.12.54-.183 1.05-.183 1.666 0 2.21 1.71 3.998 3.818 3.998.47 0 .92-.084 1.336-.25.62 1.333 1.926 2.25 3.437 2.25s2.817-.917 3.437-2.25c.415.165.866.25 1.336.25 2.11 0 3.818-1.79 3.818-4 0-.616-.063-1.127-.183-1.666 1.06-.96 1.77-2.315 1.77-3.75z" />
                </svg>
              </span>
            </h1>

            <p className="text-lg text-zinc-400 font-medium mt-1">
              Software Developer | AI Engineer
            </p>
          </div>
        </div>

        {/* 3. INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 border-t border-zinc-800 pt-8 font-mono text-sm text-zinc-400">

          {/* Left */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Terminal size={16} className="text-zinc-600" />
              <span>
                CSE (AI) Student @ <span className="text-zinc-200">VIT Pune</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Cpu size={16} className="text-zinc-600" />
              <span>Concept → Code → Impact</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-zinc-600" />
              <span>Pune, India</span>
            </div>

            <div className="flex items-center gap-3">
              <Globe size={16} className="text-zinc-600" />
              <a href="#" className="hover:text-white transition-colors">
                yourwebsite.com
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Clock size={16} className="text-zinc-600" />
              <span>
                {time} <span className="text-zinc-600">// Local Time</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={16} className="text-zinc-600" />
              <a
                href="mailto:rajputnikhil1906@gmail.com"
                className="hover:text-white transition-colors"
              >
                rajputnikhil1906@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <User size={16} className="text-zinc-600" />
              <span>he / him</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

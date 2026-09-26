import React, { useState } from "react";
import { Copy, Check, Mail } from "lucide-react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rajputnikhil1906@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="footer" className="footer">
      <footer className="relative z-10 py-20 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to ship <span className="text-zinc-500">production code?</span>
        </h2>
        
        {/* Sub text */}
        <p className="text-zinc-400 mb-8 max-w-lg mx-auto leading-relaxed">
          I am currently looking for{" "}
          <span className="text-white font-medium">SDE Internship opportunities</span>.  
          If you need an engineer who understands both{" "}
          <span className="text-white">backend systems</span> and{" "}
          <span className="text-white">scalable full-stack development</span>, let’s talk.
        </p>

        {/* CTA Group */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a 
            href="mailto:rajputnikhil1906@gmail.com" 
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-black bg-white rounded-full hover:bg-zinc-200 transition-colors"
          >
            Start a Conversation
          </a>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-full hover:bg-zinc-800 hover:text-white transition-colors cursor-pointer"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check size={14} className="text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-20 text-xs text-zinc-600">
          <p>&copy; {new Date().getFullYear()} Nikhil Rajput.</p>
        </div>

      </footer>
    </section>
  );
}

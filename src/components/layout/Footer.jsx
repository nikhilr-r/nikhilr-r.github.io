import React from "react";

export default function Footer() {
  return (
    <footer className="relative z-10 py-20 text-center">
      <h2 className="text-3xl font-bold text-white mb-6">
        Ready to build something <span className="text-zinc-500">intelligent?</span>
      </h2>
      
      <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
        I am currently looking for <span className="text-white">Internship opportunities</span> for Feb 2026. 
        If you need an engineer who understands both AI models and Cloud Infrastructure, let's talk.
      </p>

      <a 
        href="mailto:rajputnikhil1906@gmail.com" 
        className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-black bg-white rounded-full hover:bg-zinc-200 transition-colors"
      >
        Start a Conversation
      </a>

      <div className="mt-20 text-xs text-zinc-600">
        <p>&copy; {new Date().getFullYear()} Built with React, Tailwind & Three.js</p>
      </div>
    </footer>
  );
}
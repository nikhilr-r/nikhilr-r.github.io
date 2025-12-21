import React from "react";
import ReactDOM from "react-dom"; // Import ReactDOM for Portal
import { motion, AnimatePresence } from "framer-motion";
import { X, Move } from "lucide-react";

export default function ResumeViewer({ open, onClose }) {
  // We use a Portal to render this directly into the document.body
  // This prevents parent transforms from breaking the 'fixed' positioning
  if (typeof document === "undefined") return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* DRAGGABLE MODAL */}
          <motion.div
            drag
            dragMomentum={false}
            dragElastic={0.05} // Reduced elasticity for a firmer feel
            // We use Framer for centering (x: "-50%", y: "-50%") instead of Tailwind
            // This ensures dragging works correctly from the center
            initial={{ opacity: 0, scale: 0.95, x: "-50%", y: "-45%" }} 
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, x: "-50%", y: "-45%" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="
              fixed z-[1000]
              top-1/2 left-1/2
              w-[90vw] max-w-5xl
              h-[85vh]
              bg-zinc-900
              border border-zinc-800
              rounded-xl
              shadow-2xl
              overflow-hidden
              cursor-grab active:cursor-grabbing
            "
          >
            {/* HEADER */}
            <div 
              // Added onPointerDown to prevent drag from starting when clicking buttons
              className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900 select-none"
            >
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <Move size={14} className="text-zinc-500" />
                <span className="font-mono">Nikhil_Rajput_Resume.pdf</span>
              </div>

              <button
                onClick={onClose}
                // Stop propagation so clicking X doesn't trigger drag
                onPointerDown={(e) => e.stopPropagation()} 
                className="p-1.5 rounded-md hover:bg-red-500/10 text-zinc-400 hover:text-red-400 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* PDF FRAME */}
            <div className="w-full h-full bg-zinc-950 relative">
               {/* Prevent iframe from capturing drag events so you can still drag the modal by the header */}
              <iframe
                src="/Nikhil_Rajput_Resume.pdf"
                title="Resume"
                className="w-full h-[calc(100%-3.5rem)] border-none block"
              />
              {/* Invisible overlay for dragging if needed, but usually dragging by header is better */}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body // 👈 Renders the modal into the <body> tag
  );
}
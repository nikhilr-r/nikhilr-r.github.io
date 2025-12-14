/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // The "Zinc" palette we used before (keeping for compatibility)
        background: "#09090b", 
        surface: "#18181b",    
        border: "#27272a",     
        text: "#fafafa",       
        muted: "#a1a1aa",
        
        // NEW: Cyberpunk aesthetic colors
        charcoal: {
          900: '#0a0a0a', 
          800: '#121212', 
          700: '#1a1a1a', 
        },
        neon: {
          cyan: '#00ffff', 
          blue: '#007aff',
        }
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, #ffffff0a 1px, transparent 1px), linear-gradient(to bottom, #ffffff0a 1px, transparent 1px)',
        'dot-pattern': 'radial-gradient(#ffffff1a 1px, transparent 0)',
      },
      boxShadow: {
        'neon-glow': '0 0 15px -3px rgba(0, 255, 255, 0.3)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'], // Ensure you have a mono font or system-mono fallback
      },
    },
  },
  plugins: [],
}
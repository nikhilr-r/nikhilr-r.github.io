/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // The "Zinc" palette from chanhdai.com
        background: "#09090b", 
        surface: "#18181b",    
        border: "#27272a",     
        text: "#fafafa",       
        muted: "#a1a1aa",      
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
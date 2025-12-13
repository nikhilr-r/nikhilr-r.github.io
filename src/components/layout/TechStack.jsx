import React from "react";

// A reusable "Icon Box" component
const TechItem = ({ name, color }) => (
  <div className="flex items-center gap-2 px-3 py-2 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-zinc-600 hover:bg-zinc-800 transition-all cursor-default group">
    {/* We use a colored dot to represent the brand instead of a heavy SVG library */}
    <span className={`w-2 h-2 rounded-full ${color} shadow-[0_0_8px] shadow-current opacity-70 group-hover:opacity-100`} />
    <span className="text-xs font-medium text-zinc-400 group-hover:text-white">{name}</span>
  </div>
);

export default function TechStack() {
  return (
    <section className="py-12 border-t border-b border-zinc-800/50 bg-black/20 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6">
         <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-6">
            Engineering Stack
         </h3>
         
         <div className="flex flex-wrap gap-3">
           {/* Languages */}
           <TechItem name="Python" color="text-yellow-400" />
           <TechItem name="JavaScript" color="text-yellow-300" />
           <TechItem name="TypeScript" color="text-blue-500" />
           
           <div className="w-px h-6 bg-zinc-800 mx-2" /> {/* Divider */}

           {/* AI / ML */}
           <TechItem name="PyTorch" color="text-orange-500" />
           <TechItem name="TensorFlow" color="text-orange-400" />
           <TechItem name="OpenCV" color="text-green-400" />
           
           <div className="w-px h-6 bg-zinc-800 mx-2" /> {/* Divider */}

           {/* Web & Cloud */}
           <TechItem name="React" color="text-blue-400" />
           <TechItem name="Next.js" color="text-white" />
           <TechItem name="Docker" color="text-blue-600" />
           <TechItem name="Proxmox" color="text-orange-600" />
           <TechItem name="Linux" color="text-yellow-200" />
         </div>
      </div>
    </section>
  );
}
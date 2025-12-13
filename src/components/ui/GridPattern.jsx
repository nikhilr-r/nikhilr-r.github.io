import React from "react";

export function GridPattern({ width = 40, height = 40, className }) {
  // Generate a unique ID so we can use multiple grids on one page
  const patternId = React.useId();

  return (
    <svg
      className={`absolute inset-0 h-full w-full stroke-zinc-800/50 [mask-image:linear-gradient(to_bottom,white,transparent)] ${className}`}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x="50%"
          y={-1}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
    </svg>
  );
}

export function SectionDivider() {
  return (
    <div className="relative h-24 w-full overflow-hidden">
        {/* The Fade Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
        
        {/* The Grid Lines */}
        <GridPattern className="opacity-50" />
    </div>
  );
}
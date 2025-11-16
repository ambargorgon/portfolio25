// src/components/TimelineItem.tsx
import React from "react";

interface TimelineItemProps {
  title: string;
  date: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, date, description }) => {
  return (
    <div
      className="
    group
    relative px-12 pb-10 border-l border-white/30 w-[110%]

    transition-all duration-500 ease-out
    hover:scale-[1.05]
    hover:border-transparent
    hover:bg-white/20           
    hover:backdrop-blur-sm  
    hover:rounded-2xl 
    hover:shadow-[0_0_18px_rgba(255,255,255,0.8)]
    hover:px-12 hover:pt-6 hover:mb-12
    hover:z-10 
  "
    >
      <span
        className="
          absolute left-[-10px] top-0.5 w-5 h-5
          bg-[#fff8e6cc] rounded-full
          border border-white/60
          shadow-[0_0_10px_rgba(255,255,255,0.6)]
          transition-all duration-300

          group-hover:opacity-0
          group-hover:scale-0
        "
      />

      {/* Contenido */}
      <h3 className="text-[#fff] font-semibold text-lg">{title}</h3>
      <p className="text-sm text-white/70 font-light mb-1">{date}</p>
      <p className="text-white text-md text-justify">{description}</p>
    </div>
  );
};

export default TimelineItem;

// src/components/TimelineItem.tsx
import React from "react";

interface TimelineItemProps {
  title: string;
  date: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, date, description }) => {
  return (

    <div className="relative pl-6 border-l border-white/30 pb-8">
      {/* Punto circular */}
      <span className="absolute left-[-10px] top-0.5 w-5 h-5 bg-[#fff8e6cc] rounded-full" />

      {/* Contenido */}
      <h3 className="text-[#fff] font-semibold text-lg">{title}</h3>
      <p className="text-sm text-white/70 font-light mb-1">{date}</p>
      <p className="text-white text-md text-justify">{description}</p>
    </div>
  );
};

export default TimelineItem;

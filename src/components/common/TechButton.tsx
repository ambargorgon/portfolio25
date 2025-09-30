// src/components/IconButton.tsx
import React from "react";

interface IconButtonProps {
  text: string;
  iconSrc: string; // ruta al SVG en /public
  alt?: string;    // texto alternativo del icono
  onClick?: () => void;
  className?: string; // clases extra opcionales
}

const TechButton: React.FC<IconButtonProps> = ({
  text,
  iconSrc,
  alt = "icon",
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 px-16 py-4 rounded-xl 
       text-white  bg-[rgba(108, 103, 103, 0.43)]  bg-[rgba(103,103,103,0.4)]  
        hover:scale-105 hover:shadow-lg hover:cursor-pointer transition-all duration-300
        ${className}
      `}
    >
      <img src={iconSrc} alt={alt} className="w-5 h-5" />
      <span className="font-bold">{text}</span>
    </button>
  );
};

export default TechButton;

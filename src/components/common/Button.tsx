// src/components/IconButton.tsx
import React from "react";

interface IconButtonProps {
  text: string;
  iconSrc: string; // ruta al SVG en /public
  alt?: string;    // texto alternativo del icono
  onClick?: () => void;
  className?: string; // clases extra opcionales
}

const IconButton: React.FC<IconButtonProps> = ({
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
        flex items-center gap-2 px-10 py-4 rounded-md border 
        border-white text-white  bg-[rgba(255,255,255,0.3)]  
        hover:scale-105 hover:shadow-lg hover:cursor-pointer transition-all duration-300 shadow-[2.012px_2.617px_0_0_rgba(255,255,255,1)]
        ${className}
      `}
    >
      <img src={iconSrc} alt={alt} className="w-5 h-5" />
      <span className="font-bold">{text}</span>
    </button>
  );
};

export default IconButton;

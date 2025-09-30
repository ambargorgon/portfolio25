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
      className={`flex items-center gap-3 px-6 py-3 bg-[#dddddd25] rounded-xl shadow-lg hover:brightness-110 transition duration-200"> 
         ${className}
      `}
    >
      <img src={iconSrc} alt={alt} className="w-5 h-5" />
      <span className="font-bold">{text}</span>
    </button>
  );
};

export default IconButton;

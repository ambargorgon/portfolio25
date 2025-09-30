import React from "react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  tags: string[];
  reverse?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  image,
  title,
  description,
  tags,
  reverse = false,
}) => {
  return (
    <Link
      to={`/project/${id}`}
      className={`group flex flex-col md:flex-row rounded-lg px-6 py-4 items-center gap-6 my-6 transition duration-300 transform 
        hover:scale-[1.02] hover:shadow-lg hover:shadow-white/20 cursor-pointer
        border border-white/10 shadow-sm md:border-0 md:shadow-none
        ${reverse ? "md:flex-row-reverse md:self-end" : "md:self-start"}`}
    >
      {/* Imagen */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-64 h-40 object-cover rounded-xl shadow-md transition duration-300 group-hover:brightness-110 group-hover:contrast-125"
        />

        {/* Overlay negro SOLO en desktop */}
        <div className="hidden md:flex absolute inset-0 rounded-xl bg-black/0 group-hover:bg-black/70 transition items-center justify-center pb-4">
          <div className="opacity-0 group-hover:opacity-100 transition duration-300">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30">
              <img src="/icons/navigate.svg" alt="navigate" className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Texto + Botón en mobile */}
      <div className="text-left max-w-md w-full flex flex-col gap-3">
        <h3 className="text-xl font-semibold text-white">{title}</h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-md font-bold bg-white/20 text-white px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-md text-white/80">{description}</p>

        {/* Botón redondo SOLO visible en mobile */}
        <div className="flex justify-start mt-4 md:hidden">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition">
            <img src="/icons/navigate.svg" alt="navigate" className="w-5 h-5" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

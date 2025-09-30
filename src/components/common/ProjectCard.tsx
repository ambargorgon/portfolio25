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
      className={`group flex flex-col md:flex-row rounded-lg px-10 py-4 items-center gap-6 my-8 transition duration-300 transform 
        hover:scale-[1.02] hover:shadow-lg hover:shadow-white/20 cursor-pointer
        ${reverse ? "md:flex-row-reverse md:self-end" : "md:self-start"}`}
    >
      {/* Imagen */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-64 h-40 object-cover rounded-xl shadow-md transition duration-300 group-hover:brightness-110 group-hover:contrast-125"
        />
        <div className="absolute inset-0 rounded-xl bg-black/0 group-hover:bg-black/20 transition"></div>
      </div>

      {/* Texto */}
      <div className="text-left max-w-md">
        <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-2">
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
      </div>
    </Link>
  );
};

export default ProjectCard;

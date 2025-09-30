// src/components/ProjectCard.tsx
import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  codeUrl?: string;
  linkUrl?: string;
  reverse?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  tags,
  codeUrl,
  linkUrl,
  reverse = false,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row rounded-lg px-10 py-4 hover:bg-white/20 hover:transition duration-300 items-center gap-6 my-8 
    ${reverse ? "md:flex-row-reverse md:self-end" : "md:self-start"}`}
    >

      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-64 h-40 object-cover rounded-xl shadow-md "
        />
        {codeUrl && (
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="scale-[0.8] absolute -bottom-6 left-14 group cursor-pointer flex items-center rounded-xl bg-[#212121] px-4 py-2 text-white font-extrabold text-lg transition active:scale-95"
          >
            <div className="flex items-center justify-center w-8 h-8 transition-transform duration-500 group-hover:scale-125">
              <img
                src="/icons/github.svg"
                alt="Github"
                width={24}
                height={24}
                className="transition-transform duration-300 group-hover:translate-x-8 group-hover:scale-110 group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <span className="ml-2 w-18 transition-opacity duration-500 group-hover:opacity-0">
              Code
            </span>
          </a>
        )}
        {linkUrl && (
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="scale-[0.8] absolute -bottom-6 left-14 group cursor-pointer flex items-center rounded-xl bg-[#212121] px-4 py-2 text-white font-extrabold text-lg transition active:scale-95"
          >
            <div className="flex items-center justify-center w-8 h-8 transition-transform duration-500 group-hover:scale-125">
              <img
                src="/icons/url.svg"
                alt="Url icon"
                width={24}
                height={24}
                className="transition-transform duration-300 group-hover:translate-x-8 group-hover:scale-110 group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <span className="ml-2 w-18 transition-opacity duration-500 group-hover:opacity-0">
              Web
            </span>
          </a>
        )}
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

        <p className="text-md  text-white/80">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

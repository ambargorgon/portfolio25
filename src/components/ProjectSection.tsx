import React from "react";
import ProjectCard from "./common/ProjectCard";
import { useTranslation } from "react-i18next";
import projectsEs from "../text/projects.es";
import projectsEn from "../text/projects.en";
import { Link } from "react-router-dom";

const ProjectsSection: React.FC = () => {
const { t, i18n } = useTranslation();

  const projects = i18n.language === "es" ? projectsEs : projectsEn;


  return (
    <div className="relative flex flex-col md:items-stretch">
      <h3 className="w-[90%] ml-10 border-b-2 self-end font-bold pr-36 my-16 text-right pb-2 text-2xl border-white/50">
        {t("projects")}
      </h3>
      <section className="flex flex-col self-center items-center justify-center px-4 md:px-20 h-[100%]">
        {projects.map((project) => (
          <Link key={project.id} to={`/project/${project.id}`} className="w-full">
            <ProjectCard
              id={project.id}
              image={project.image}
              title={t(project.title)} // traducción
              description={t(project.description)}
              tags={project.tags}
              reverse={project.reverse}
            />
          </Link>
        ))}
      </section>
    </div>
  );
};

export default ProjectsSection;

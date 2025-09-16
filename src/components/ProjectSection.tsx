// src/components/ProjectsSection.tsx
import React from "react";
import ProjectCard from "./common/ProjectCard";
import { useTranslation } from "react-i18next";

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col md:items-stretch">
      <h3 className="w-[90%] ml-10 border-b-1 self-end font-bold pr-36 my-16 text-right pb-2 text-2xl border-white ">{t("projects")}</h3>
      <section className=" flex flex-col self-center items-center justify-center px-4 md:px-20 h-[100%]">
        <ProjectCard
          image="/images/estoyaca.webp"
          title={t("project1-title")}
          description={t("project1-description")}
          tags={["Expo", "Typescript", "React Native", "Tailwind CSS"]}
        />
        <ProjectCard
          image="/images/chimi.webp"
          title={t("project2-title")}
          description={t("project2-description")}
          tags={["React", "Figma", "Mobile"]}
          linkUrl="https://chimi-menu-adaptado.vercel.app/"
          reverse
        />
        <ProjectCard
          image="/images/buensabor.webp"
          title={t("project3-title")}
          description={t("project3-description")}
          tags={["Next.js", "Typescript", "SpringBoot", "MySQL"]}
          codeUrl="https://github.com/Maiten-Oviedo/ElBuenSaborFrontend"
        />
        <ProjectCard
          image="/images/zoomout.webp"
          title={t("project4-title")}
          description={t("project4-description")}
          tags={["Firebase", "React", "Javascript"]}
          codeUrl="https://github.com/ambargorgon/proyecto-zoomout-ecommerce"
          reverse
        />
      </section>
    </div>
  );
};

export default ProjectsSection;

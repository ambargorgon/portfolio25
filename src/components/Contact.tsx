import React from 'react'
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import projectsEs from "../text/projects.es";
import projectsEn from "../text/projects.en";
import IconButton from './common/Button';

type Props = {}

const Contact = (props: Props) => {

    const { t, i18n } = useTranslation();
    const { id } = useParams<{ id: string }>();
  
    const projects = i18n.language === "es" ? projectsEs : projectsEn;
    const project = projects.find((p) => p.id === id);

  return (

      <div className="flex flex-col items-center justify-center mt-10 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold">{t("project.interested")}</h3>
        <p className="text-base sm:text-lg my-4">{t("project.contact")}</p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 my-3">
          <IconButton
            text="Gmail"
            iconSrc="/icons/mail.svg"
            alt="Email icon"
            onClick={() => window.open("mailto:ambargorgon@gmail.com", "_blank")}
          />

          {project.codeUrl && (
            <button
              className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-xl shadow-lg hover:brightness-110 transition duration-200"
              onClick={() => window.open(project.codeUrl, "_blank")}
            >
              <img src="/icons/github.svg" alt="github" className="w-5 h-5 filter invert" />
              <p className="text-black font-bold text-sm sm:text-base">{t("project.codeButton")}</p>
            </button>
          )}

          {project.prototypeUrl && (
            <button
              className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-xl shadow-lg hover:brightness-110 transition duration-200"
              onClick={() => window.open(project.prototypeUrl, "_blank")}
            >
              <img src="/icons/figma.svg" alt="figma" className="w-5 h-5 filter invert" />
              <p className="text-black font-bold text-sm sm:text-base">{t("project.prototypeButton")}</p>
            </button>
          )}
          {project.linkUrl && (
            <button
              className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-xl shadow-lg hover:brightness-110 transition duration-200"
              onClick={() => window.open(project.linkUrl, "_blank")}
            >
              <img src="/icons/url.svg" alt="figma" className="w-5 h-5 filter invert" />
              <p className="text-black font-bold text-sm sm:text-base">{t("project.linkButton")}</p>
            </button>
          )}
        </div>
      </div>

  )
}

export default Contact
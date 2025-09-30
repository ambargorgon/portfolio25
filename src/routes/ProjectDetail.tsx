import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import projectsEs from "../text/projects.es";
import projectsEn from "../text/projects.en";
import IconButton from "../common/Button";
import Carousel from "../common/Carrousel";

export default function ProjectDetail() {
  const { t, i18n } = useTranslation();
  const { id } = useParams<{ id: string }>();

  const projects = i18n.language === "es" ? projectsEs : projectsEn;
  const project = projects.find((p) => p.id === id);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-xl text-red-600">{t("project.notFound")}</h1>
        <Link to="/" className="text-blue-600 hover:underline">
          ← {t("project.backHome")}
        </Link>
      </div>
    );
  }

  const handlePrev = () =>
    setActiveIndex((prev) =>
      prev !== null ? (prev - 1 + project.gallery.length) % project.gallery.length : null
    );
  const handleNext = () =>
    setActiveIndex((prev) =>
      prev !== null ? (prev + 1) % project.gallery.length : null
    );

  return (
    <div className="mx-auto p-4 sm:p-6 md:p-10 lg:p-12 max-w-7xl flex flex-col gap-12">
      {/* HEADER */}
      <header className=" pt-24 flex flex-col md:flex-row md:items-center gap-6 w-full">
        {/* Info */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">{project.title}</h1>
          <p className="text-base sm:text-lg md:text-xl">{project.description}</p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-2">
            {project.tags.map((tag, idx) => (
              <IconButton
                key={idx}
                text={tag}
                iconSrc={`/icons/${tag.toLowerCase()}.svg`}
                alt={`${tag} icon`}
              />
            ))}
          </div>

          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-sm mt-4">
            <div className="flex items-center gap-2">
              <img src="/icons/calendar.svg" alt="calendar" className="w-5 sm:w-6" />
              <span>{project.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/icons/team.svg" alt="team" className="w-5 sm:w-6" />
              <span>{project.team}</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/icons/target.svg" alt="rol" className="w-5 sm:w-6" />
              <span>{project.target}</span>
            </div>
          </div>
        </div>

        {/* Imagen */}
        <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            src={project.image}
            alt={project.title}
            className="object-contain w-[80%] sm:w-[60%] md:w-[90%] rounded-xl shadow-lg"
          />
        </div>
      </header>

      <div className="w-full border-t border-white"></div>

      {/* SOBRE EL PROYECTO */}
      <section className="w-full md:w-3/4 lg:w-2/3 text-left">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-2 text-white">
          {t("project.aboutTitle")}
        </h2>
        <p className="leading-relaxed text-base sm:text-lg md:text-xl mb-4">
          <Trans i18nKey={project.about}
            components={{
              0: <br />, // cada <0/> será reemplazado por un <br/>
              1: <span className="font-bold" /> // <1>texto</1> será un span bold
            }}
          />
        </p>
      </section>

      <div className="w-full border-t border-white"></div>

      {/* MI ROL */}
      <section className=" md:w-3/4 lg:w-3/4 xl:w-3/4 md:text-right my-6 self-end text-end">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-2">{t("project.roleTitle")}</h2>
        <p className="leading-relaxed text-base sm:text-lg md:text-xl mb-4 text-end">
          <Trans i18nKey={project.rol}
            components={{
              0: <br />, // cada <0/> será reemplazado por un <br/>
              1: <span className="font-bold" /> // <1>texto</1> será un span bold
            }}
          />
        </p>
      </section>

      <div className="w-full border-t border-white"></div>

      {/* GALERÍA */}
      <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-2 text-center md:text-left">
        {t("project.galleryTitle")}
      </h2>
      {project.gallery == undefined ? (
        <div className="flex flex-col items-center w-full justify-center "> 
          <img src="/icons/process.svg" alt="" className="w-24" />
          <p className="text-xl my-4">Proyecto en proceso...</p>
        </div>
      ) : (

        <Carousel
          items={project.gallery.map((item, idx) =>
            item.type === "image" ? (
              <img
                key={idx}
                src={item.src}
                alt={`gallery-${idx}`}
                className="object-contain max-h-[80vh] max-w-[90vw] rounded-xl"
              />
            ) : (

              <video
                key={idx}
                src={item.src}
                className="object-contain max-h-[80vh] max-w-[90vw] rounded-xl"
                muted
                controls
              />
            )
          )}
        />
      )
      }


      {/* CONTACTO */}
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

      {/* VOLVER */}
      <div className="text-center mt-6">
        <Link
          to="/"
          className="inline-block font-bold hover:scale-105 transition-transform duration-300"
        >
          ← {t("project.backHome")}
        </Link>
      </div>
    </div>
  );
}

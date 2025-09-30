import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import projectsEs from "../text/projects.es";
import projectsEn from "../text/projects.en";
import IconButton from "../components/common/Button";
import TechCarousel from "../components/Tecnologias";
import HeaderProject from "../components/HeaderProject";
import Carousel from "../components/common/Carrousel";
import Contact from "../components/Contact";


export default function ProjectDetail() {

  
  const { t, i18n } = useTranslation();
  const { id } = useParams<{ id: string }>();

  const projects = i18n.language === "es" ? projectsEs : projectsEn;
  const project = projects.find((p) => p.id === id);


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

  return (
    <div className="mx-auto p-4 sm:p-6 md:p-10 lg:p-12 max-w-7xl flex flex-col gap-12">
     <HeaderProject />

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
 <Contact />

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

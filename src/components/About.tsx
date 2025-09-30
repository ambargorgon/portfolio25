// About.tsx
import { motion, useAnimation, type Variants, type Transition } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import IconButton from "./common/Button";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

const spring: Transition = {
  type: "spring",
  damping: 12,
  stiffness: 120,
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: spring },
};

const About = () => {
  const { t, i18n } = useTranslation();

  const handleDownload = () => {
    const lang = i18n.language; // "es" o "en"
    const fileName = lang === "es" ? "cv.pdf" : "cv-eng.pdf";

    const link = document.createElement("a");
    link.href = `/${fileName}`;
    link.download = fileName;
    link.click();
  };

  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      className="flex flex-col items-center gap-10 mt-16 px-6 md:px-20"
    >
      {/* Título */}
      <motion.h3
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        className="w-full md:w-[80%] border-b border-white font-bold text-center text-2xl md:text-3xl"
      >
        {t("about-me")}
      </motion.h3>

      {/* Contenido principal */}
      <motion.section
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        className="flex flex-col md:flex-row items-center justify-center gap-10 "
      >
        <p className="lg:w-[45%] md:w-[60%] w-[80%] md:text-lg text-xl font-medium leading-relaxed text-center md:text-left whitespace-pre-line">
          <Trans i18nKey="about-me-text"
            components={{
              0: <br />, // cada <0/> será reemplazado por un <br/>
              1: <span className="font-bold" /> // <1>texto</1> será un span bold
            }}
          />
        </p>

        <div className="w-[400px] h-[450px] md:w-[550px] md:h-[550px]">
          <img src="/images/foto1.png" alt="perfil" className="pt-10" />
        </div>

      </motion.section>

      {/* Botón animado */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
      >
        <div className="flex items-center justify-center gap-10">
          <IconButton
            text={t("download-cv")}
            iconSrc="icons/cv.svg"
            alt="Curriculum icon"
            onClick={handleDownload}
          />
          <IconButton
            text="Linkedin"
            iconSrc="icons/linkedin.svg"
            alt="Linkedin icon"
            onClick={() => window.open("https://www.linkedin.com/in/ambar-gorgon-6a8442212/", "_blank")}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default About;

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
        className="w-full md:w-[80%] border-b border-white font-bold text-center pb-2 text-2xl md:text-3xl"
      >
        {t("about-me")}
      </motion.h3>

      {/* Contenido principal */}
      <motion.section
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        className="flex flex-col md:flex-row items-center justify-center gap-10 py-10"
      >
        <p className="lg:w-[45%] md:w-[60%]  text-base md:text-lg font-medium leading-relaxed text-center md:text-left whitespace-pre-line">
          <Trans i18nKey="about-me-text"
            components={{
              0: <br />, // cada <0/> será reemplazado por un <br/>
              1: <span className="font-bold" /> // <1>texto</1> será un span bold
            }}
          />
        </p>
        <img
          src="/images/avatar-1.webp"
          alt="avatar"
          className="w-48 h-auto md:w-72 rounded-xl"
        />
      </motion.section>

      {/* Botón animado */}
      <motion.div
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      className="mt-4"
    >
      <IconButton
        text={t("download-cv")}
        iconSrc="icons/cv.svg"
        alt="Curriculum icon"
        onClick={handleDownload}
      />
    </motion.div>
    </section>
  );
};

export default About;

// About.tsx
import { motion, useAnimation, type Variants, type Transition } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import IconButton from "./common/Button";

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
        Sobre Mi
      </motion.h3>

      {/* Contenido principal */}
      <motion.section
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        className="flex flex-col md:flex-row items-center justify-center gap-10 py-10"
      >
        <p className="w-full md:w-[60%] text-base md:text-lg font-medium leading-relaxed text-center md:text-left">
          Hola 👋, soy <span className="font-bold">Ambar Gorgon</span>, Técnica en
          Programación y desarrolladora FrontEnd.
          <br />
          <br /> Me apasiona crear interfaces atractivas y funcionales, y también
          tengo experiencia trabajando con backends y bases de datos, lo que me
          permite entender los proyectos de forma integral. Además, gracias a mi
          formación, puedo documentar y planificar cada etapa buscando siempre
          la ruta más óptima.
          <br />
          <br /> Creo que cada idea merece una solución a medida, por eso me
          gusta escuchar, conversar y encontrar la mejor forma de transformarla
          en una experiencia digital única. 🚀
          <br />
          <br /> Si tenés un proyecto en mente, ¡me encantaría charlarlo y
          pensar cómo hacerlo realidad!
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
        <IconButton text="Currículum" iconSrc="icons/cv.svg" alt="Curriculum icon"           
        onClick={() => window.open("/cv.pdf", "_blank")}
        />
      </motion.div>
    </section>
  );
};

export default About;
